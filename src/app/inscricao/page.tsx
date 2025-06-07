"use client"; // For searchParams

import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { UserPlus, FileText, Mail, Phone } from 'lucide-react';

export default function InscricaoPage() {
  const searchParams = useSearchParams();
  const [selectedCourse, setSelectedCourse] = useState('');

  useEffect(() => {
    const cursoQuery = searchParams.get('curso');
    if (cursoQuery) {
      // In a real app, you might fetch course details based on slug
      // For now, just display the slug or a mapped name
      const courseMap: { [key: string]: string } = {
        'escola-lideres': 'Escola de Líderes',
        'escola-fundacao': 'Escola Fundação',
        'seara-box': 'Seara Box',
      };
      setSelectedCourse(courseMap[cursoQuery] || cursoQuery);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    alert(`Inscrição para "${selectedCourse || 'curso selecionado'}" enviada (simulação)! Entraremos em contato.`);
  };

  return (
    <SectionWrapper 
      title="Formulário de Inscrição" 
      subtitle={selectedCourse ? `Pré-inscrição para: ${selectedCourse}` : "Inscreva-se em nossos cursos e atividades."}
    >
      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-primary flex items-center">
            <UserPlus className="h-6 w-6 mr-2" /> Detalhes da Inscrição
          </CardTitle>
          {selectedCourse && <CardDescription>Preencha seus dados para se inscrever em: <strong>{selectedCourse}</strong></CardDescription>}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="fullName" className="text-foreground">Nome Completo</Label>
              <Input id="fullName" type="text" placeholder="Seu nome completo" required className="bg-background mt-1" />
            </div>
            <div>
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input id="email" type="email" placeholder="seu.melhor@email.com" required className="bg-background mt-1" />
            </div>
            <div>
              <Label htmlFor="phone" className="text-foreground">Telefone (com DDD)</Label>
              <Input id="phone" type="tel" placeholder="(XX) XXXXX-XXXX" required className="bg-background mt-1" />
            </div>
            {selectedCourse && (
              <div>
                <Label htmlFor="course" className="text-foreground">Curso/Atividade</Label>
                <Input id="course" type="text" value={selectedCourse} readOnly className="bg-muted mt-1" />
              </div>
            )}
            {/* Add more fields as needed, e.g., address, previous experience, etc. */}
             <div>
              <Label htmlFor="comments" className="text-foreground">Observações (opcional)</Label>
              <Input id="comments" type="text" placeholder="Alguma pergunta ou observação?" className="bg-background mt-1" />
            </div>
            <div className="flex items-center space-x-2 pt-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm text-muted-foreground">
                Li e concordo com os <a href="/termos" className="underline hover:text-primary">termos de participação</a> (simulação).
              </Label>
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <FileText className="mr-2 h-5 w-5" /> Enviar Inscrição
            </Button>
          </form>
        </CardContent>
      </Card>
       <p className="text-center text-sm text-muted-foreground mt-8">
        Após o envio, nossa equipe entrará em contato para confirmar sua inscrição e fornecer mais detalhes.
      </p>
    </SectionWrapper>
  );
}
