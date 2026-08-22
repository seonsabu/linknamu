import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await getDb();
    const docs = await db.collection("clicks").find().toArray();

    const counts: Record<string, number> = {};
    for (const doc of docs) {
      counts[String(doc._id)] = doc.count ?? 0;
    }

    return NextResponse.json(counts);
  } catch (error) {
    console.error("[GET /api/clicks]", error);
    return NextResponse.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 500 });
  }
}
