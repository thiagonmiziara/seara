import Link from 'next/link';
import Image from 'next/image';
export default function Logo() {
  return (
    <Image
      src='/assets/logofooter.png'
      alt='Seara de Deus'
      className='h-auto w-40 object-contain md:w-48'
      width={300}
      height={60}
    />
  );
}
