import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// Initialize Prisma Client
const db = new PrismaClient();

// Define the type for the request body
interface UnitRequestBody {
  name: string;
  phone: string;
  email: string;
  address: string;
  contactPerson: string;
  supplierCode: string;
  taxId: string;
  paymentTerms: string;
  notes: string;
}

export async function POST(request: Request) {
  try {
    // Parse the JSON body of the request
    const body: UnitRequestBody = await request.json();

    // Validate required fields
    const { name, phone, email, address, contactPerson, supplierCode, taxId, paymentTerms, notes } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { message: "Name, phone, and email are required fields." },
        { status: 400 } // Bad Request
      );
    }

    // Create a new unit
    const unit = await db.supplier.create({
      data: {
        name,
        phone,
        email,
        address,
        contactPerson,
        supplierCode,
        taxId,
        paymentTerms,
        notes,
      },
    });

    // Return a JSON response with the created unit
    return NextResponse.json(unit, { status: 201 }); // 201 Created

  } catch (error) {
    console.error(error);

    // Return a 500 error response if something goes wrong
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unexpected error occurred', message: "Failed to create a Unit" },
      { status: 500 }
    );
  }
}
