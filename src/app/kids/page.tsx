import SectionWrapper from "@/components/shared/SectionWrapper";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Smile, BookHeart, Palette, Users, ShieldCheck } from "lucide-react"; // Palette for arts/crafts

import { IKidsData } from "@/types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import RichTextRenderer from "@/lib/richTextRenderer";
import { getKidsDetails } from "@/services/get-kids-details";

export default async function KidsPage() {
  const kidsData = await getKidsDetails();

  if (!kidsData) {
    return null;
  }

  return (
    <SectionWrapper
      title={kidsData.name}
      subtitle='Ensinando o caminho em que devem andar desde pequenos.'
    >
      <Card className='overflow-hidden shadow-xl'>
        <Image
          src={kidsData.imageUrl}
          alt={`Banner ${kidsData.name}`}
          width={1200}
          height={500}
          className='w-full h-64 md:h-96 object-cover'
          data-ai-hint='children playing learning church'
          priority
        />
        <CardHeader className='pt-6 text-center'>
          <Image
            src={kidsData.imageUrl}
            alt={`Logo ${kidsData.name}`}
            width={120}
            height={120}
            className='rounded-full mx-auto mb-4 border-4 border-primary shadow-lg'
            data-ai-hint='logo kids ministry'
          />
          <CardTitle className='text-3xl md:text-4xl text-primary'>
            {kidsData.name}
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-8 px-4 md:px-8 py-8'>
          <div className='text-xl text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto'>
            <RichTextRenderer document={kidsData.description} />
          </div>

          <div className='p-6 bg-card-foreground/5 rounded-lg'>
            <h3 className='text-2xl font-semibold mb-4 text-foreground text-center'>
              Nossa Visão
            </h3>
            <div className='text-lg text-center text-muted-foreground'>
              <RichTextRenderer document={kidsData.vision} />
            </div>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-6 text-foreground text-center'>
              Nossas Turmas
            </h3>
            <div className='grid md:grid-cols-2 gap-6'>
              {kidsData.ageGroups.map((group) => {
                return (
                  <div
                    key={group.name}
                    className='flex items-start space-x-4 p-4 bg-card rounded-lg shadow'
                  >
                    <Smile className='h-8 w-8 text-accent mt-1 shrink-0' />
                    <div>
                      <h4 className='font-semibold text-lg text-foreground'>
                        {group.name}
                      </h4>
                      <p className='text-muted-foreground text-sm'>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {group.description}
                        </ReactMarkdown>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='text-center mt-10 p-6 border-t border-border'>
            <h3 className='text-2xl font-semibold mb-4 text-foreground'>
              Traga Seus Filhos!
            </h3>
            <p className='text-muted-foreground mb-2'>
              Líder Responsável: {kidsData.leader}
            </p>
            <p className='text-muted-foreground mb-4'>
              Para mais informações: {kidsData.contact}
            </p>
            <Button
              size='lg'
              asChild
              className='bg-primary hover:bg-primary/90 text-primary-foreground'
            >
              <Link href='/contato'>Fale Conosco</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
