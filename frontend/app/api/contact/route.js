import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Contact from "@/models/Contact";

// Handle POST request
export async function POST(req) {
  try {
    const { userName, message } = await req.json();

    if (!userName) {
      return NextResponse.json(
        { error: "username is required" },
        { status: 400 }
      );
    }

    // ENsure username starts with @ symbol
    if (!userName.startsWith("@")) {
      return NextResponse.json(
        { error: "Username must start with @ symbol" },
        { status: 400 }
      );
    }

    await connectToDatabase().then(async () => {
      const newContact = new Contact({ userName, message });
      await newContact.save();
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

// Handle unsupported methods
export function OPTIONS() {
  return NextResponse.json({ message: "OK" }, { status: 200 });
}
