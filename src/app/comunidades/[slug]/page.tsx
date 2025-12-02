import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { MapPin, Clock, User } from "lucide-react";
import { communities } from "@/data/communities";

export function generateStaticParams() {
  return communities.map((community) => ({
    slug: community.slug,
  }));
}

export default async function CommunityDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const getCommunityDetails = communities.find((c) => c.slug === slug);

  if (!getCommunityDetails) {
    return (
      <SectionWrapper title="Error">
        <div className="text-center">Nenhuma comunidade encontrada.</div>
      </SectionWrapper>
    );
  }

  return (
    <div className="bg-background flex justify-center items-center min-h-[calc(100vh-4rem)] px-2">
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl items-center justify-center">
        {/* Imagem da Comunidade */}
        <div className="flex justify-center items-center bg-black/0">
          <img
            src={getCommunityDetails.imageUrl}
            alt={getCommunityDetails.name}
            className="rounded-lg shadow-lg transition-all duration-300 w-[400px] h-[720px] object-contain bg-background hover:ring-4 hover:ring-primary"
            style={{ maxWidth: 400, maxHeight: 720 }}
          />
        </div>
        {/* Detalhes da Comunidade */}
        <div className="flex flex-col gap-5 w-full max-w-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Venha fazer parte da nossa{" "}
            <span className="text-primary">comunidade!</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-2">
            {getCommunityDetails.fullDescription}
          </p>
          {/* Endereço */}
          <div className="bg-card rounded-lg p-5 border border-border transition-all duration-300 hover:ring-2 hover:ring-primary cursor-pointer">
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Endereço</h3>
                <p className="text-muted-foreground">
                  {getCommunityDetails.address}
                </p>
              </div>
            </div>
          </div>
          {/* Horário dos Cultos */}
          <div className="bg-card rounded-lg p-5 border border-border transition-all duration-300 hover:ring-2 hover:ring-primary cursor-pointer">
            <div className="flex items-start gap-3">
              <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Horário dos cultos
                </h3>
                <p className="text-muted-foreground">
                  {getCommunityDetails.meetingTimes}
                </p>
              </div>
            </div>
          </div>
          {/* Pastores */}
          <div className="bg-card rounded-lg p-5 border border-border transition-all duration-300 hover:ring-2 hover:ring-primary cursor-pointer">
            <div className="flex items-start gap-3">
              <User className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Pastores</h3>
                <p className="text-muted-foreground">
                  {getCommunityDetails.leader}
                </p>
              </div>
            </div>
          </div>
          {/* Mapa do Google */}
          <div className="bg-card rounded-lg overflow-hidden border border-border mt-2">
            <iframe
              src={getCommunityDetails.mapUrl}
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
