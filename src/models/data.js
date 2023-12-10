import mongoose, { Schema } from "mongoose";

const dataSchema = new Schema(
    {
        id: String,
        nama: String,
        alamat: String,
        noTelp: String,
        jenisSampah: String,
        jumlahSampah: String,
        hargaKilo: String,
        totalHarga: String,
    },
    {
        timestamps: true,
    }
);

const data = mongoose.models.data || mongoose.model("data", dataSchema);

export default data;