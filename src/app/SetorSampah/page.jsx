"use client";

import Formulir from "../../components/form";
import Image from "next/image";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer";

const HomePage = () => {

    return (
        <section>
            <Navbar />
            <div className="p-5 md:grid grid-cols-2 mb-72">
                <div>
                    <Image
                        src={"/img/setor-bg.jpg"}
                        alt="setor-sampah"
                        width={800}
                        height={400}
                        className="w-full md:h-1/2 object-cover p-2 bg-orange rounded-xl"
                    />
                </div>
                <div className="p-5 col-span-1">
                    <h1 className="text-2xl font-bold text-color-hijautua mb-5">
                        Form Penukaran Sampah
                    </h1>
                    <Formulir />
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default HomePage;
