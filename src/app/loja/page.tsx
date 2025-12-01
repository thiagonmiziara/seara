"use client";

import { useState, useEffect } from "react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import EmptyState from "@/components/shared/EmptyState";
import type { IProducts } from "@/types";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function LojaPage() {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetch("/api/contentful?type=products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleBuyClick = (productName: string) => {
    const message = encodeURIComponent(
      `Olá, vim pelo site e gostaria de saber mais sobre o produto: ${productName}`
    );
    const whatsappUrl = `https://wa.me/+55${products[0].phone}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  if (loading) {
    return (
      <SectionWrapper
        title='Seara Store'
        subtitle='Produtos que edificam e expressam sua fé.'
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {Array.from({ length: 8 }).map((_, index) => (
            <Card
              key={index}
              className='flex flex-col overflow-hidden shadow-lg'
            >
              <CardHeader className='p-0'>
                <Skeleton className='w-full h-64' />
              </CardHeader>
              <CardContent className='flex-grow p-4'>
                <Skeleton className='h-6 w-3/4 mb-2' />
                <Skeleton className='h-4 w-1/2' />
              </CardContent>
              <CardFooter className='p-4 pt-0'>
                <Skeleton className='w-full h-10' />
              </CardFooter>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    );
  }

  if (error) {
    return (
      <SectionWrapper
        title='Seara Store'
        subtitle='Produtos que edificam e expressam sua fé.'
      >
        <EmptyState
          title='Erro ao carregar produtos'
          description='Não foi possível carregar os produtos da loja. Por favor, tente novamente mais tarde.'
        />
      </SectionWrapper>
    );
  }

  if (products.length === 0) {
    return (
      <SectionWrapper
        title='Seara Store'
        subtitle='Produtos que edificam e expressam sua fé.'
      >
        <EmptyState
          title='Nenhum produto encontrado'
          description='Parece que não há produtos disponíveis no momento. Volte em breve!'
        />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper
      title='Seara Store'
      subtitle='Produtos que edificam e expressam sua fé.'
    >
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {products.map((item) => (
          <Card
            key={item.id}
            className='flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
          >
            <CardHeader className='p-0 relative overflow-hidden'>
              {item.imageUrls && item.imageUrls.length > 1 ? (
                <Carousel className='w-full'>
                  <CarouselContent>
                    {item.imageUrls.map((imageUrl, index) => (
                      <CarouselItem key={index}>
                        <Image
                          src={imageUrl}
                          alt={`${item.name} - Imagem ${index + 1}`}
                          width={350}
                          height={350}
                          className='w-full h-auto'
                          data-ai-hint={`product merchandise store image ${index + 1
                            }`}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className='absolute left-2 top-1/2 -translate-y-1/2' />
                  <CarouselNext className='absolute right-2 top-1/2 -translate-y-1/2' />
                </Carousel>
              ) : (
                <Image
                  src={
                    item.imageUrls?.[0] ||
                    "https://placehold.co/350x350.png?text=No+Image"
                  }
                  alt={item.name}
                  width={350}
                  height={350}
                  className='w-full h-auto'
                  data-ai-hint='product merchandise store'
                />
              )}
            </CardHeader>
            <CardContent className='flex-grow p-4'>
              <CardTitle className='text-lg mb-1 text-foreground line-clamp-2 h-14'>
                {item.name}
              </CardTitle>
              {item.price && (
                <p className='text-md font-semibold text-primary'>
                  {item.price}
                </p>
              )}
            </CardContent>
            <CardFooter className='p-4 pt-0'>
              <Button
                className='w-full bg-accent hover:bg-accent/90 text-accent-foreground'
                onClick={() => handleBuyClick(item.name)}
              >
                <ShoppingBag className='mr-2 h-4 w-4' /> Comprar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className='mt-12 text-center'>
        <p className='text-muted-foreground'>
          Esta é uma vitrine de demonstração.
        </p>
      </div>
    </SectionWrapper>
  );
}
