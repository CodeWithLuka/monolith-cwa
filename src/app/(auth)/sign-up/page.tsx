import { requireUnAuth } from "@/features/auth/lib/auth-utils";
import { SignUpForm } from "@/features/auth/ui/components/sign-up-form";

const SignUpPage = async () => {
  await requireUnAuth();
  return <SignUpForm />;
};

export default SignUpPage;
