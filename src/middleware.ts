import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect("http://localhost:3000/login");
  }
}

export const config = {
  matcher: ["/join/easy:path*", "/join/integrated:path*", "/mypage:path*"],
};
