import { requireAuth } from "@/features/auth/lib/auth-utils";

interface WorkflowIdPageProps {
  params: Promise<{
    workflowId: string;
  }>;
}

const WorkflowIdPage = async ({ params }: WorkflowIdPageProps) => {
  const { workflowId } = await params;
  await requireAuth();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-6">
      <h1 className="text-3xl"> Think, WorkflowId: {workflowId}</h1>
    </div>
  );
};

export default WorkflowIdPage;
