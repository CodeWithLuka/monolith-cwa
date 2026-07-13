"use client";

import { ReactNode } from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { TRPCReactProvider } from "@/trpc/client";

interface ClientProvidersProps {
  children: ReactNode;
}

export const ClientProviders = ({ children }: ClientProvidersProps) => {
  return (
    <TRPCReactProvider>
      <TooltipProvider>
        <NuqsAdapter>
          {children}
          <Toaster richColors position="top-right" />
        </NuqsAdapter>
      </TooltipProvider>
    </TRPCReactProvider>
  );
};
