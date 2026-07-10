import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;
