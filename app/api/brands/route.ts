import db from "@/prisma/seed";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Parse the JSON body of the request
    const { name } =  await request.json();
    
    const brand = await db.brand.create({
      data:{ 
        name,
      },
    });

    // Ensure we have valid data
    if (!name) {
      return NextResponse.json(
        { message: "Brand Name required" },
        { status: 400 } // Bad Request
      );
    }

    // Create a category object from the request data


    // Return a JSON response with the created category
    return NextResponse.json(brand, { status: 201 }); // 201 Created

  } catch (error) {
    console.error(error);

    // Return a 500 error response if something goes wrong
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error', message: "Failed to create a category" },
      { status: 500 }
    );
  }
}
