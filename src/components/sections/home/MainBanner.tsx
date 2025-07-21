import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getMainBanner } from "@/services/get-main-banner";

export default async function MainBanner() {
  const bannerData = await getMainBanner();

  if (!bannerData) {
    return (
      <div className='relative h-[calc(100vh-4rem)] min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden'>
        <div className='absolute inset-0 bg-black/30 z-10'></div>
        <div className='relative z-20 flex flex-col items-center justify-center w-full h-full'>
          <Image
            src={"/assets/logo.png"}
            alt={"Banner Principal Seara de Deus"}
            width={200}
            height={200}
            className='mb-8'
          />
          <p className='text-lg text-white'>
            Não foi possível carregar os dados do banner.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='relative h-[calc(100vh-4rem)] min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden'>
      {bannerData.backgroundImageUrl && (
        <Image
          src={bannerData.backgroundImageUrl}
          alt={bannerData.title || "Banner Principal Seara de Deus"}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          quality={100}
          className='z-0'
          priority
        />
      )}
      <div className='absolute inset-0 bg-black/50 z-10'></div>
      {/* Dark overlay */}
      <div className='relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight shadow-text animate-fade-in-down'>
          {bannerData.title}
        </h1>
        <div className='max-w-2xl'>
          <h2 className='text-2xl sm:text-3xl font-semibold mb-3 text-primary'>
            Nossa Visão
          </h2>
          <p className='text-lg sm:text-xl mb-8 leading-relaxed shadow-text'>
            {bannerData.vision}
          </p>
          <h2 className='text-2xl sm:text-3xl font-semibold mb-3 text-primary'>
            Nosso Propósito
          </h2>
          <p className='text-lg sm:text-xl mb-10 leading-relaxed shadow-text'>
            {bannerData.purpose}
          </p>
        </div>
        {bannerData.buttonText && bannerData.buttonLink && (
          <Button
            size='lg'
            asChild
            className='bg-primary hover:bg-primary/90 text-primary-foreground'
          >
            <Link href={bannerData.buttonLink}>{bannerData.buttonText}</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
