import { ReactNode } from "react";

import { EntityContainer } from "@/features/entity/ui/components/entity-container";

import { WorkflowsHeader } from "./workflows-header";

export const WorkflowsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <EntityContainer
      header={<WorkflowsHeader />}
      search={<></>}
      pagination={<></>}
    >
      {children}
    </EntityContainer>
  );
};
