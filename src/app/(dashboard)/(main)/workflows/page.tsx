import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { HydrateClient } from "@/trpc/server";
import { requireAuth } from "@/features/auth/lib/auth-utils";
import { WorkflowsList } from "@/features/workflows/components/workflows-list";
import { prefetchWorkflows } from "@/features/workflows/server/prefetch-workflows";
import { WorkflowsContainer } from "@/features/workflows/components/workflows-container";

const WorkflowsPage = async () => {
  await requireAuth();

  prefetchWorkflows();

  return (
    <WorkflowsContainer>
      <HydrateClient>
        <ErrorBoundary fallback={<p>Error</p>}>
          <Suspense fallback={<p>Loading</p>}>
            <WorkflowsList />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </WorkflowsContainer>
  );
};

export default WorkflowsPage;
