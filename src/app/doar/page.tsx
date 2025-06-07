import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { HeartHandshake, Landmark, QrCode, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function DoarPage() {
  const donationInfo = {
    title: "Contribua com a Seara de Deus",
    subtitle: "Sua generosidade nos ajuda a expandir o Reino de Deus e a abençoar vidas.",
    qrCodePixUrl: "https://placehold.co/250x250.png?text=PIX+QR+Code",
    pixKey: "chave.pix@searadedeus.com.br (Exemplo)",
    bankDetails: {
      bankName: "Banco Exemplo S.A.",
      agency: "0001",
      account: "12345-6",
      beneficiary: "Igreja Seara de Deus",
      cnpj: "00.000.000/0001-00 (Exemplo)",
    },
    onlinePlatformUrl: "#" // Placeholder for online donation platform link
  };

  return (
    <SectionWrapper title={donationInfo.title} subtitle={donationInfo.subtitle}>
      <div className="grid md:grid-cols-2 gap-10">
        {/* PIX Donation Card */}
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <QrCode className="h-6 w-6 mr-2" /> Doar com PIX
            </CardTitle>
            <CardDescription>Rápido, fácil e seguro.</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <Image
              src={donationInfo.qrCodePixUrl}
              alt="QR Code PIX para Doação"
              width={200}
              height={200}
              className="mx-auto rounded-lg shadow-md"
              data-ai-hint="qr code pix"
            />
            <p className="text-lg font-semibold text-foreground">Chave PIX (Email):</p>
            <p className="text-md text-muted-foreground bg-muted p-2 rounded break-all">{donationInfo.pixKey}</p>
            <p className="text-sm text-muted-foreground">
              Abra o app do seu banco, escolha a opção PIX, aponte a câmera para o QR Code ou use a chave acima.
            </p>
          </CardContent>
        </Card>

        {/* Bank Transfer Donation Card */}
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Landmark className="h-6 w-6 mr-2" /> Transferência Bancária
            </CardTitle>
            <CardDescription>Para dízimos, ofertas e contribuições.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <div>
              <strong className="text-foreground">Banco:</strong> {donationInfo.bankDetails.bankName}
            </div>
            <div>
              <strong className="text-foreground">Agência:</strong> {donationInfo.bankDetails.agency}
            </div>
            <div>
              <strong className="text-foreground">Conta Corrente:</strong> {donationInfo.bankDetails.account}
            </div>
            <div>
              <strong className="text-foreground">Favorecido:</strong> {donationInfo.bankDetails.beneficiary}
            </div>
            <div>
              <strong className="text-foreground">CNPJ:</strong> {donationInfo.bankDetails.cnpj}
            </div>
            <p className="text-sm pt-2">
              Após a transferência, se desejar, envie o comprovante para nosso email financeiro para identificação.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Online Platform (Optional) */}
      <div className="mt-10 text-center">
        <Card className="max-w-md mx-auto shadow-xl p-6 bg-card-foreground/5">
          <CardTitle className="text-xl text-primary flex items-center justify-center mb-3">
            <CreditCard className="h-6 w-6 mr-2" /> Plataforma Online (Em Breve)
          </CardTitle>
          <CardDescription className="text-muted-foreground mb-4">
            Em breve, disponibilizaremos uma plataforma online para doações com cartão de crédito e outras formas de pagamento.
          </CardDescription>
          <Button disabled asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href={donationInfo.onlinePlatformUrl}>Acessar Plataforma</Link>
          </Button>
        </Card>
      </div>

      <div className="mt-12 text-center p-6 border-t border-border">
        <HeartHandshake className="h-12 w-12 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-foreground">Sua Contribuição Faz a Diferença!</h3>
        <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
          Agradecemos imensamente sua generosidade. Que Deus o abençoe ricamente por semear em Seu Reino.
          Para mais informações ou dúvidas, entre em <Link href="/contato" className="text-primary underline hover:text-primary/80">contato conosco</Link>.
        </p>
      </div>
    </SectionWrapper>
  );
}
