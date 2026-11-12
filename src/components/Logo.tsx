import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src='/assets/logo.png'
      alt='Seara de Deus'
      className='h-12 w-auto object-contain'
      width={4665}
      height={2196}
      sizes='102px'
      loading='eager'
    />
  );
}
