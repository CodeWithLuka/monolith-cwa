"use client";

import { ReactNode } from "react";

import { TRPCReactProvider } from "@/trpc/client";

interface ClientProvidersProps {
  children: ReactNode;
}

export const ClientProviders = ({ children }: ClientProvidersProps) => {
  return <TRPCReactProvider>{children}</TRPCReactProvider>;
};
