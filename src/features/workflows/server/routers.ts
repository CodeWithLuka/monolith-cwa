import { generateSlug } from "random-word-slugs";

import prisma from "@/db";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import z from "zod";

export const workflowsRouter = createTRPCRouter({
  create: protectedProcedure.mutation(({ ctx }) => {
    const userId = ctx.auth.user.id;

    const createdWorkflow = prisma.workflow.create({
      data: {
        name: generateSlug(3),
        userId,
      },
    });

    return createdWorkflow;
  }),
  getOne: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(({ ctx, input }) => {
      const userId = ctx.auth.user.id;
      const workflowId = input.id;

      const existingWorkflow = prisma.workflow.findUniqueOrThrow({
        where: {
          userId,
          id: workflowId,
        },
      });

      return existingWorkflow;
    }),
  getMany: protectedProcedure.query(({ ctx }) => {
    const userId = ctx.auth.user.id;

    const existingWorkflows = prisma.workflow.findMany({
      where: {
        userId,
      },
    });

    return existingWorkflows;
  }),
  remove: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      const userId = ctx.auth.user.id;
      const workflowId = input.id;

      const removedWorkflow = prisma.workflow.delete({
        where: {
          userId,
          id: workflowId,
        },
      });

      return removedWorkflow;
    }),
  updateName: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1),
      }),
    )
    .mutation(({ ctx, input }) => {
      const userId = ctx.auth.user.id;
      const workflowId = input.id;
      const workflowName = input.name;

      const updatedWorkflowName = prisma.workflow.update({
        where: {
          userId,
          id: workflowId,
        },
        data: {
          name: workflowName,
        },
      });

      return updatedWorkflowName;
    }),
});
