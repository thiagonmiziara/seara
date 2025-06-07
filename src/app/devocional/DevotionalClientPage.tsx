'use client';

import { useState, type FormEvent } from 'react';
import { generateDailyDevotional, type GenerateDailyDevotionalOutput } from '@/ai/flows/generate-daily-devotional';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { Loader2, Wand2, AlertTriangle } from 'lucide-react';

export default function DevotionalClientPage() {
  const [currentEvent, setCurrentEvent] = useState<string>('');
  const [devotional, setDevotional] = useState<GenerateDailyDevotionalOutput | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentEvent.trim()) {
      setError('Por favor, insira um evento ou tema atual.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setDevotional(null);

    try {
      const result = await generateDailyDevotional({ currentEvent });
      setDevotional(result);
    } catch (err) {
      console.error('Error generating devotional:', err);
      setError('Ocorreu um erro ao gerar o devocional. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center">
            <Wand2 className="h-6 w-6 mr-2 text-primary" />
            Gerador de Devocional Diário
          </CardTitle>
          <CardDescription>
            Insira um evento atual ou tema de interesse para gerar um devocional inspirador com uma imagem relevante.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="currentEvent" className="block text-sm font-medium text-foreground mb-1">
                Evento ou Tema Atual:
              </Label>
              <Input
                id="currentEvent"
                type="text"
                value={currentEvent}
                onChange={(e) => setCurrentEvent(e.target.value)}
                placeholder="Ex: Desafios da juventude, Esperança em meio à crise, etc."
                className="bg-background"
                disabled={isLoading}
              />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Gerando...
                </>
              ) : (
                'Gerar Devocional'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {error && (
        <Card className="border-destructive bg-destructive/10 shadow-md">
          <CardContent className="p-4">
            <div className="flex items-center text-destructive">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <p className="font-semibold">{error}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {devotional && (
        <Card className="shadow-xl animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Seu Devocional Gerado</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {devotional.imageUrl && (
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
                <Image
                  src={devotional.imageUrl}
                  alt="Imagem do Devocional"
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="devotional spiritual landscape"
                />
              </div>
            )}
            <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 whitespace-pre-line">
              <p>{devotional.text}</p>
            </div>
             <CardDescription className="text-xs text-center">
                Devocional gerado por IA. A imagem também é gerada por IA e pode ser um placeholder ou uma imagem real dependendo da capacidade do modelo.
            </CardDescription>
          </CardContent>
        </Card>
      )}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
