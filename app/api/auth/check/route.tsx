import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET() {
  const token = cookies().get("Qalite_Access_Token");

  if (!token) {
    return new NextResponse(
      "No user logged. Please login, Or create an account.",
      { status: 404 }
    );
  }

  const secret = process.env.SECRET;

  if (secret) {
    const user = jwt.verify(token.value, secret);
    return NextResponse.json({
      data: user,
    });
  } else {
    return new NextResponse("Access Denied", { status: 400 });
  }
}
