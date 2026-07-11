"use client";

import Link from "next/link";
import { toast } from "sonner";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  CreditCardIcon,
  FolderOpenIcon,
  HistoryIcon,
  KeyIcon,
  LogOutIcon,
  StarIcon,
} from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { useHasActiveSubscription } from "@/hooks/subscriptions/use-subscription";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { NavUser } from "./nav-user";

const menuItems = [
  {
    title: "Main",
    items: [
      {
        title: "Workflows",
        icon: FolderOpenIcon,
        url: "/workflows",
      },
      {
        title: "Credentials",
        icon: KeyIcon,
        url: "/credentials",
      },
      {
        title: "Executions",
        icon: HistoryIcon,
        url: "/executions",
      },
    ],
  },
];

export const DashboardSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { hasActiveSubscription, isLoading } = useHasActiveSubscription();

  const onUpgrade = async () => {
    const toastId = "upgrade";

    await authClient.checkout(
      {
        slug: "monolith-pro",
      },
      {
        onError: ({ error }) => {
          toast.error("Couldn't start checkout", {
            id: toastId,
            description:
              error.message || "Something went wrong. Please try again.",
            duration: 5000,
          });
        },
      },
    );
  };

  const onBillingPortal = async () => {
    const toastId = "billing";

    await authClient.customer.portal(
      {},
      {
        onError: ({ error }) => {
          toast.error("Couldn't open billing portal", {
            id: toastId,
            description:
              error.message || "Something went wrong. Please try again.",
            duration: 5000,
          });
        },
      },
    );
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              render={<Link href="/workflows" prefetch />}
              className="gap-x-4 h-10 px-4"
              tooltip="Monolith"
            >
              <Image
                src="/logos/logo.svg"
                alt="Monolith"
                width={30}
                height={30}
              />
              <span className="font-semibold text-sm">Monolith</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {menuItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      isActive={
                        item.url === "/"
                          ? pathname === "/"
                          : pathname.startsWith(item.url)
                      }
                      render={<Link href={item.url} prefetch />}
                      className="gap-x-4 h-10 px-4"
                    >
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          {!hasActiveSubscription && !isLoading && (
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Upgrade to Pro"
                className="gap-x-4 h-10 px-4"
                onClick={onUpgrade}
              >
                <StarIcon className="size-4" />
                <span>Upgrade to Pro</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}

          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Billing Portal"
              className="gap-x-4 h-10 px-4"
              onClick={onBillingPortal}
            >
              <CreditCardIcon className="size-4" />
              <span>Billing Portal</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <NavUser />
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
