import prisma from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const cars = await prisma.car.findMany();

  if (JSON.stringify(cars) === JSON.stringify([])) {
    return new NextResponse("No cars for now.", { status: 404 });
  }

  return NextResponse.json(cars);
}
