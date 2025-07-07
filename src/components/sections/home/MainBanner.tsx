"use client";

import Image from "next/image";
import { useState, useEffect } from "react"; // Importar useState e useEffect
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { MainBannerData } from "@/types";
import { getMainBanner } from "@/lib/contentfulHttp";

export default function MainBanner() {
  const [bannerData, setBannerData] = useState<MainBannerData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await fetch("/api/contentful?type=mainBanner");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: MainBannerData = await response.json();
        setBannerData(data);
      } catch (error) {
        console.error("Erro ao buscar dados do banner:", error);
        setBannerData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBannerData();
  }, []);

  if (loading) {
    return (
      <div className='relative h-[calc(100vh-4rem)] min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden'>
        {/* Overlay escuro */}
        <div className='absolute inset-0 bg-black/30 z-10'></div>
        {/* Logo centralizada */}
        <div className='relative z-20 flex flex-col items-center justify-center w-full h-full'>
          <Image
            src={"/assets/logo.png"}
            alt={"Banner Principal Seara de Deus"}
            width={200} // Tamanho fixo para a logo
            height={200} // Tamanho fixo para a logo
            className='mb-8 animate-pulse' // Adicionar animação de pulso para indicar carregamento
          />
          {/* Skeletons para o conteúdo do banner */}
          <div className='relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
            <Skeleton className='h-12 w-3/4 mb-6 bg-gray-200 dark:bg-card' />
            <div className='max-w-2xl w-full'>
              <Skeleton className='h-8 w-1/2 mb-3 bg-gray-200 dark:bg-card mx-auto' />
              <Skeleton className='h-6 w-full mb-8 bg-gray-200 dark:bg-card' />
              <Skeleton className='h-8 w-1/2 mb-3 bg-gray-200 dark:bg-card mx-auto' />
              <Skeleton className='h-6 w-full mb-10 bg-gray-200 dark:bg-card' />
            </div>
            <Skeleton className='h-12 w-48 bg-gray-200 dark:bg-card' />
          </div>
        </div>
      </div>
    );
  }

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
          quality={80}
          className='z-0'
          priority
        />
      )}
      <div className='absolute inset-0 bg-black/25 z-10'></div>
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
      <style jsx global>{`
        .shadow-text {
          text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
