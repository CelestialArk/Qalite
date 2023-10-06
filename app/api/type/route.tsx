import prisma from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const types = await prisma.type.findMany();

  if (JSON.stringify(types) === JSON.stringify([])) {
    return new NextResponse("No Car Models for now.", { status: 404 });
  }

  return NextResponse.json(types);
}
