import { requireAuth } from "@/features/auth/lib/auth-utils";

const CredentialsPage = async () => {
  await requireAuth();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-6">
      <h1 className="text-3xl"> Think, Credentials</h1>
    </div>
  );
};

export default CredentialsPage;
