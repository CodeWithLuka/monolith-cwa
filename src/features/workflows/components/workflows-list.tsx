"use client";

import { EntityList } from "@/features/entity/ui/components/entity-list";

import { useSuspenseWorkflows } from "../hooks/use-workflows";

import { WorkflowItem } from "./workflows-item";
import { WorkflowsEmpty } from "./workflows-empty";

export const WorkflowsList = () => {
  const workflows = useSuspenseWorkflows();

  return (
    <EntityList
      items={workflows.data.items}
      getKey={(workflow) => workflow.id}
      renderItem={(workflow) => <WorkflowItem data={workflow} />}
      emptyView={<WorkflowsEmpty />}
    />
  );
};
