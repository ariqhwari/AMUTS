"use client";

import Form from "../../components/form/addform";
import Image from "next/image";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer";

const HomePage = () => {

    return (
        <section>
            <Navbar />
            <h1 className="text-2xl font-bold text-center mt-5 text-hijau4">
                Form Penukaran Sampah
            </h1>
            <div className="p-5 md:grid grid-cols-2">
                <div className="m-6">
                    <Image
                        src={"/img/setor-bg.jpg"}
                        alt="setor-sampah"
                        width={800}
                        height={400}
                        className="w-full md:h-1/2 object-cover p-2 bg-orange rounded-xl"
                    />
                </div>
                <div className="p-5 col-span-1">
                    <Form />
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default HomePage;
