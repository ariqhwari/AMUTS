import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <main className="main-content min-h-screen relative">
      <Navbar />
      {/* Beranda Layer-1 */}
      <section className="relative">
        <Image
          src="/img/hero-1.png"
          alt="img-hero"
          width={1460}
          height={638}
          className="lg:w-full lg:h-full md:h-80 h-60 object-cover  opacity-80	brightness-75 contrast-125		"
          priority
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full md:w-3/4 lg:w-1/2 md:px-4 px-2">
          <h1 className="p-2 lg:text-4xl md:text-2xl text-xl font-bold text-shadow">
            Jaga Kesehatan, Lestarikan Kehidupan
          </h1>
          <p className="lg:text-lg md:text-sm text-xs text-shadow">
            "Kebersihan Tak hanya pilihan, melainkan investasi dalam kesehatan
            dan kenyamanan kita."
          </p>
        </div>
      </section>

      {/* Beranda Layer-2 */}
      <section className="p-5 mt-4 min-h-full flex flex-col md:flex-row">
        <div className=" p-2 md:w-1/2 sm:w-1/5">
          <Image
            src="/img/Character.png"
            alt="img-hero"
            width={260}
            height={202}
            priority
            className="lg:ml-52 md:ml-28 ml-10"
          />
        </div>
        <div className="md:w-1/2 w-full md:p-5 sm:p-2">
          <h1 className="md:text-2xl sm:text-xl text-lg text-hijau4 text-center font-bold text-shadow">
            Apa Itu Amuts ?
          </h1>
          <p className="text-justify md:text-xl text-hijau4  md:p-5 sm:p-4 p-3 font-semi-bold">
            AMUTS (Ayo Mungut Sampah) adalah website yang bisa digunakan
            masyarakat untuk mengolah sampah mereka sendiri. Tujuan website ini
            dibuat agar masyarakat lebih sadar tentang bahaya sampah yang
            menumpuk. Kami berharap masyarakat bisa lebih sadar tentang
            kebersihan lingkungan.
          </p>
        </div>
      </section>

      {/* Beranda Layer-3 */}
      <section className="pt-6 bg-hijau3 md:mt-2 min-h-full">
        <div className="p-2 bg-hijau w-80  flex flex-col items-center ">
          <h1 className="text-2xl font-bold text-white">Manfaat Amuts</h1>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-8 ">
          <div className="manfaat-1 p-2 ">
            <h1 className="lg:ml-28 md:ml-36 ml-28 flex items-center justify-center p-10 rounded-full bg-orange w-3 h-3 text-2xl font-bold text-white">
              1
            </h1>
            <p className="mt-6 md:p-6 p-4 font-semi-bold bg-hijau rounded-lg text-white sm:text-lg md:text-sm  ">
              Menyadarkan tentang pentingnya kebersihan
            </p>
          </div>
          <div className="manfaat-2 p-2">
            <h1 className="lg:ml-28 md:ml-36 ml-28 flex items-center justify-center p-10 rounded-full bg-orange w-3 h-3 text-2xl font-bold text-white">
              2
            </h1>
            <p className="mt-6 md:p-6 p-4 font-semi-bold bg-hijau rounded-lg text-white sm:text-lg md:text-sm">
              Mengurangi resiko penumpukan sampah di lingkungan{" "}
            </p>
          </div>
          <div className="manfaat-3 p-2">
            <h1 className="lg:ml-28 md:ml-36 ml-28 flex items-center justify-center p-10 rounded-full bg-orange w-3 h-3 text-2xl font-bold text-white">
              3
            </h1>
            <p className="mt-6 md:p-6 p-4  font-semi-bold bg-hijau rounded-lg text-white sm:text-lg md:text-sm">
              Menjadi tempat penerima hasil daur ulang sampah
            </p>
          </div>
          <div className="manfaat-4 p-2">
            <h1 className="lg:ml-28 md:ml-36 ml-28 flex items-center justify-center p-10 rounded-full bg-orange w-3 h-3 text-2xl font-bold text-white">
              4
            </h1>
            <p className="mt-6 md:p-6 p-4 font-semi-bold bg-hijau rounded-lg text-white sm:text-lg md:text-sm">
              Mendapatkan keuntungan dari penukaran sampah{" "}
            </p>
          </div>
        </div>
      </section>

      {/*Beranda-layer-4  */}
      <section className="jenis-1 pt-2 relative">
        <div className="relative">
          <Image
            src="/img/organik.png"
            alt="img-hero"
            width={1440}
            height={390}
            className="w-full md:h-72 h-40 object-cover"
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-800 via-transparent to-transparent opacity-80"></div>
        </div>
        <div className="text-left absolute top-1/3 left-0 transform -translate-y-1/2 text-white w-full md:w-3/4 lg:w-1/2 md:px-4 px-2">
          <h1 className="pt-2 lg:text-3xl md:text-2xl text-base font-bold text-shadow">
            Sampah Organik
          </h1>
          <p className="lg:text-lg md:text-sm text-xs text-shadow ml-0 text-justify md:ml-0">
            Ini adalah jenis sampah yang berasal dari bahan-bahan alami atau
            pernah hidup, seperti sisa makanan, daun, kayu, atau kertas. Sampah
            organik dapat terurai secara alami melalui proses kompos atau
            dekomposisi oleh mikroorganisme menjadi bahan organik yang dapat
            digunakan kembali sebagai pupuk.
          </p>
        </div>
      </section>

      <section className="jenis-2 pt-2 relative">
        <div className="relative">
          <Image
            src="/img/anorganik.png"
            alt="img-hero"
            width={1440}
            height={390}
            className="w-full md:h-72 h-40 object-cover"
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-gray-800 via-transparent to-transparent opacity-80"></div>
        </div>
        <div className="text-right absolute top-1/4 right-0 transform -translate-y-1/2 text-white w-full md:w-3/4 lg:w-1/2 md:px-4 px-2">
          <h1 className="pt-2 lg:text-3xl md:text-2xl text-base font-bold mt-10 text-shadow">
            Sampah Anorganik
          </h1>
          <p className="lg:text-lg md:text-sm text-xs text-shadow ml-0 md:ml-0 text-justify">
            Jenis sampah ini terdiri dari bahan-bahan buatan manusia yang tidak
            mudah terurai secara alami, seperti plastik, kaca, logam, dan karet.
            Sampah anorganik umumnya memerlukan waktu yang sangat lama untuk
            terurai dan seringkali menjadi sumber pencemaran lingkungan jika
            tidak dikelola dengan baik.
          </p>
        </div>
      </section>

      <section className="jenis-3 pt-2 relative">
        <div className="relative">
          <Image
            src="/img/batre.png"
            alt="img-hero"
            width={1440}
            height={390}
            className="w-full md:h-72 h-40 object-cover"
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-800 via-transparent to-transparent opacity-80"></div>
        </div>
        <div className="text-left absolute top-1/4 left-0 transform -translate-y-1/2 text-white w-full md:w-3/4 lg:w-1/2 md:px-4 px-2">
          <h1 className="pt-2 lg:text-3xl md:text-2xl text-base font-bold mt-16 text-shadow">
            Sampah B3
          </h1>
          <p className="lg:text-lg md:text-sm text-xs text-shadow ml-0 md:ml-0 text-justify ">
            Sampah B3 adalah jenis sampah yang mengandung bahan-bahan berbahaya
            dan beracun yang dapat membahayakan kesehatan manusia dan
            lingkungan. Contohnya adalah baterai, cat, pestisida, limbah medis,
            dan zat kimia berbahaya lainnya. Pengelolaan yang tepat diperlukan
            untuk menghindari dampak negatif terhadap lingkungan dan kesehatan
            manusia.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
