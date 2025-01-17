import { NextResponse } from "next/server";

// Define the type for the request body

export async function POST(request: Request) {
  try {
    // Parse the JSON body of the request
    const body: ItemsRequestBody = await request.json();
    const { 
      name, category, notes, sku, barcode, unit, 
      brand, buyingPrice, sellingPrice, reOrderPoint, 
      warehouse, weight, dimensions, tax, description, supplierId,imageUrl
    } = body;

    // Ensure we have valid data
    if (!name || !category) {
      return NextResponse.json(
        { message: "Name and category are required" },
        { status: 400 } // Bad Request
      );
    }

    // Create an item object from the request data
    const item = {
      name, category, notes, sku, barcode, unit,
      brand, buyingPrice, sellingPrice, reOrderPoint,
      warehouse, weight, dimensions, tax, description, supplierId,imageUrl
    };

    // Return a JSON response with the created item
    return NextResponse.json(item, { status: 201 }); // 201 Created

  } catch (error) {
    console.error(error);

    // Return a 500 error response if something goes wrong
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error', message: "Failed to create an item" },
      { status: 500 }
    );
  }
}