import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z
      .string()
      .email("invalid email address")
      .regex(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Not valid Email address",
      ),
    password: z
      .string()
      .min(3, "password must be at least 3 characters")
      .max(20, "Password should not have more than 20 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "password must be matched",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;
