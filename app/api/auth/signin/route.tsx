import prisma from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return new NextResponse("Please provide the necessary information", {
      status: 400,
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return new NextResponse("No such email exists.", { status: 404 });
  }

  if (!(await bcrypt.compare(password, user.hashedPassword))) {
    return new NextResponse("Incorrect Password.", { status: 400 });
  }

  const secret = process.env.SECRET;

  if (!secret) {
    return new NextResponse("Access Denied", { status: 400 });
  } else {
    const token = jwt.sign(user, secret);

    cookies().set("Qalite_Access_Token", token);

    return new NextResponse("Logged in successfully", { status: 200 });
  }
}
