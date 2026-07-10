import { AuthLayoutView } from "@/features/auth/ui/views/auth-layout-view";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <AuthLayoutView>{children}</AuthLayoutView>;
};

export default AuthLayout;
