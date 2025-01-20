import db from "@/prisma/seed";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Parse the JSON body of the request
    const { addStockQty, warehouseId,notes, referenceNumber} = await request.json();
    
    const addStockAdjustment = await db.addStockAdjustment.create({
      data:{ 
        addStockQty,
        warehouseId,
        notes,
        referenceNumber
      },
    });

    

    // Ensure we have valid data
    if (!addStockQty || !warehouseId || !notes || !referenceNumber) {
      return NextResponse.json(
        { message: "First Add Stock" },
        { status: 400 } // Bad Request
      );
    }

  
    // Return a JSON response with the created category
    return NextResponse.json(addStockAdjustment, { status: 201 }); // 201 Created

  } catch (error) {
    console.error(error);

    // Return a 500 error response if something goes wrong
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error', message: "Failed to create a Adjustments" },
      { status: 500 }
    );
  }
}
