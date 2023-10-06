import prisma from "@/prisma/prismaClient";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { license_plate } = body;

  try {
    const car = await prisma.car.findUnique({
      where: {
        license_plate: license_plate,
      },
    });

    if (!car) {
      return new NextResponse("No car found", { status: 404 });
    }

    return NextResponse.json({
      car: car,
    });
  } catch (err) {
    if (err instanceof PrismaClientValidationError) {
      return new NextResponse(err.message, { status: 500 });
    }
  }
}
