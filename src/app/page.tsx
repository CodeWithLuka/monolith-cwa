import prisma from "@/db";
import { caller } from "@/trpc/server";

export default async function Home() {
  const users = await caller.getUsers();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-6">
      <h1 className="text-3xl text-sky-600"> Think, Different</h1>
      <p>{JSON.stringify(users, null, 2)}</p>
    </div>
  );
}
