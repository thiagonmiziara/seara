"use client"; // Manter como Client Component

import Image from "next/image";
import { useState, useEffect } from "react"; // Importar useState e useEffect
import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "@/public/assets/logo.png";

import { MainBannerData } from "@/types"; // Importar MainBannerData
import { getMainBanner } from "@/lib/contentfulHttp";

export default function MainBanner() {
  const [bannerData, setBannerData] = useState<MainBannerData | null>(null); // Estado para os dados do banner
  const [loading, setLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await fetch("/api/contentful?type=mainBanner");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: MainBannerData = await response.json();
        console.log("🚀 ~ fetchBannerData ~ data:", data);
        setBannerData(data);
      } catch (error) {
        console.error("Erro ao buscar dados do banner:", error);
        setBannerData(null); // Definir como null em caso de erro
      } finally {
        setLoading(false); // Finalizar carregamento
      }
    };

    fetchBannerData();
  }, []); // Executar apenas uma vez ao montar o componente

  if (loading) {
    return <div>Carregando banner...</div>; // Indicador de carregamento
  }

  if (!bannerData) {
    return null; // Ou renderizar um fallback se os dados não carregarem
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
      <div className='absolute inset-0 bg-black/60 z-10'></div>{" "}
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
