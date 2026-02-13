import Link from 'next/link';
import { Church } from 'lucide-react';
import Image from 'next/image';
export default function Logo() {
  return (
    <Image
      src='/assets/logonovabranca.png'
      alt='Seara de Deus'
      className='w-40  md:w-48'
      width={160}
      height={160}
    />
  );
}
