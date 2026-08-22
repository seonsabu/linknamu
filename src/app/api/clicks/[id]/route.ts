import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function POST(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const db = await getDb();
    const result = await db
      .collection<{ _id: string; count: number }>("clicks")
      .findOneAndUpdate(
        { _id: params.id },
        { $inc: { count: 1 } },
        { upsert: true, returnDocument: "after" }
      );

    const count = result?.count ?? 1;
    return NextResponse.json({ id: params.id, count });
  } catch (error) {
    console.error("[POST /api/clicks/:id]", error);
    return NextResponse.json({ error: "클릭 수를 저장하지 못했습니다." }, { status: 500 });
  }
}
