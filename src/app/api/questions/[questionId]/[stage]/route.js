import { NextResponse } from "next/server";

// export async function GET(request, { params }) {
//   try {
//     const { questionId, stage } = params;

//     const response = await fetch(
//       `${process.env.NEXT_PRIVATE_BACKEND_BASE_URL}/question-web/${questionId}/${stage}/`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "X-Requested-With": "XMLHttpRequest",
//         },
//         cache: "no-store",
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`Failed to fetch stage data: ${response.status}`);
//     }

//     const data = await response.json();
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json(
//       { error: error.message || "Failed to fetch question stage" },
//       { status: 500 }
//     );
//   }
// }

export async function POST(request, context) {
  try {
    const params = await context.params;
    const { questionId, stage } = params;
    const body = await request.json();

    if (!body.answer) {
      throw new Error("Answer option is required");
    }

    const response = await fetch(
      `${process.env.NEXT_PRIVATE_BACKEND_BASE_URL}/question-web/${questionId}/${stage}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify({ answer: body.answer }),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Answer submission failed");
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to submit answer" },
      { status: 500 }
    );
  }
}
