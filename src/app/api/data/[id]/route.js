import connect from "@/utils/db";
import datas from "@/models/data";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;
    await connect();
    const data = await datas.findOne({ id: id });
    return NextResponse.json({ data }, { status: 200 });
}

export async function PUT(request, { params }) {
    const { id } = params;
    const {
        newNama: nama,
        newAlamat: alamat,
        newNoTelp: noTelp,
        newJenisSampah: jenisSampah,
        newJumlahSampah: jumlahSampah,
        newHargaKilo: hargaKilo,
        newTotalHarga: totalHarga
    } = await request.json();

    try {
        // Ambil id dari data yang ingin diupdate
        const dataToUpdate = await datas.findOne({ id: id });

        if (!dataToUpdate) {
            return new Response(JSON.stringify({ message: "Data not found" }), { status: 404 });
        }

        // Lakukan operasi update menggunakan id yang sudah didapat
        const updatedData = await datas.updateOne(
            { id: id },
            {
                $set: {
                    nama,
                    alamat,
                    noTelp,
                    jenisSampah,
                    jumlahSampah,
                    hargaKilo,
                    totalHarga
                }
            }
        );

        if (!updatedData) {
            return new Response(JSON.stringify({ message: "Failed to update data" }), { status: 500 });
        }

        return new Response(JSON.stringify({ message: "Data updated" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Error occurred" }), { status: 500 });
    }
}

