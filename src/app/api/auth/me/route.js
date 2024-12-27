import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("auth_token")?.value;
    const userInfo = cookieStore.get("user_info")?.value;

    if (!token || !userInfo) {
      throw new Error("No auth data found");
    }

    const response = await fetch(
      `${process.env.NEXT_PRIVATE_BACKEND_BASE_URL}/accounts/profile/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Invalid token");
    }

    return NextResponse.json({
      token,
      userInfo: JSON.parse(userInfo),
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
}
