import { NextResponse } from "next/server";

// Define the type for the request body
interface BrandsRequestBody {
  name: string;
  
}

export async function POST(request: Request) {
  try {
    // Parse the JSON body of the request
    const body: BrandsRequestBody = await request.json();
    const { name } = body;
    

    // Ensure we have valid data
    if (!name) {
      return NextResponse.json(
        { message: "Brand Name required" },
        { status: 400 } // Bad Request
      );
    }

    // Create a category object from the request data
    const brand = { name };

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
