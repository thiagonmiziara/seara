import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { HorizontalScrollContainer } from "@/components/shared/HorizontalScrollContainer";
import { communities } from "@/data/communities";

export default function CommunitiesCarousel() {
  return (
    <SectionWrapper
      title="Comunidades de Alcance"
      subtitle="Encontre uma Seara de Deus perto de você e faça parte da nossa família."
    >
      <HorizontalScrollContainer>
        {communities.map((item) => (
          <Card
            key={item.id}
            className="w-full max-w-[300px] md:max-w-[350px] flex-shrink-0 flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader className="p-0 overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.name}
                width={400}
                height={250}
                className="w-full h-auto"
                data-ai-hint="community representation"
              />
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <CardTitle className="text-xl mb-2 text-foreground">
                {item.name}
              </CardTitle>
              <div className="text-sm text-muted-foreground line-clamp-2">
                {item.description}
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button
                asChild
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link href={`/comunidades/${item.slug}`}>
                  Ver mais <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </HorizontalScrollContainer>
    </SectionWrapper>
  );
}
