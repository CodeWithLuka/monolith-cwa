"use client";

import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { loginSchema, type LoginFormValues } from "../../schema";

export const LoginForm = () => {
  const router = useRouter();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    const toastId = "login";

    await authClient.signIn.email(
      {
        email: values.email,
        password: values.password,
        callbackURL: "/workflows",
      },
      {
        onRequest: () => {
          toast.loading("Signing you in...", {
            id: toastId,
            description: "Checking your credentials.",
          });
        },

        onSuccess: async () => {
          // Get the authenticated user
          const { data } = await authClient.getSession();

          const name = data?.user?.name ?? values.email.split("@")[0];

          toast.success(`Welcome back, ${name}! 👋`, {
            id: toastId,
            description: "Login successful. Redirecting...",
            duration: 3000,
          });

          router.push("/workflows");
        },

        onError: ({ error }) => {
          let message = error.message;

          if (message.toLowerCase().includes("invalid")) {
            message = "Incorrect email or password.";
          }

          if (message.toLowerCase().includes("email")) {
            message = "We couldn't find an account with that email.";
          }

          toast.error("Couldn't sign you in", {
            id: toastId,
            description: message,
            duration: 5000,
          });
        },
      },
    );
  };

  const isPending = form.formState.isSubmitting;

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Login to Continue</CardDescription>
        </CardHeader>
        <CardContent>
          <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Button
                  variant="outline"
                  className="w-full"
                  type="button"
                  disabled={true}
                >
                  <Image
                    src="/logos/github.svg"
                    alt="Github Logo"
                    height={20}
                    width={20}
                  />
                  Continue with Github
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  type="button"
                  disabled={true}
                >
                  <Image
                    src="/logos/google.svg"
                    alt="Google Logo"
                    height={20}
                    width={20}
                  />
                  Continue with Google
                </Button>
              </div>
              <div className="grid gap-6">
                <FieldGroup>
                  <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input
                          {...field}
                          id="email"
                          type="email"
                          aria-invalid={fieldState.invalid}
                          placeholder="m@example.com"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="password"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                        <Input
                          {...field}
                          id="password"
                          type="password"
                          aria-invalid={fieldState.invalid}
                          placeholder="********"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </FieldGroup>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Field>
            <Button
              type="submit"
              form="login-form"
              className="w-full"
              disabled={isPending}
            >
              Login
            </Button>
          </Field>
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              prefetch
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign Up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
