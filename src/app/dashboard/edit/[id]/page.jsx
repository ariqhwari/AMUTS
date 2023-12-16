import React from 'react';
import EditForm from "@/components/form/editform";

const getDataById = async (id) => {
    try {
        const res = await fetch(`https://amuts.vercel.app/api/data/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
};

const Edit = async ({ params }) => {
    const { id } = params;
    const { data } = await getDataById(id);
    const { nama, alamat, noTelp, jenisSampah, jumlahSampah, totalHarga, hargaKilo } = data;
    return (
        <EditForm id={id} nama={nama} alamat={alamat} noTelp={noTelp} jenisSampah={jenisSampah} jumlahSampah={jumlahSampah} totalHarga={totalHarga} hargaKilo={hargaKilo} />
    )
}

export default Edit