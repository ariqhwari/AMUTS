import Image from "next/image";
import Link from "next/link";

const Tentangkami = () => {
  return (
    <section>
      <div className="Tentang-kami-1 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 p-10 min-h-full gap-5">
        <div className="contact">
          <h1 className="text-3xl text-hijau4 font-bold">Hubungi Kami</h1>
          <p className="mt-10 font-semi-bold md:text-lg text-base text-hijau4">
            AMUTS Office<br></br>JL. Jendral Sudirman Jakarta Utara <br></br>
            Phone +6285234590071
          </p>
        </div>
        <div className="maps bg-hijau flex md:w-96 w-72 md:h-56 h-48 items-center justify-center rounded-xl right-0 ">
          <h1 className="font-bold text-center ">Google Maps</h1>
        </div>
      </div>

      <div className="Tentang-kami-2 min-h-screen bg-hijau3 ">
        <h1 className=" pt-10 text-3xl text-hijau4 font-bold text-center">
          Tim Kami
        </h1>
        <div className="mt-10 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 p-5 gap-4 justify-center">
          <div className="foto-1 md:w-52 w-40 overflow-hidden">
            <div className="mt-10 relative transition-transform transform-gpu hover:translate-y-[-20px] hover:durati1000 hover:ease-out transition-transform transform-gpu duration-500 ease-in hover:translate-y-[-20px] hover:duration-1000 hover:ease-out ">
              <Image
                src="/img/Fahmi.png"
                alt="img-hero"
                width={208}
                height={240}
                priority
                className="object-cover md:h-60 h-48 rounded-xl border-solid border-4 border-hijau2 transition-transform transform-gpu hover:translate-y-[-10px] hover:duration-1000 hover:ease-out shadow-2xl"
              />
            </div>
            <h3 className="md:p-2 bg-hijau2 mt-3 flex font-bold md:text-2xl text-xl text-white justify-center rounded-xl">
              <Link href="https://www.linkedin.com/in/moch-fahmi-yasir-07a242274/">Fahmi</Link>
            </h3>
          </div>
          <div className="foto-2 md:w-52 w-40 overflow-hidden">
            <div className="mt-10 relative transition-transform transform-gpu hover:translate-y-[-20px] hover:duration-1000 hover:ease-out transition-transform transform-gpu duration-500 ease-in hover:translate-y-[-20px] hover:duration-1000 hover:ease-out">
              <Image
                src="/img/Atta.png"
                alt="foto-team"
                width={208}
                height={240}
                priority
                className="object-cover md:h-60 h-48 rounded-xl border-solid border-4 border-hijau2 transition-transform transform-gpu hover:translate-y-[-10px] hover:duration-1000 hover:ease-out shadow-2xl	"
              />
            </div>
            <h3 className="md:p-2 bg-hijau2 mt-3 flex font-bold md:text-2xl text-xl text-white justify-center rounded-xl">
              <Link href={"https://www.linkedin.com/in/achmad-ata-irsyadudin-4aa457279/"}>Atta</Link>
            </h3>
          </div>
          <div className="foto-3 md:w-52 w-40 overflow-hidden">
            <div className="mt-10 relative transition-transform transform-gpu hover:translate-y-[-20px] hover:duration-1000 hover:ease-out transition-transform transform-gpu duration-500 ease-in hover:translate-y-[-20px] hover:duration-1000 hover:ease-out">
              <Image
                src="/img/Badri.png"
                alt="foto-team"
                width={208}
                height={240}
                priority
                className="object-cover md:h-60 h-48 rounded-xl border-solid border-4 border-hijau2 transition-transform transform-gpu hover:translate-y-[-10px] hover:duration-1000 hover:ease-out shadow-2xl	"
              />
            </div>
            <h3 className="md:p-2 bg-hijau2 mt-3 flex font-bold md:text-2xl text-xl text-white justify-center rounded-xl">
              <Link href="https://www.linkedin.com/in/khairul-badri-b388a4283/">Badri</Link>
            </h3>
          </div>
          <div className="foto-4 md:w-52 w-40 overflow-hidden">
            <div className="mt-10 relative transition-transform transform-gpu hover:translate-y-[-20px] hover:duration-1000 hover:ease-out transition-transform transform-gpu duration-500 ease-in hover:translate-y-[-20px] hover:duration-1000 hover:ease-out">
              <Image
                src="/img/Bagus.png"
                alt="foto-team"
                width={208}
                height={240}
                priority
                className="object-cover md:h-60 h-48 rounded-xl border-solid border-4 border-hijau2 transition-transform transform-gpu hover:translate-y-[-10px] hover:duration-1000 hover:ease-out shadow-2xl	"
              />
            </div>
            <h3 className="md:p-2 bg-hijau2 mt-3 flex font-bold md:text-2xl text-xl text-white justify-center rounded-xl">
              <Link href={"https://www.linkedin.com/in/bagusmazzz/"}>Bagus</Link>
            </h3>
          </div>
          <div className="foto-5 md:w-52 w-40 overflow-hidden">
            <div className="mt-10 relative transition-transform transform-gpu hover:translate-y-[-20px] hover:duration-1000 hover:ease-out transition-transform transform-gpu duration-500 ease-in hover:translate-y-[-20px] hover:duration-1000 hover:ease-out">
              <Image
                src="/img/Ariq.png"
                alt="foto-team"
                width={208}
                height={240}
                priority
                className="object-cover md:h-60 h-48 rounded-xl border-solid border-4 border-hijau2 transition-transform transform-gpu hover:translate-y-[-10px] hover:duration-1000 hover:ease-out shadow-2xl	"
              />
            </div>
            <h3 className="md:p-2 bg-hijau2 mt-3 flex font-bold md:text-2xl text-xl text-white justify-center rounded-xl">
              <Link href={"https://www.linkedin.com/in/ariqhwari"}>Ariq</Link>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentangkami;