import { Background, CursorGlow } from "@/features/landing/ui/components/design-system";
import { Navbar } from "@/features/landing/ui/components/navbar/navbar";
import { ReactNode } from "react";

interface LandingLayoutProps {
  children: ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <Background>
      <CursorGlow />
      <Navbar />
      {children}
    </Background>
  );
};

export default LandingLayout;
