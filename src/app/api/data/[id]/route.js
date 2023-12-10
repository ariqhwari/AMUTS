import connect from "@/utils/db";
import datas from "@/models/data";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;
    await connect();
    const data = await datas.findOne({ id: id });
    return NextResponse.json({ data }, { status: 200 });
}
