import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { JoinSection } from "@/components/sections/JoinSection";
import {
    Heart,
    Users,
    BookOpen,
    Coffee,
    Sparkles,
    Flower2,
    Mail,
    Instagram,
    MessageCircle,
} from "lucide-react";

export const revalidate = 60;

export default function ElasPage() {
    const activities = [
        {
            icon: Coffee,
            title: "Chá com Elas",
            description: "Momentos de comunhão, partilha e café",
            schedule: "Sábados (mensal) às 16:00",
            highlight: true,
        },
        {
            icon: BookOpen,
            title: "Estudo Bíblico Feminino",
            description: "Crescimento espiritual focado na mulher cristã",
            schedule: "Quartas-feiras às 19:30",
            highlight: false,
        },
        {
            icon: Sparkles,
            title: "Encontros de Oração",
            description: "Intercessão pelas famílias e pela igreja",
            schedule: "Terças-feiras às 08:00",
            highlight: false,
        },
        {
            icon: Flower2,
            title: "Congresso de Mulheres",
            description: "Evento anual de despertamento e renovo",
            schedule: "Anual",
            highlight: true,
        },
    ];

    const missionValues = [
        {
            icon: Heart,
            title: "Identidade",
            description:
                "Auxiliar cada mulher a descobrir sua verdadeira identidade e valor em Cristo Jesus.",
        },
        {
            icon: Users,
            title: "Cuidado",
            description:
                "Criar uma rede de apoio e amor onde mulheres cuidam de mulheres em todas as fases da vida.",
        },
        {
            icon: Sparkles,
            title: "Influência",
            description:
                "Capacitar mulheres a serem influências positivas em seus lares, trabalhos e comunidade.",
        },
    ];

    const socialLinks = [
        {
            icon: <Instagram className="w-10 h-10 text-primary mb-4" />,
            title: "Instagram",
            description: "@elas.seara",
            href: "https://www.instagram.com/searadeus",
        },
        {
            icon: <MessageCircle className="w-10 h-10 text-primary mb-4" />,
            title: "WhatsApp",
            description: "Grupo de Mulheres",
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
                backgroundLetters={["E", "L"]}
                title={
                    <span className="text-primary tracking-tighter">ELAS</span>
                }
                showBackButton={true}
                backButtonText="Página Inicial"
                description={
                    <span>
                        Um lugar de <span className="text-primary font-semibold">acolhimento</span>,
                        crescimento e propósito para todas as mulheres.
                    </span>
                }
            />

            <MissionSection
                subtitle="Nossa Missão Elas"
                title={
                    <span>
                        Mulheres <span className="text-primary">florescendo</span> no
                        propósito de Deus
                    </span>
                }
                description="O Ministério Elas da Seara de Deus é um espaço dedicado ao florescimento da mulher cristã. Nossa missão é promover o fortalecimento espiritual, emocional e social das mulheres, através de ensinos bíblicos relevantes, comunhão genuína e serviço ao Reino, formando uma comunidade de mulheres que transformam seu ambiente com a graça de Deus."
                values={missionValues}
            />

            <ActivitiesSection
                subtitle="Nossos Momentos"
                title="Encontros & <span className='text-primary'>Comunhão</span>"
                description="Momentos pensados para que cada mulher se sinta amada, valorizada e equipada para sua jornada."
                activities={activities}
            />

            <JoinSection
                subtitle="Faça Parte"
                title={
                    <span>
                        Você é nossa <span className="text-primary">Convidada!</span>
                    </span>
                }
                description="Junte-se a nós nesta caminhada de fé e amizade. Há um lugar especial guardado para você em nosso ministério."
                infoItems={[
                    {
                        icon: <Users className="w-5 h-5 text-primary" />,
                        label: "Liderança: Equipe Elas",
                    },
                    {
                        icon: <Mail className="w-5 h-5 text-primary" />,
                        label: "elas@searadeus.com",
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
