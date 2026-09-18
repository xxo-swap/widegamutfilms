"use server";

import { cookies } from "next/headers";

export async function verifyPortfolioPassword(inputPassword: string) {
  const CORRECT_PASSWORD = process.env.PORTFOLIO_PASSWORD || "mysecret2026";

  if (inputPassword === CORRECT_PASSWORD) {
    // Set a session cookie valid for 7 days
    const cookieStore = await cookies();
    cookieStore.set("portfolio_access", "granted", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    return { success: true };
  }

  return { success: false, error: "Incorrect password. Please try again." };
}

export async function checkAccessStatus() {
  const cookieStore = await cookies();
  const token = cookieStore.get("portfolio_access");
  return token?.value === "granted";
}