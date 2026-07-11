import { generateText } from "ai";

import { createGoogleGenerativeAI, google } from "@ai-sdk/google";

import prisma from "@/db";

import { inngest } from "./client";

// const goole = createGoogleGenerativeAI()

export const testAI = inngest.createFunction(
  { id: "blue-lock", triggers: { event: "blue/lock" } },
  async ({ event, step }) => {
    const { text } = await step.ai.wrap("blue-lock-ai", generateText, {
      model: google("gemini-3.5-flash"),
      experimental_telemetry: {
        isEnabled: true,
        recordInputs: true,
        recordOutputs: true,
      },
      instructions:
        "You are a blue lock mega fan and up to date with all things blue lock like manga, anime and works of the mangaka",
      prompt:
        "Who is Yoichi Isagi and will he be the ultimate egoist in Blue Lock",
      reasoning: "high",
    });

    return { message: `Blue Lock ${event.data.id}`, text };
  },
);
