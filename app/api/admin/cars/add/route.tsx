import prisma from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { model, num_model, license_plate } = body;

  const type = await prisma.type.findUnique({
    where: {
      model_num_model: {
        model: model,
        num_model: num_model,
      },
    },
  });

  if (!type) {
    return new NextResponse("No car type of these properties was found.", {
      status: 404,
    });
  }

  /*const car = await prisma.car.create({
    data: {
      license_plate,
    },
  });*/
}
