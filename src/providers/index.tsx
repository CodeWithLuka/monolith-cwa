"use client";

import { ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { TRPCReactProvider } from "@/trpc/client";

interface ClientProvidersProps {
  children: ReactNode;
}

export const ClientProviders = ({ children }: ClientProvidersProps) => {
  return (
    <TRPCReactProvider>
      <TooltipProvider>{children}</TooltipProvider>
      <Toaster richColors position="top-right" />
    </TRPCReactProvider>
  );
};
