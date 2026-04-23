"use client";

import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { RegistrationSchema } from "../schemas/registrationSchema";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { UserPen, Mail, Lock, EyeOff, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const form = useForm<z.infer<typeof RegistrationSchema>>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(RegistrationSchema),
  });

  async function onSubmit(data: z.infer<typeof RegistrationSchema>) {
    console.log("ready to send backend", data);
  }

  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  function handleShowConfirmPassword() {
    setShowConfirmPassword((prev) => !prev);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-20">
        <div className="hidden md:block">
          <Image
            src="/registrationPic.png"
            alt="registrationIllustration"
            width={300}
            height={450}
          />
        </div>
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
            Sign Up
          </h1>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FieldGroup>
              <Controller
                control={form.control}
                name="name"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className="relative">
                      <UserPen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <Input
                        className="pl-10"
                        placeholder="Enter your name"
                        {...field}
                      />
                    </div>
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <Input
                        className="pl-10"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </div>
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                control={form.control}
                name="password"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      {showPassword ? (
                        <Eye
                          onClick={handleShowPassword}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
                        />
                      ) : (
                        <EyeOff
                          onClick={handleShowPassword}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
                        />
                      )}

                      <Input
                        type={showPassword ? "text" : "password"}
                        className="px-10"
                        placeholder="Enter password"
                        {...field}
                      />
                    </div>
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                control={form.control}
                name="confirmPassword"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      {showConfirmPassword ? (
                        <Eye
                          onClick={handleShowConfirmPassword}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
                        />
                      ) : (
                        <EyeOff
                          onClick={handleShowConfirmPassword}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
                        />
                      )}

                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        className="pl-10"
                        placeholder="Confirm password"
                        {...field}
                      />
                    </div>
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>

            <Button className="w-full bg-[#FF9090] hover:bg-[#ff7b7b]">
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
