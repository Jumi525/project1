import { z } from "zod";
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export const FormSchema = z.object({
  email: z.string().describe("Email").email({ message: "Invalid Email" }),
  password: z.string().describe("Password").min(1, "Password is required"),
});

export const SignUpFormSchema = z
  .object({
    email: z.string().describe("Email").email({ message: "Invalid Email" }),
    password: z
      .string()
      .describe("Password")
      .min(6, "Password must be minimum 6 characters"),
    confirmPassword: z
      .string()
      .describe("Confirm Password")
      .min(6, "Password must be minimum 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"],
  });

export type Profile = {
  email: string;
  password: string;
  fullName: string | "";
  updatedAt: string | "";
  revenue: string;
  createdAt: string;
  booking: string | "";
  rating: string | "";
  id: string;
  feedback: string | "";
  location: string | "";
  title: string | "";
  verified: string | "";
};

export type jobprofile = {
  id: string;
  date: string;
  location: string;
  price: string;
  time: string;
  title: string;
  name: string;
};

export type Prof = {
  email: string | null;
  password: string | null;
  verified: string | null;
  id: string;
  fullName: string | null;
  updatedAt: string | null;
  createdAt: string;
  title: string | null;
  location: string | null;
  feedback: string | null;
  rating: string | null;
  booking: string | null;
  revenue: string | null;
};
