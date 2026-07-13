"use client";

import { EntityPagination } from "@/features/entity/ui/components/entity-pagination";

import { useSuspenseWorkflows } from "../hooks/use-workflows";
import { useWorkflowsParams } from "../hooks/use-workflows-params";

export const WorkflowsPagination = () => {
  const workflows = useSuspenseWorkflows();
  const [params, setParams] = useWorkflowsParams();

  return (
    <EntityPagination
      disabled={workflows.isFetching}
      totalPages={workflows.data.totalPages}
      page={workflows.data.page}
      onPageChange={(page) => setParams({ ...params, page })}
    />
  );
};
