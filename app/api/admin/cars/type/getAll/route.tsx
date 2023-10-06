import prisma from "@/prisma/prismaClient";
import { NextResponse } from "next/server";

export async function GET() {
  const types = await prisma.type.findMany();

  if (!types) {
    return new NextResponse("No types for now.", { status: 404 });
  }

  return NextResponse.json(types);
}
