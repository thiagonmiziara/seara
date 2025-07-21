import SectionWrapper from "@/components/shared/SectionWrapper";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { HeartHandshake, Landmark, QrCode, CreditCard } from "lucide-react";
import Link from "next/link";

import { getMissionDiaryEntryBySlug } from "@/services/get-mission-diary-entry-by-slug";
import { getMissions } from "@/services/get-missions";

export async function generateStaticParams() {
  const missions = await getMissions();
  if (!missions) {
    return [];
  }
  return missions.map((mission) => ({
    slug: mission.slug,
  }));
}

export default async function DoarPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const getMissionDetails = await getMissionDiaryEntryBySlug(slug);

  if (!getMissionDetails) {
    return null;
  }

  return (
    <SectionWrapper
      title={getMissionDetails.donationTitle}
      subtitle={getMissionDetails.donationSubtitle}
    >
      <div className='grid md:grid-cols-2 gap-10'>
        {/* PIX Donation Card */}
        <Card className='shadow-xl'>
          <CardHeader>
            <CardTitle className='text-2xl text-primary flex items-center'>
              <QrCode className='h-6 w-6 mr-2' /> Doar com PIX
            </CardTitle>
            <CardDescription>Rápido, fácil e seguro.</CardDescription>
          </CardHeader>
          <CardContent className='text-center space-y-4'>
            <Image
              src={getMissionDetails.qrCodePixUrl}
              alt='QR Code PIX para Doação'
              width={200}
              height={200}
              className='mx-auto rounded-lg shadow-md'
              data-ai-hint='qr code pix'
            />
            <p className='text-lg font-semibold text-foreground'>Chave PIX:</p>
            <p className='text-md text-muted-foreground bg-muted p-2 rounded break-all'>
              {getMissionDetails.pixKey}
            </p>
            <p className='text-sm text-muted-foreground'>
              Abra o app do seu banco, escolha a opção PIX, aponte a câmera para
              o QR Code ou use a chave acima.
            </p>
          </CardContent>
        </Card>

        {/* Bank Transfer Donation Card */}
        <Card className='shadow-xl'>
          <CardHeader>
            <CardTitle className='text-2xl text-primary flex items-center'>
              <Landmark className='h-6 w-6 mr-2' /> Transferência Bancária
            </CardTitle>
            <CardDescription>
              Para dízimos, ofertas e contribuições.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-3 text-muted-foreground'>
            <div>
              <strong className='text-foreground'>Banco:</strong>{" "}
              {getMissionDetails.bankName}
            </div>
            <div>
              <strong className='text-foreground'>Agência:</strong>{" "}
              {getMissionDetails.agency}
            </div>
            <div>
              <strong className='text-foreground'>Conta Corrente:</strong>{" "}
              {getMissionDetails.account}
            </div>
            <div>
              <strong className='text-foreground'>Favorecido:</strong>{" "}
              {getMissionDetails.beneficiary}
            </div>
            <div>
              <strong className='text-foreground'>CNPJ:</strong>{" "}
              {getMissionDetails.cnpj}
            </div>

            <div className='mt-12 text-center p-6 border-t border-border'>
              <HeartHandshake className='h-12 w-12 text-primary mx-auto mb-4' />
              <h3 className='text-2xl font-semibold text-foreground'>
                Sua Contribuição Faz a Diferença!
              </h3>
              <p className='text-muted-foreground mt-2 max-w-xl mx-auto'>
                Agradecemos imensamente sua generosidade. Que Deus o abençoe
                ricamente por semear em Seu Reino. Para mais informações ou
                dúvidas, entre em{" "}
                <Link
                  href='/contato'
                  className='text-primary underline hover:text-primary/80'
                >
                  contato conosco
                </Link>
                .
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
