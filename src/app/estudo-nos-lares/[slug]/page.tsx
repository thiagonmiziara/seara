import SectionWrapper from "@/components/shared/SectionWrapper";
import { CalendarCheck, Users, MapPin } from "lucide-react";
import { meetings } from "@/data/meetings";

export function generateStaticParams() {
  return meetings.map((meeting) => ({
    slug: meeting.slug,
  }));
}

export default function MeetingDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const meeting = meetings.find((m) => m.slug === params.slug);

  if (!meeting) {
    return (
      <SectionWrapper title="Erro">
        <div className="text-center">Culto ou encontro não encontrado.</div>
      </SectionWrapper>
    );
  }

  return (
    <div className="relative w-full min-h-[70vh] flex flex-col items-center justify-center">
      {/* Conteúdo detalhado estilo Comunidades */}
      <div className="bg-background flex justify-center items-center min-h-[calc(100vh-4rem)] px-2 w-full">
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl items-center justify-center">
          {/* Imagem */}
          <div className="flex justify-center items-center bg-black/0">
            <img
              src={meeting.imageUrl}
              alt={meeting.name}
              className="rounded-lg shadow-lg transition-all duration-300 w-full max-w-[400px] h-auto max-h-[720px] object-contain bg-background hover:ring-4 hover:ring-primary"
              style={{ maxWidth: 400, maxHeight: 720 }}
            />
          </div>

          {/* Detalhes */}
          <div className="flex flex-col gap-5 w-full max-w-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {meeting.name}{" "}
              <span className="text-primary inline-block relative">
                detalhes{" "}
                <svg
                  className="absolute -bottom-2 left-0 w-full text-primary/40"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C50 4 150 4 198 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="text-muted-foreground text-lg mb-2">
              {meeting.fullDescription || meeting.description}
            </p>

            {/* Endereço */}
            <div className="bg-card rounded-lg p-5 border border-border transition-all duration-300 hover:ring-2 hover:ring-primary cursor-pointer">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Endereço</h3>
                  <p className="text-muted-foreground">{meeting.address}</p>
                </div>
              </div>
            </div>

            {/* Horário */}
            <div className="bg-card rounded-lg p-5 border border-border transition-all duration-300 hover:ring-2 hover:ring-primary cursor-pointer">
              <div className="flex items-start gap-3">
                <CalendarCheck className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Horário</h3>
                  <p className="text-muted-foreground">
                    {meeting.meetingTimes}
                  </p>
                </div>
              </div>
            </div>

            {/* Líder / Contato */}
            {meeting.leader && (
              <div className="bg-card rounded-lg p-5 border border-border transition-all duration-300 hover:ring-2 hover:ring-primary cursor-pointer">
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Líder</h3>
                    <p className="text-muted-foreground">{meeting.leader}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Google Maps */}
            <div className="bg-card rounded-lg overflow-hidden border border-border mt-2">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  meeting.address || ""
                )}&output=embed`}
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
    </div>
  );
}
