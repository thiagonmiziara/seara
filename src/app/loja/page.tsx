import SectionWrapper from '@/components/shared/SectionWrapper';
import type { ProductItem } from '@/types';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

const mockStoreProducts: ProductItem[] = [
  { id: '1', name: 'Camiseta Seara Connect - Modelo Fé', imageUrl: 'https://placehold.co/350x350.png?text=Camiseta+Fé', price: 'R$ 59,90' },
  { id: '2', name: 'Livro "Crescendo em Graça"', imageUrl: 'https://placehold.co/350x350.png?text=Livro+Graça', price: 'R$ 45,00' },
  { id: '3', name: 'Caneca Personalizada Seara', imageUrl: 'https://placehold.co/350x350.png?text=Caneca+Seara', price: 'R$ 29,90' },
  { id: '4', name: 'Bíblia de Estudo Pentecostal', imageUrl: 'https://placehold.co/350x350.png?text=Bíblia+Estudo', price: 'R$ 120,00' },
  { id: '5', name: 'Agenda Devocional 2025', imageUrl: 'https://placehold.co/350x350.png?text=Agenda+2025', price: 'R$ 38,00' },
  { id: '6', name: 'Boné Seara Jovem', imageUrl: 'https://placehold.co/350x350.png?text=Boné+Jovem', price: 'R$ 42,00' },
];


export default function LojaPage() {
  return (
    <SectionWrapper title="Seara Store" subtitle="Produtos que edificam e expressam sua fé.">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockStoreProducts.map((item) => (
          <Card key={item.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-0">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={350}
                height={350}
                className="object-cover w-full h-64"
                data-ai-hint="product merchandise store"
              />
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <CardTitle className="text-lg mb-1 text-foreground line-clamp-2 h-14">{item.name}</CardTitle>
              {item.price && <p className="text-md font-semibold text-primary">{item.price}</p>}
            </CardContent>
            <CardFooter className="p-4 pt-0">
               <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                 <ShoppingBag className="mr-2 h-4 w-4" /> Comprar
               </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-muted-foreground">Esta é uma vitrine de demonstração. Em breve, nossa loja online completa!</p>
      </div>
    </SectionWrapper>
  );
}
