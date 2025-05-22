import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { questionId } = params;

    const response = await fetch(
      `${process.env.NEXT_PRIVATE_BACKEND_BASE_URL}/question-web/${questionId}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch question: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch question" },
      { status: 500 }
    );
  }
}
