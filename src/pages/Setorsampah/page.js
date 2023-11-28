
import { useRouter } from 'next/navigation';
import Formulir from '@/components/Formulir';
import Image from 'next/image';

const HomePage = () => {;
  
  const router = useRouter();

  const handleConfirmation = (formData) => {
    // arahkan pengguna ke halaman hasil formulir (masih error)
    router.push({
      pathname: '/Result',
      query: {formData},
    });
  };

  return (
    <div className='grid grid-cols-3 mb-72'>
      <div>
        <Image src={'/img/batre.jpg'} alt='...' width={250} height={500} className='w-11/12 h-full' />
      </div>
      <div className='col-span-2'>
        <h1 className='text-2xl font-bold text-color-hijautua mb-5'>Form Penukaran Sampah</h1>
        <Formulir onSubmit={handleConfirmation} />
      </div>
    </div>
  );
};

export default HomePage;