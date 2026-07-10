import { requireUnAuth } from "@/features/auth/lib/auth-utils";
import { LoginForm } from "@/features/auth/ui/components/login-form";

const LoginPage = async () => {
  await requireUnAuth();
  return <LoginForm />;
};

export default LoginPage;
