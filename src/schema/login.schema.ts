import { z } from "zod";

export const loginSchema = z.object({
  email: z.string(),
  password: z.string().min(6, "Password must be 6 character long"),
});


export type LoginSchemaValue = z.infer<typeof loginSchema>