import connect from "@/utils/db";
import data from "../../../models/data";
import { NextResponse } from "next/server";

export async function POST(request: any) {
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
    await data.create({
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