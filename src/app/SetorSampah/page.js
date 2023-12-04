'use client'

import { useRouter } from 'next/navigation';
import Formulir from '../../components/formulir';
import Image from 'next/image';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const HomePage = () => {
    ;

    const router = useRouter();

    const handleConfirmation = (formData) => {
        // arahkan pengguna ke halaman hasil formulir 
        router.push({
            pathname: '/Result',
            query: { formData },
        });
    };

  return (
    <div className='p-5 md:grid grid-cols-2 grid-cols-1 mb-72'>
      <div>
        <Image src={'/img/setor-bg.jpg'} alt='...' width={800} height={400} className='w-full md:h-1/2  object-cover p-2 bg-orange rounded-xl' />
      </div>
      <div className='p-5 col-span-1'>
        <h1 className='text-2xl font-bold text-color-hijautua mb-5'>Form Penukaran Sampah</h1>
        <Formulir onSubmit={handleConfirmation} />
      </div>
    </div>
  );
};

export default HomePage;
