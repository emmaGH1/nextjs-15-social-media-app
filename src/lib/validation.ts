import { z } from "zod"

const requiredString = z.string().trim().min(1, "Required")

export const signUpSchema = z.object({
    email: requiredString.email("Invalid email address"),
    username: requiredString.regex(
      /^[a-zA-Z0-9._-]{3,20}$/,
      "Username must be 3-20 characters and can only contain letters, numbers, underscores (_), hyphens (-), and periods (.)"
    ),
    password: requiredString.min(8, "Must be at least 8 characters"),
  });
  
export type SignUpValues = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
    username: requiredString,
    password: requiredString,
});

export type LoginValues = z.infer<typeof loginSchema>; 