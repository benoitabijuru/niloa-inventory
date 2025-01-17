import { NextResponse } from "next/server";

// Define the type for the request body
interface CategoryRequestBody {
  title: string;
  description: string;
}

export async function POST(request: Request) {
  try {
    // Parse the JSON body of the request
    const body: CategoryRequestBody = await request.json();
    const { title, description } = body;
    console.log(title,description)

    // Ensure we have valid data
    if (!title || !description) {
      return NextResponse.json(
        { message: "Title and description are required" },
        { status: 400 } // Bad Request
      );
    }

    // Create a category object from the request data
    const category = { title, description };

    // Return a JSON response with the created category
    return NextResponse.json(category, { status: 201 }); // 201 Created

  } catch (error) {
    console.error(error);

    // Return a 500 error response if something goes wrong
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error', message: "Failed to create a category" },
      { status: 500 }
    );
  }
}
