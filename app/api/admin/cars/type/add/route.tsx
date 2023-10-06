import prisma from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { model, num_model } = body;

  if (!model || !num_model) {
    return new NextResponse("Please provide the necessary information.", {
      status: 400,
    });
  }

  const type = await prisma.type.create({
    data: {
      model,
      num_model,
    },
  });

  return NextResponse.json(type);
}
