import { ReactNode } from "react";

import { DashboardHeader } from "@/features/dashboard/ui/components/dashboard-header";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <DashboardHeader />
      <main className="flex-1">{children}</main>
    </>
  );
};

export default MainLayout;
