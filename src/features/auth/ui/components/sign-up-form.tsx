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

import { signUpSchema, type SignUpFormValues } from "../../schema";

export const SignUpForm = () => {
  const router = useRouter();

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: SignUpFormValues) => {
    const toastId = "signup";

    await authClient.signUp.email(
      {
        name: values.name,
        email: values.email,
        password: values.password,
        callbackURL: "/workflows",
      },
      {
        onRequest: () => {
          toast.loading("Creating your account...", {
            id: toastId,
            description: "This will only take a moment.",
          });
        },

        onSuccess: () => {
          toast.success(`Welcome, ${values.name}! 🎉`, {
            id: toastId,
            description: "Your account has been created successfully.",
            duration: 3500,
          });

          router.push("/workflows");
        },

        onError: ({ error }) => {
          toast.error("Couldn't create your account", {
            id: toastId,
            description: error.message,
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
          <CardTitle>Get Started</CardTitle>
          <CardDescription>Create your account to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <form id="sign-up-form" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Button
                  variant="outline"
                  className="w-full"
                  type="button"
                  disabled={isPending}
                >
                  Continue with Github
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  type="button"
                  disabled={isPending}
                >
                  Continue with Google
                </Button>
              </div>
              <div className="grid gap-6">
                <FieldGroup>
                  <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="name">Name</FieldLabel>
                        <Input
                          {...field}
                          id="name"
                          type="text"
                          aria-invalid={fieldState.invalid}
                          placeholder="John Doe"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
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
                  <Controller
                    name="confirmPassword"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="confirmPassword">
                          Confirm Password
                        </FieldLabel>
                        <Input
                          {...field}
                          id="confirmPassword"
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
              form="sign-up-form"
              className="w-full"
              disabled={isPending}
            >
              Login
            </Button>
          </Field>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              prefetch
              className="underline underline-offset-4 hover:text-primary"
            >
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
