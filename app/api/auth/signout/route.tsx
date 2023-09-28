import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function DELETE() {
  cookies().delete("Qalite_Access_Token");

  return new NextResponse("Logged out", { status: 200 });
}
