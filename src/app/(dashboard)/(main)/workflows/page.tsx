"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const WorkflowsPage = () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data: workflows } = useQuery(trpc.getWorkflows.queryOptions());

  const createWorkflow = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(trpc.getWorkflows.queryOptions());
      },
    }),
  );

  const testAi = useMutation(
    trpc.testAI.mutationOptions({
      onSuccess: () => {
        toast.success("Lock Off");
      },
    }),
  );

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-6">
      <h1 className="text-3xl"> Think, Workflows</h1>
      <Button
        disabled={createWorkflow.isPending}
        onClick={() => createWorkflow.mutate()}
      >
        Create Workflow
      </Button>
      <Button disabled={testAi.isPending} onClick={() => testAi.mutate()}>
        Test AI
      </Button>
      <p>{JSON.stringify(workflows, null, 2)}</p>
    </div>
  );
};

export default WorkflowsPage;
