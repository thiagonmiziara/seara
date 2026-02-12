import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { HorizontalScrollContainer } from "@/components/shared/HorizontalScrollContainer";
import { Skeleton } from "@/components/ui/skeleton";
import { schoolsData } from "@/data/schools";
import RichTextRenderer from "@/lib/richTextRenderer";

export default function SchoolsCarousel() {
  const schools = schoolsData;
  const itemCount = schools.length;

  return (
    <SectionWrapper
      title="Nossas Escolas"
      subtitle="Capacitação e conhecimento para todas as etapas da sua jornada espiritual."
    >
      <HorizontalScrollContainer shouldCenter={itemCount < 4}>
        {!schools
          ? Array.from({ length: 3 }).map((_, index) => (
            <Card
              key={index}
              className="w-[300px] min-w-[300px] md:w-[350px] md:min-w-[350px] h-[520px] flex flex-col bg-card/40 backdrop-blur-md border-border/50 overflow-hidden"
            >
              <div className="h-64 flex items-center justify-center p-10">
                <Skeleton className="w-32 h-32 rounded-full opacity-20" />
              </div>
              <CardContent className="flex-grow p-8 flex flex-col justify-end">
                <Skeleton className="h-4 w-24 mb-4 rounded-full opacity-20" />
                <Skeleton className="h-8 w-3/4 mb-3 opacity-20" />
                <Skeleton className="h-4 w-full mb-2 opacity-20" />
                <Skeleton className="h-4 w-5/6 mb-6 opacity-20" />
                <Skeleton className="h-12 w-full rounded-xl opacity-20" />
              </CardContent>
            </Card>
          ))
          : schools.map((item) => (
            <Card
              key={item.id}
              className="group relative w-[300px] min-w-[300px] md:w-[350px] md:min-w-[350px] h-[520px] flex flex-col overflow-hidden bg-card/40 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-500 shadow-2xl"
            >
              {/* Decorative Background Letter */}
              <div className="absolute -right-4 -top-8 text-[12rem] font-black text-primary/5 select-none transition-all duration-700 group-hover:text-primary/10 group-hover:-translate-y-4">
                {item.name.charAt(0)}
              </div>

              {/* Logo Section - Floating Effect */}
              <div className="relative h-64 flex items-center justify-center p-10 z-10">
                <div className="relative w-full h-full drop-shadow-[0_20px_20px_rgba(74,222,128,0.15)] group-hover:drop-shadow-[0_25px_25px_rgba(74,222,128,0.25)] transition-all duration-500">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    className="object-contain"
                    data-ai-hint="education learning study"
                  />
                </div>
              </div>

              <CardContent className="relative flex-grow p-8 flex flex-col justify-end z-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 w-fit">
                  <GraduationCap className="h-3 w-3 text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/80">Acadêmico</span>
                </div>

                <CardTitle className="text-2xl font-black mb-3 text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                  {item.name}
                </CardTitle>

                <div className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                  <RichTextRenderer document={item.description} />
                </div>

                <Button
                  asChild
                  className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border-primary/20 hover:border-primary transition-all duration-500 h-12 rounded-xl group/btn font-bold"
                >
                  <Link href={`/escolas/${item.slug}`}>
                    Saber Mais
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
      </HorizontalScrollContainer>
    </SectionWrapper>
  );
}
