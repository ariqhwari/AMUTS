import connect from "@/utils/db";
import User from "../../../models/User";
import { NextResponse } from "next/server";

export async function GET() {
    await connect();
    const user = await User.find();
    return NextResponse.json({ user });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connect();
    await User.findByIdAndDelete(id);
    return NextResponse.json({ message: "user deleted" }, { status: 200 });
}