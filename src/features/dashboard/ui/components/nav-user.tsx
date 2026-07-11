"use client";

import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  ChevronsUpDown,
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  SparklesIcon,
} from "lucide-react";

import { authClient } from "@/lib/auth-client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavUser() {
  const router = useRouter();
  const { isMobile } = useSidebar();

  const { data: session } = authClient.useSession();

  const user = session?.user;

  const onSignOut = async () => {
    const toastId = "sign-out";

    await authClient.signOut({
      fetchOptions: {
        onRequest: () => {
          toast.loading("Signing you out...", {
            id: toastId,
            description: "Ending your session.",
          });
        },

        onSuccess: () => {
          toast.success("Signed out successfully 👋", {
            id: toastId,
            description: "See you again soon!",
            duration: 3000,
          });

          router.push("/login");
        },

        onError: ({ error }) => {
          toast.error("Couldn't sign you out", {
            id: toastId,
            description:
              error.message || "Something went wrong. Please try again.",
            duration: 5000,
          });
        },
      },
    });
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton
                size="lg"
                className="h-12 gap-x-3 rounded-lg data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                tooltip={user?.name ?? "User"}
              >
                <Avatar className="size-8 rounded-lg">
                  <AvatarImage
                    src="/images/avatar.jpg"
                    alt={user?.name ?? "User"}
                  />
                  <AvatarFallback className="rounded-lg">
                    {user?.name?.charAt(0).toUpperCase() ?? "U"}
                  </AvatarFallback>
                </Avatar>

                <div className="grid flex-1 text-left leading-tight">
                  <span className="truncate text-sm font-medium">
                    {user?.name}
                  </span>

                  <span className="truncate text-xs text-muted-foreground">
                    {user?.email}
                  </span>
                </div>

                <ChevronsUpDown className="size-4 shrink-0" />
              </SidebarMenuButton>
            }
          />

          <DropdownMenuContent
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={8}
            className="w-64 rounded-xl"
          >
            <div className="flex items-center gap-3 px-3 py-3">
              <Avatar className="size-10 rounded-lg">
                <AvatarImage
                  src="/images/avatar.jpg"
                  alt={user?.name ?? "User"}
                />

                <AvatarFallback className="rounded-lg">
                  {user?.name?.charAt(0).toUpperCase() ?? "U"}
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col overflow-hidden">
                <span className="truncate text-sm font-medium">
                  {user?.name}
                </span>

                <span className="truncate text-xs text-muted-foreground">
                  {user?.email}
                </span>
              </div>
            </div>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem
                render={<Link href="/pricing" prefetch />}
                className="gap-x-3 h-10 cursor-pointer"
              >
                <SparklesIcon className="size-4" />
                <span>Upgrade to Pro</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuGroup>
              <DropdownMenuItem
                render={<Link href="/billing" prefetch />}
                className="gap-x-3 h-10 cursor-pointer"
              >
                <CreditCardIcon className="size-4" />
                <span>Billing</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="gap-x-3 h-10 cursor-pointer text-destructive focus:text-destructive"
              onClick={onSignOut}
            >
              <LogOutIcon className="size-4" />
              <span>Sign out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
