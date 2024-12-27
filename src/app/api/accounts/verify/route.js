import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.otp || body.otp.length !== 4) {
      throw new Error("کد تایید معتبر نیست");
    }

    const response = await fetch(
      `${process.env.NEXT_PRIVATE_BACKEND_BASE_URL}/accounts/verify/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify({
          code: body.otp,
          phone_number: body.phone_number,
        }),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "کد تایید نامعتبر است");
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "خطا در تایید کد" },
      { status: 500 }
    );
  }
}
