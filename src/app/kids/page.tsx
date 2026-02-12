import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { JoinSection } from "@/components/sections/JoinSection";
import { Heart, Users, Lightbulb, Mail, Instagram } from "lucide-react";

export default async function KidsPage() {
  const missionValues = [
    {
      icon: Lightbulb,
      title: "Aprendizado",
      description:
        "Ensinando as crianças os caminhos de Deus desde pequenas com alegria e diversão.",
    },
    {
      icon: Heart,
      title: "Amor",
      description: "Cada criança é valiosa e especial no Reino de Deus.",
    },
    {
      icon: Users,
      title: "Comunidade",
      description:
        "Construindo uma comunidade amorosa onde as crianças crescem juntas.",
    },
  ];

  const activities = [
    {
      icon: Heart,
      title: "Creche e Berçário",
      description: "Para bebês e crianças pequenas",
      schedule: "Domingos",
      highlight: false,
    },
    {
      icon: Heart,
      title: "Pré-escola",
      description: "Atividades educativas e lúdicas",
      schedule: "Domingos",
      highlight: false,
    },
    {
      icon: Heart,
      title: "Fundamental 1",
      description: "Ensino cristão com diversão",
      schedule: "Domingos",
      highlight: true,
    },
    {
      icon: Heart,
      title: "Fundamental 2",
      description: "Desenvolvimento de liderança",
      schedule: "Domingos",
      highlight: false,
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-10 h-10 text-primary mb-4" />,
      title: "Instagram",
      description: "Siga-nos no Instagram",
      href: `https://www.instagram.com/searadeus/`,
    },
    {
      icon: <Mail className="w-10 h-10 text-primary mb-4" />,
      title: "Email",
      description: "Entre em contato conosco por email",
      href: `mailto:contato@searadeus.com`,
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
        backgroundLetters={["K", "I"]}
        title={
          <span>
            <span className="text-primary">KIDS</span>
          </span>
        }
        showBackButton={true}
        backButtonText="Página Inicial"
        description={
          <span>
            Ensinando o caminho desde pequenos{" "}
            <span className="text-primary font-semibold">
              de forma divertida
            </span>
          </span>
        }
      />

      <MissionSection
        subtitle="Nossa Missão Kids"
        title={
          <span>
            Formando crianças <span className="text-primary">sábias</span> em
            Deus
          </span>
        }
        description="O Ministério de Crianças da Seara de Deus tem como missão formar cidadãos do Reino através de uma educação cristã que desenvolve caráter, fé e propósito. Nos comprometemos em criar um ambiente seguro, amoroso e divertido onde cada criança descobre seu valor em Jesus e aprende a viver de acordo com os princípios da Palavra de Deus. Desejamos ser parceiros das famílias, plantando sementes de fé que germinarão em vidas transformadas e dedicadas ao Senhor."
        values={missionValues}
      />

      <ActivitiesSection
        subtitle="Nossas Turmas"
        title="Faixas Etárias & <span className='text-primary'>Atividades</span>"
        description="Atividades adequadas para cada idade, sempre divertidas e educativas."
        activities={activities}
      />

      <JoinSection
        subtitle="Participe"
        title={
          <span>
            Traga Seus <span className="text-primary">Filhos!</span>
          </span>
        }
        description={"Um lugar seguro e amoroso para crianças crescerem na fé."}
        infoItems={[
          {
            icon: <Users className="w-5 h-5 text-primary" />,
            label: `Líder: Pastor`,
          },
          {
            icon: <Mail className="w-5 h-5 text-primary" />,
            label: "contato@searadeus.com",
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
