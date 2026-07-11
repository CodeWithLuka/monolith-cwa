import { protectedProcedure, createTRPCRouter } from "../init";

import prisma from "@/db";
import { inngest } from "@/inngest/client";

export const appRouter = createTRPCRouter({
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "create/workflow",
    });

    return { success: true, message: "Workflow Created" };
  }),
  getWorkflows: protectedProcedure.query(() => {
    const workflows = prisma.workflow.findMany();

    return workflows;
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
