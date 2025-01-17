import { NextResponse } from "next/server";

// Define the type for the request body
interface UnitsRequestBody {
  title: string;
  abbreviation: string;
}

export async function POST(request: Request) {
  try {
    // Parse the JSON body of the request
    const body: UnitsRequestBody = await request.json();
    const { title, abbreviation } = body;
    

    // Ensure we have valid data
    if (!title || !abbreviation) {
      return NextResponse.json(
        { message: "Title and abbreviation are required" },
        { status: 400 } // Bad Request
      );
    }

    // Create a category object from the request data
    const unit = { title, abbreviation };

    // Return a JSON response with the created category
    return NextResponse.json(unit, { status: 201 }); // 201 Created

  } catch (error) {
    console.error(error);

    // Return a 500 error response if something goes wrong
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error', message: "Failed to create a Unit" },
      { status: 500 }
    );
  }
}
