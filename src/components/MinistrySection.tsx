"use client";

import { Users } from "lucide-react";
import { useState, useEffect } from "react";
import SectionWrapper from "./shared/SectionWrapper";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface IMinistrySection {
  data: {
    slug: string;
    name: string;
    imageUrl: string;
    description: string;
  };
  reverse: boolean;
}

export default function MinistrySection({ data, reverse }: IMinistrySection) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const animationClass = reverse
    ? "animate-slide-in-right"
    : "animate-slide-in-left";

  return (
    <SectionWrapper>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
          reverse ? "md:grid-cols-2-reversed" : ""
        } ${isVisible ? animationClass : "opacity-0"}`}
      >
        <div
          className={`relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg ${
            reverse ? "md:col-start-2" : ""
          }`}
        >
          <Image
            src={data.imageUrl}
            alt={data.name}
            fill
            style={{ objectFit: "cover" }}
            data-ai-hint={
              data.slug === "jovem"
                ? "youth group teenagers"
                : "children kids playing"
            }
          />
        </div>

        <div
          className={`flex flex-col justify-center ${
            reverse ? "md:col-start-1 md:row-start-1" : ""
          }`}
        >
          <div className='mb-2 flex items-center text-sm font-semibold uppercase tracking-wide text-primary justify-center md:justify-start'>
            <Users className='mr-2 h-5 w-5' />
            Ministério
          </div>
          <h2 className='text-3xl font-bold text-primary mb-4 text-center md:text-left'>
            {data.name}
          </h2>
          <p className='text-lg text-muted-foreground mb-6 text-center md:text-left'>
            {data.description}
          </p>
          <Link href={`/ministerios/${data.slug}`}>
            <Button size='lg' className='mt-4 w-full md:w-auto'>
              Saiba Mais
            </Button>
          </Link>
        </div>

        <div className='hidden'>
          <Image
            src={data.imageUrl}
            alt={`${data.name} Logo`}
            width={1}
            height={1}
            data-ai-hint='logo abstract design'
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
