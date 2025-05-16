import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.string().email().min(1).max(255).trim(),
    password: z.string().min(8).max(255).trim(),
    confirmPassword: z.string().min(8).max(255).trim(),
    userAgent: z.string().trim().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
