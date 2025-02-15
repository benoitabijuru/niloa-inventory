import db from "@/prisma/seed";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Parse the JSON body of the request
    const { name, location, type, description }  = await request.json();
   
    const warehouse = await db.warehouse.create({
      data:{ 
        name,
        location,
        description,
        warehouseType:type
      },
    });
    

    // Ensure we have valid data
    if (!name || !location || !type || !description) {
      return NextResponse.json(
        { message: "Fill this field required" },
        { status: 400 } // Bad Request
      );
    }

    // Create a category object from the request data
  
    // Return a JSON response with the created category
    return NextResponse.json(warehouse, { status: 201 }); // 201 Created

  } catch (error) {
    console.error(error);

    // Return a 500 error response if something goes wrong
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error', message: "Failed to create a Warehouse" },
      { status: 500 }
    );
  }
}
