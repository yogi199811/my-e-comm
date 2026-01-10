import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters.").optional(),
    email: z.string(),
    password: z
      .string()
      .min(6, "password must be al least 6 characters.")
      .optional(),
    confirmPassword: z.string().optional(),
    age: z.number().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
