import connect from "@/utils/db";
import data from "@/models/data";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();
    await connect();
    await data.findByIdAndUpdate(id, {});
    return NextResponse.json({ message: "data updated" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connect();
    const data = await data.findOne({ _id: id });
    return NextResponse.json({ data }, { status: 200 });
}