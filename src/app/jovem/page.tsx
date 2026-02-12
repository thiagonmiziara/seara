import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { JoinSection } from "@/components/sections/JoinSection";
import {
  BookOpen,
  Music,
  Users2,
  Flame,
  Target,
  Heart,
  Users,
  Mail,
  Instagram,
  MessageCircle,
} from "lucide-react";

export const revalidate = 60;

export default function JovemPage() {
  const activities = [
    {
      icon: BookOpen,
      title: "Estudo Bíblico",
      description: "Aprofunde-se na Palavra de Deus",
      schedule: "Terças-feiras às 19:30",
      highlight: true,
    },
    {
      icon: Music,
      title: "Louvor & Adoração",
      description: "Momentos de intimidade com Deus",
      schedule: "Domingos às 18:00",
      highlight: false,
    },
    {
      icon: Users2,
      title: "Célula de Jovens",
      description: "Comunhão e edificação mútua",
      schedule: "Quintas-feiras às 20:00",
      highlight: false,
    },
    {
      icon: Flame,
      title: "Avivamento",
      description: "Cultos especiais de busca",
      schedule: "Último sábado do mês",
      highlight: true,
    },
  ];

  const missionValues = [
    {
      icon: Target,
      title: "Propósito",
      description:
        "Guiados por um chamado maior, vivemos para glorificar a Deus em tudo.",
    },
    {
      icon: Heart,
      title: "Paixão",
      description:
        "Ardemos pelo evangelho e pela transformação de vidas através de Cristo.",
    },
    {
      icon: Users,
      title: "Comunidade",
      description:
        "Juntos somos mais fortes. Vivemos em comunhão e amor uns pelos outros.",
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-10 h-10 text-primary mb-4" />,
      title: "Instagram",
      description: "@searajovem",
      href: "https://www.instagram.com/searajovem/",
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-primary mb-4" />,
      title: "WhatsApp",
      description: "Grupo da Galera",
      href: "#",
    },
  ];

  const locationIcon = (
    <div className="p-3 bg-primary/10 rounded-xl">
      <Users className="w-6 h-6 text-primary" />
    </div>
  );

  return (
    <main className="min-h-screen bg-background">
      <HeroSection
        backgroundLetters={["J", "V"]}
        title={<span className="text-primary">JOVEM</span>}
        showBackButton={true}
        backButtonText="Página Inicial"
        description={
          <span>
            Conectando, Equipando e Enviando a{" "}
            <span className="text-primary font-semibold">Nova Geração</span>
          </span>
        }
      />

      <MissionSection
        subtitle="Nossa Missão"
        title={
          <span>
            Formando uma geração{" "}
            <span className="text-primary">apaixonada</span> por Jesus
          </span>
        }
        description="O Ministério de Jovens da Seara de Deus forma uma geração apaixonada por Jesus, firmada na Palavra e relevante neste tempo, através de discipulado, comunhão, adoração e serviço ao Reino."
        values={missionValues}
      />

      <ActivitiesSection
        subtitle="O Que Fazemos"
        title="Atividades & <span className='text-primary'>Encontros</span>"
        description="Diversos momentos para crescer na fé, fazer amizades e viver experiências transformadoras."
        activities={activities}
      />

      <JoinSection
        subtitle="Faça Parte"
        title={
          <span>
            Junte-se a <span className="text-primary">Nós!</span>
          </span>
        }
        description="Venha fazer parte dessa família! Aqui você encontrará amigos verdadeiros, crescimento espiritual e um lugar para desenvolver seus dons."
        infoItems={[
          {
            icon: <Users className="w-5 h-5 text-primary" />,
            label: "Líder: Pastor Junior",
          },
          {
            icon: <Mail className="w-5 h-5 text-primary" />,
            label: "searajovem@teste.com",
          },
        ]}
        socialLinks={socialLinks}
        location={{
          icon: locationIcon,
          title: "Igreja Seara de Deus - Sede",
          address:
            "Av. Mato Grosso, 694 - Nossa Sra. Aparecida, Uberlândia - MG, 38400-724",
          mapEmbedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.859182694944!2d-48.2742206!3d-18.9047337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445fb95e87dbd%3A0xf82a1239ff0bffa8!2sIgreja%20Seara%20de%20Deus%20-%20Sede!5e0!3m2!1spt-BR!2sbr!4v1717780782999!5m2!1spt-BR!2sbr",
        }}
      />
    </main>
  );
}
