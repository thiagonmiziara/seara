import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { JoinSection } from "@/components/sections/JoinSection";
import {
    Heart,
    Users,
    BookOpen,
    Music,
    Gamepad2,
    Zap,
    Mail,
    Instagram,
    MessageCircle,
} from "lucide-react";

export const revalidate = 60;

export default function TeenPage() {
    const activities = [
        {
            icon: BookOpen,
            title: "Estudo Bíblico Teen",
            description: "Aprofundamento na Palavra com linguagem adolescente",
            schedule: "Sextas-feiras às 19:30",
            highlight: true,
        },
        {
            icon: Music,
            title: "Louvor Teen",
            description: "Adoração vibrante e contemporânea",
            schedule: "Domingos às 18:00",
            highlight: false,
        },
        {
            icon: Gamepad2,
            title: "Noite de Games",
            description: "Diversão e comunhão através dos jogos",
            schedule: "Sábados (quinzenal) às 19:00",
            highlight: false,
        },
        {
            icon: Zap,
            title: "Acampamento Teen",
            description: "Experiências transformadoras e aventura",
            schedule: "Anual",
            highlight: true,
        },
    ];

    const missionValues = [
        {
            icon: Heart,
            title: "Identidade",
            description:
                "Ajudar adolescentes a descobrirem sua verdadeira identidade em Cristo, não no mundo.",
        },
        {
            icon: Zap,
            title: "Autenticidade",
            description:
                "Viver uma fé genuína e real, não apenas religiosa, mas transformadora.",
        },
        {
            icon: Users,
            title: "Comunidade",
            description:
                "Criar um espaço seguro onde teens podem ser eles mesmos e crescer juntos.",
        },
    ];

    const socialLinks = [
        {
            icon: <Instagram className="w-10 h-10 text-primary mb-4" />,
            title: "Instagram",
            description: "@searateen",
            href: "https://www.instagram.com/searadeus",
        },
        {
            icon: <MessageCircle className="w-10 h-10 text-primary mb-4" />,
            title: "WhatsApp",
            description: "Grupo Teen",
            href: "#",
        },
    ];

    const locationIcon = (
        <div className="p-3 bg-primary/10 rounded-xl">
            <Users className="w-6 h-6 text-primary" />
        </div>
    );

    return (
        <main className="min-h-screen bg-background text-foreground">
            <HeroSection
                backgroundLetters={["T", "N"]}
                title={
                    <span className="text-primary tracking-tighter">TEEN</span>
                }
                showBackButton={true}
                backButtonText="Página Inicial"
                description={
                    <span>
                        Adolescentes vivendo uma fé <span className="text-primary font-semibold">autêntica</span>
                        e impactando sua geração.
                    </span>
                }
            />

            <MissionSection
                subtitle="Nossa Missão Teen"
                title={
                    <span>
                        Teens <span className="text-primary">reais</span> vivendo
                        Cristo de verdade
                    </span>
                }
                description="O Ministério Teen da Seara de Deus é um espaço onde adolescentes podem ser autênticos, fazer perguntas difíceis, e descobrir uma fé que funciona na vida real. Não queremos apenas teens religiosos, mas jovens apaixonados por Jesus que transformam suas escolas, famílias e comunidades."
                values={missionValues}
            />

            <ActivitiesSection
                subtitle="Nossos Rolês"
                title="Encontros & <span className='text-primary'>Diversão</span>"
                description="Momentos pensados para teens que querem crescer na fé sem perder a diversão."
                activities={activities}
            />

            <JoinSection
                subtitle="Vem com a Gente"
                title={
                    <span>
                        Seu lugar é <span className="text-primary">Aqui!</span>
                    </span>
                }
                description="Não importa se você é novo na fé ou já conhece Jesus há anos. Aqui você vai encontrar amigos de verdade e uma galera que quer viver Cristo de forma real."
                infoItems={[
                    {
                        icon: <Users className="w-5 h-5 text-primary" />,
                        label: "Liderança: Equipe Teen",
                    },
                    {
                        icon: <Mail className="w-5 h-5 text-primary" />,
                        label: "teen@searadeus.com",
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
