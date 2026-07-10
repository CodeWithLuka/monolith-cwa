"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

interface HeroWorkflowProps {
  className?: string;
}

interface Node {
  id: string;
  label: string;
  logo: string;
  x: number;
  y: number;
  connections: string[];
}

const nodes: Node[] = [
  {
    id: "gemini",
    label: "Gemini",
    logo: "/logos/gemini.svg",
    x: 50, y: 28,
    connections: ["openai", "claude", "google-forms"],
  },
  {
    id: "openai",
    label: "OpenAI",
    logo: "/logos/openai.svg",
    x: 50, y: 52,
    connections: ["gemini", "claude", "slack"],
  },
  {
    id: "google-forms",
    label: "Google Forms",
    logo: "/logos/googleform.svg",
    x: 18, y: 38,
    connections: ["gemini"],
  },
  {
    id: "claude",
    label: "Claude",
    logo: "/logos/anthropic.svg",
    x: 82, y: 38,
    connections: ["gemini", "openai"],
  },
  {
    id: "slack",
    label: "Slack",
    logo: "/logos/slack.svg",
    x: 50, y: 75,
    connections: ["openai"],
  },
];

function getPos(id: string) {
  return nodes.find((n) => n.id === id)!;
}

function edgePath(from: Node, to: Node) {
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const offset = (dx * 0.1 + dy * 0.15) * 10;
  const cx = midX + offset;
  const cy = midY - offset * 0.6;
  return `M${from.x},${from.y} Q${cx},${cy} ${to.x},${to.y}`;
}

function Edge({ from, to }: { from: Node; to: Node }) {
  const d = edgePath(from, to);

  return (
    <g>
      <path
        d={d}
        className="stroke-border/30"
        strokeWidth="0.25"
        fill="none"
      />
      <path
        d={d}
        className="stroke-primary/30"
        strokeWidth="0.3"
        fill="none"
        strokeDasharray="2 4"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="-12"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </path>
      <circle r="0.4" fill="var(--primary)" opacity="0.7">
        <animateMotion dur="3.5s" repeatCount="indefinite" path={d} />
      </circle>
      <circle r="0.4" fill="var(--primary)" opacity="0.7">
        <animateMotion
          dur="3.5s"
          repeatCount="indefinite"
          path={d}
          begin="1.75s"
        />
      </circle>
      <circle
        r="1.2"
        fill="var(--primary)"
        opacity="0.08"
        className="animate-ping"
        style={{ animationDuration: "3s" }}
      >
        <animateMotion dur="3.5s" repeatCount="indefinite" path={d} />
      </circle>
    </g>
  );
}

export function HeroWorkflow({ className }: HeroWorkflowProps) {
  const edges: { from: Node; to: Node }[] = [];
  const seen = new Set<string>();
  for (const node of nodes) {
    for (const conn of node.connections) {
      const key = [node.id, conn].sort().join("-");
      if (!seen.has(key)) {
        seen.add(key);
        const target = getPos(conn);
        if (target) edges.push({ from: node, to: target });
      }
    }
  }

  return (
    <div className={cn("relative", className)}>
      <div className="relative mx-auto aspect-square w-full max-w-sm">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          {edges.map((e) => (
            <Edge key={`${e.from.id}-${e.to.id}`} from={e.from} to={e.to} />
          ))}

          {nodes.map((node) => (
            <g
              key={node.id}
              className="transition-all duration-500 hover:opacity-100"
            >
              <circle
                cx={node.x}
                cy={node.y}
                r="6"
                className="fill-background/90 stroke-border/40"
                strokeWidth="0.3"
              />
              <circle
                cx={node.x}
                cy={node.y}
                r="2"
                className="fill-primary/10 stroke-primary/30"
                strokeWidth="0.3"
              >
                <animate
                  attributeName="r"
                  values="1.8;2.2;1.8"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx={node.x}
                cy={node.y}
                r="5"
                fill="var(--primary)"
                opacity="0.04"
              >
                <animate
                  attributeName="r"
                  values="4;6;4"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>

              <foreignObject
                x={node.x - 8}
                y={node.y - 8}
                width="16"
                height="16"
              >
                <div className="flex h-full w-full items-center justify-center">
                  <Image
                    src={node.logo}
                    alt={node.label}
                    width={14}
                    height={14}
                    className="h-3.5 w-auto"
                  />
                </div>
              </foreignObject>

              <foreignObject
                x={node.x - 10}
                y={node.y + 6}
                width="20"
                height="4"
              >
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-[2px] font-medium text-muted-foreground">
                    {node.label}
                  </span>
                </div>
              </foreignObject>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
