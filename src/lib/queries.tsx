"use server";
import { jobs, profile } from "../../migrations/schema";
import db from "./supabase/db";
import { FormSchema, jobprofile, Prof } from "./types";
import { z } from "zod";
import { and, eq } from "drizzle-orm";

export const actionSignUpUser = async (user: Prof) => {
  console.log(user);
  try {
    await db.insert(profile).values(user);
    return { data: null, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, error: "signUpError" };
  }
};

export const actionLoginUser = async ({
  email,
  password,
}: z.infer<typeof FormSchema>) => {
  try {
    const data = await db.query.profile.findFirst({
      where: (p, { eq }) => and(eq(p.email, email), eq(p.password, password)),
    });
    if (data) return { data: data, error: null };
    return { data: null, error: "Please Sign up" };
  } catch (error) {
    console.log(error);
    return { data: null, error: `LoginError` };
  }
};

// export const verifiedUser = async ({
//   email,
//   password,
// }: z.infer<typeof FormSchema>) => {
//   try {
//     const data = await db.query.profile.findFirst({
//       where: (p, { eq }) => and(eq(p.email, email), eq(p.password, password)),
//     });
//     if (data) return { data: null, error: null };
//     return { data: null, error: "Please Sign up" };
//   } catch (error) {
//     console.log(error);
//     return { data: null, error: `LoginError` };
//   }
// };

export const addProfile = async (
  userEmail: string,
  userProfile: Partial<Prof>
) => {
  if (!userEmail) return;
  try {
    await db
      .update(profile)
      .set(userProfile)
      .where(eq(profile.email, userEmail));
    return { data: null, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, error: "Verification Error" };
  }
};

export const createjobs = async (verified: string, job: jobprofile) => {
  if (!verified) return;
  try {
    const value = await db.insert(jobs).values(job);
    console.log(value);
    return { data: null, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, error: "Job Error" };
  }
};

export const profileRecommedation = async (
  userEmail: string,
  verified: string,
  title: string
) => {
  if (!userEmail && verified === "false") return;
  const response = await db.select().from(jobs).where(eq(jobs.title, title));
  if (!response.length) return [];
  return response;
};

export const profileHome = async (
  userEmail: string,
  verified: string,
  name: string
) => {
  if (!userEmail && verified === "false") return;
  const response = await db.select().from(jobs).where(eq(jobs.name, name));
  if (!response.length) return [];
  return response;
};

export const profileJobs = async (userEmail: string) => {
  if (!userEmail) return [];
  const response = await db.select().from(jobs);
  if (!response.length) return [];
  return response;
};
