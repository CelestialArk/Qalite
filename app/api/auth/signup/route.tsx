import { NextRequest, NextResponse } from "next/server";
import * as EmailValidator from "email-validator";
import bcrypt from "bcrypt";
import prisma from "@/prisma/prismaClient";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { firstname, lastname, email, password } = body;

  if (!firstname || !lastname || !email || !password) {
    return new NextResponse("Please provide all the necessary information", {
      status: 400,
    });
  }

  if (!EmailValidator.validate(email)) {
    return new NextResponse("Please enter a valid email", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        hashedPassword,
      },
    });

    const secret = process.env.SECRET;
    if (secret) {
      const token = jwt.sign(user, secret);

      cookies().set("Qalite_Access_Token", token);

      return new NextResponse("Registered Successfully", { status: 200 });
    } else {
      return new NextResponse("Couldnt create the token.", { status: 400 });
    }
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        return new NextResponse("Email Already exists", { status: 400 });
      }
    }
  }
}
