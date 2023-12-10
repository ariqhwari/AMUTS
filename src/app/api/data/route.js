import connect from "@/utils/db";
import datas from "../../../models/data";
import { NextResponse } from "next/server";
import Datalist from "@/components/list/datalist";

export async function POST(request) {
    const {
        id,
        nama,
        alamat,
        noTelp,
        jenisSampah,
        jumlahSampah,
        hargaKilo,
        totalHarga,
    } = await request.json();
    await connect();
    await datas.create({
        id,
        nama,
        alamat,
        noTelp,
        jenisSampah,
        jumlahSampah,
        hargaKilo,
        totalHarga,
    });
    return NextResponse.json({ message: "Data Created" }, { status: 201 });
}

export async function GET() {
    await connect();

    try {
        const data = await datas.find();

        if (!data || data.length === 0) {
            return NextResponse.json({ message: "Data not found" }, { status: 404, headers: { "Content-Type": "application/json; charset=utf-8" } });
        }

        return NextResponse.json({ data, status: 200, headers: { "Content-Type": "application/json; charset=utf-8" } });
    } catch (error) {
        return NextResponse.error(new Error("Failed to retrieve data"), { status: 500 });
    }
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connect();
    await datas.findByIdAndDelete(id);
    return NextResponse.json({ message: "data deleted" }, { status: 200 });
}