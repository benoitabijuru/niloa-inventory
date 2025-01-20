import { NextResponse } from "next/server";

// Define the type for the request body
export async function POST(request: Request) {
  try {
    // Parse the JSON body of the request
    const { transferStockQty, receivingBranchId,notes, referenceNumber }  = await request.json();

    

    // Ensure we have valid data
    if (!transferStockQty || !receivingBranchId || !notes || referenceNumber) {
      return NextResponse.json(
        { message: "Adjustments Required" },
        { status: 400 } // Bad Request
      );
    }

    // Create a category object from the request data
    const adjustments = { transferStockQty, receivingBranchId,notes };

    // Return a JSON response with the created category
    return NextResponse.json(adjustments, { status: 201 }); // 201 Created

  } catch (error) {
    console.error(error);

    // Return a 500 error response if something goes wrong
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error', message: "Failed to create a Adjustments" },
      { status: 500 }
    );
  }
}
