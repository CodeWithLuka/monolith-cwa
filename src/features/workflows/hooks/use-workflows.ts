import { toast } from "sonner";

import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";

import { useWorkflowsParams } from "./use-workflows-params";

/**
 * Hook to fetch all workflows using suspense
 */
export const useSuspenseWorkflows = () => {
  const trpc = useTRPC();
  const [params] = useWorkflowsParams();

  return useSuspenseQuery(trpc.workflows.getMany.queryOptions(params));
};

/**
 * Hook to create a new workflow
 */
export const useCreateWorkflow = () => {
  const queryClient = useQueryClient();
  const trpc = useTRPC();

  return useMutation(
    trpc.workflows.create.mutationOptions({
      onMutate: () => {
        const toastId = "create-workflow";

        toast.loading("Creating workflow...", {
          id: toastId,
          description: "Setting everything up for you.",
        });

        return { toastId };
      },

      onSuccess: async (data, _, context) => {
        toast.success(`"${data.name}" is ready! 🎉`, {
          id: context?.toastId,
          description: "Your workflow has been created successfully.",
          duration: 3500,
        });

        await queryClient.invalidateQueries(
          trpc.workflows.getMany.queryOptions({}),
        );
      },

      onError: (error, _, context) => {
        toast.error("Couldn't create workflow", {
          id: context?.toastId,
          description: error.message,
          duration: 5000,
        });
      },
    }),
  );
};

/**
 * Hook to remove a workflow
 */
export const useRemoveWorkflow = () => {
  const queryClient = useQueryClient();
  const trpc = useTRPC();

  return useMutation(
    trpc.workflows.remove.mutationOptions({
      onMutate: () => {
        const toastId = "remove-workflow";

        toast.loading("Removing workflow...", {
          id: toastId,
          description: "Deleting your workflow.",
        });

        return { toastId };
      },

      onSuccess: async (data, _, context) => {
        toast.success(`"${data.name}" removed`, {
          id: context?.toastId,
          description: "Your workflow has been deleted successfully.",
          duration: 3500,
        });

        await Promise.all([
          queryClient.invalidateQueries(
            trpc.workflows.getMany.queryOptions({}),
          ),
          queryClient.invalidateQueries(
            trpc.workflows.getOne.queryFilter({ id: data.id }),
          ),
        ]);
      },

      onError: (error, _, context) => {
        toast.error("Couldn't remove workflow", {
          id: context?.toastId,
          description: error.message,
          duration: 5000,
        });
      },
    }),
  );
};
