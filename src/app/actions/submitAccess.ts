"use server";

import clientPromise from "@/lib/mongodb";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please provide a valid email address." }),
  category: z.string().min(1, { message: "Please select a category." }),
});

export async function submitWaitlist(prevState: unknown, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const category = formData.get("category");

  const parsed = formSchema.safeParse({ name, email, category });

  if (!parsed.success) {
    return {
      message: parsed.error.issues[0].message,
      success: false,
    };
  }

  try {
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("waitlist");

    const existing = await collection.findOne({ email: parsed.data.email });
    if (existing) {
      return {
        message: "This email is already on the waitlist.",
        success: false,
      };
    }

    await collection.insertOne({
      name: parsed.data.name,
      email: parsed.data.email,
      category: parsed.data.category,
      createdAt: new Date(),
    });

    return {
      message: "Successfully joined the CollabWise!",
      success: true,
    };
  } catch (error) {
    console.error("Database Error:", error);
    return {
      message: "An error occurred connecting to the database. Please try again later.",
      success: false,
    };
  }
}
