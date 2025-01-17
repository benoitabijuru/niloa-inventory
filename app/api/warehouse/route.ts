import { NextResponse } from "next/server";

// Define the type for the request body
interface WarehouseRequestBody {
  name: string;
  location: string;
  type:string;
  description:string;
}

export async function POST(request: Request) {
  try {
    // Parse the JSON body of the request
    const body: WarehouseRequestBody = await request.json();
    const { name, location, type, description } = body;
    

    // Ensure we have valid data
    if (!name || !location || !type || !description) {
      return NextResponse.json(
        { message: "Fill this field required" },
        { status: 400 } // Bad Request
      );
    }

    // Create a category object from the request data
    const warehouse = { name, location, type, description };

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
