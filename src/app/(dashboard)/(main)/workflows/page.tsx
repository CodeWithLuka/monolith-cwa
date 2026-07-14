import { Suspense } from "react";
import type { SearchParams } from "nuqs/server";
import { ErrorBoundary } from "react-error-boundary";

import { HydrateClient } from "@/trpc/server";
import { requireAuth } from "@/features/auth/lib/auth-utils";
import { WorkflowsList } from "@/features/workflows/components/workflows-list";
import { workflowsParamsLoader } from "@/features/workflows/server/params-loader";
import { prefetchWorkflows } from "@/features/workflows/server/prefetch-workflows";
import { WorkflowsContainer } from "@/features/workflows/components/workflows-container";
import { WorkflowsLoading } from "@/features/workflows/components/workflows-loading";
import { WorkflowsError } from "@/features/workflows/components/workflows-error";

type WorkflowsPageProps = {
  searchParams: Promise<SearchParams>;
};

const WorkflowsPage = async ({ searchParams }: WorkflowsPageProps) => {
  await requireAuth();

  const params = await workflowsParamsLoader(searchParams);
  prefetchWorkflows(params);
  return (
    <WorkflowsContainer>
      <HydrateClient>
        <ErrorBoundary fallback={<WorkflowsError />}>
          <Suspense fallback={<WorkflowsLoading />}>
            <WorkflowsList />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </WorkflowsContainer>
  );
};

export default WorkflowsPage;
