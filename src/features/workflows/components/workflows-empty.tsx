import { useRouter } from "next/navigation";

import { EntityEmpty } from "@/features/entity/ui/components/entity-emppty";
import { useUpgradeModal } from "@/features/subscriptions/hooks/use-upgrade-modal";

import { useCreateWorkflow } from "../hooks/use-workflows";

export const WorkflowsEmpty = () => {
  const router = useRouter();
  const createWorkflow = useCreateWorkflow();
  const { handleError, modal } = useUpgradeModal();

  const handleCreate = () => {
    createWorkflow.mutate(undefined, {
      onError: (error) => {
        handleError(error);
      },
      onSuccess: (data) => {
        router.push(`/workflows/${data.id}`);
      },
    });
  };

  return (
    <>
      {modal}
      <EntityEmpty
        onNew={handleCreate}
        message="You haven't created any workflows yet. Get started by creating your first workflow"
      />
    </>
  );
};
