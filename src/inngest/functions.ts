import prisma from "@/db";
import { inngest } from "./client";

export const createWorkflow = inngest.createFunction(
  { id: "create-workflow", triggers: { event: "create/workflow" } },
  async ({ event, step }) => {
    await step.sleep("creating-name", "5s");

    await step.sleep("fetching-name", "5s");

    await step.sleep("show-name", "5s");

    const createdWorkflow = await step.run("create-blue-lock-workflow", () => {
      return prisma.workflow.create({
        data: {
          name: "blue-lock-inngest",
        },
      });
    });

    return { message: `Workflow ${event.data.id} created`, createdWorkflow };
  },
);
