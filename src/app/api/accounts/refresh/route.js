import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.refresh) {
      throw new Error("Missing refresh token");
    }

    const response = await fetch(
      `${process.env.NEXT_PRIVATE_BACKEND_BASE_URL}/accounts/refresh/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify({ refresh: body.refresh }),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Refresh failed");
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Refresh failed" },
      { status: 500 }
    );
  }
}
