import { baseProcedure, createTRPCRouter } from "../init";
import prisma from "@/db";

export const appRouter = createTRPCRouter({
  getUsers: baseProcedure.query(() => {
    const users = prisma.user.findMany();
    return users;
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
