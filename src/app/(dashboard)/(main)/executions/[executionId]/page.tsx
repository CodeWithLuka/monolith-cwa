import { requireAuth } from "@/features/auth/lib/auth-utils";

interface ExecutionIdPageProps {
  params: Promise<{
    executionId: string;
  }>;
}

const ExecutionIdPage = async ({ params }: ExecutionIdPageProps) => {
  const { executionId } = await params;
  await requireAuth();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-6">
      <h1 className="text-3xl"> Think, ExecutionId: {executionId}</h1>
    </div>
  );
};

export default ExecutionIdPage;
