"use server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import db from "@/db/drizzle";
import { specialties } from "@/db/schema";

import { z } from "zod";

const Schema = z.object({
  name: z.string(),
});

export const getSpecialty = async () => {
  const data = await db.select().from(specialties);
  return data;
};

export const addSpecialty = async (value: string) => {
  const { name } = Schema.parse({ name: value });
  console.log({ name });
  try {
    await db.insert(specialties).values({
      name,
    });
    revalidatePath("/");
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
};
