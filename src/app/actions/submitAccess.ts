"use server";

import clientPromise from "@/lib/mongodb";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().email({ message: "Please provide a valid email address." }),
});

export async function submitWaitlist(prevState: any, formData: FormData) {
  const email = formData.get("email");

  const parsed = emailSchema.safeParse({ email });

  if (!parsed.success) {
    return {
      message: parsed.error.issues[0].message,
      success: false,
    };
  }

  try {
    const client = await clientPromise;
    const db = client.db(); // Uses the database name from the connection string or defaults to test
    const collection = db.collection("waitlist");

    const existing = await collection.findOne({ email: parsed.data.email });
    if (existing) {
      return {
        message: "This email is already on the waitlist.",
        success: false,
      };
    }

    await collection.insertOne({
      email: parsed.data.email,
      createdAt: new Date(),
    });

    return {
      message: "Successfully joined the collective!",
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
