import { generateText } from "ai";

import { google } from "@ai-sdk/google";

import prisma from "@/db";
import { inngest } from "@/inngest/client";

import { protectedProcedure, createTRPCRouter } from "../init";

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
  testAI: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "blue/lock",
    });

    return { success: true, message: "Blue Lock AI Created" };
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
