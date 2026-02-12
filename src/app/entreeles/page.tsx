import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { JoinSection } from "@/components/sections/JoinSection";
import {
    Heart,
    Users,
    BookOpen,
    Coffee,
    Dumbbell,
    Shield,
    Mail,
    Instagram,
    MessageCircle,
} from "lucide-react";

export const revalidate = 60;

export default function EntreElesPage() {
    const activities = [
        {
            icon: Coffee,
            title: "Café da Manhã Masculino",
            description: "Comunhão, partilha e fortalecimento entre irmãos",
            schedule: "Sábados (mensal) às 08:00",
            highlight: true,
        },
        {
            icon: BookOpen,
            title: "Estudo Bíblico",
            description: "Aprofundamento na Palavra com foco masculino",
            schedule: "Quintas-feiras às 20:00",
            highlight: false,
        },
        {
            icon: Dumbbell,
            title: "Esportes e Comunhão",
            description: "Atividades esportivas e momentos de fraternidade",
            schedule: "Sábados às 16:00",
            highlight: false,
        },
        {
            icon: Shield,
            title: "Retiro de Homens",
            description: "Encontro anual de renovação espiritual",
            schedule: "Anual",
            highlight: true,
        },
    ];

    const missionValues = [
        {
            icon: Shield,
            title: "Integridade",
            description:
                "Formar homens íntegros, que vivem de acordo com os princípios de Deus em todas as áreas da vida.",
        },
        {
            icon: Heart,
            title: "Paternidade",
            description:
                "Capacitar homens a serem pais presentes, amorosos e exemplos de fé para suas famílias.",
        },
        {
            icon: Users,
            title: "Irmandade",
            description:
                "Criar uma comunidade de homens que se apoiam, desafiam e crescem juntos na fé.",
        },
    ];

    const socialLinks = [
        {
            icon: <Instagram className="w-10 h-10 text-primary mb-4" />,
            title: "Instagram",
            description: "@entreeles.seara",
            href: "https://www.instagram.com/searadeus",
        },
        {
            icon: <MessageCircle className="w-10 h-10 text-primary mb-4" />,
            title: "WhatsApp",
            description: "Grupo Entre Eles",
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
                backgroundLetters={["E", "E"]}
                title={
                    <span className="text-primary tracking-tighter">ENTRE ELES</span>
                }
                showBackButton={true}
                backButtonText="Página Inicial"
                description={
                    <span>
                        Formando homens de <span className="text-primary font-semibold">Deus</span>,
                        fortes na fé e líderes em seus lares.
                    </span>
                }
            />

            <MissionSection
                subtitle="Nossa Missão Entre Eles"
                title={
                    <span>
                        Homens <span className="text-primary">íntegros</span> no
                        caráter de Cristo
                    </span>
                }
                description="O Ministério Entre Eles da Seara de Deus é dedicado a formar homens segundo o coração de Deus. Nossa missão é criar um espaço onde homens possam crescer espiritualmente, desenvolver relacionamentos genuínos, e serem equipados para liderar suas famílias e influenciar a sociedade com os valores do Reino."
                values={missionValues}
            />

            <ActivitiesSection
                subtitle="Nossos Encontros"
                title="Atividades & <span className='text-primary'>Comunhão</span>"
                description="Momentos pensados para fortalecer a fé e a irmandade entre os homens."
                activities={activities}
            />

            <JoinSection
                subtitle="Faça Parte"
                title={
                    <span>
                        Junte-se aos <span className="text-primary">Irmãos!</span>
                    </span>
                }
                description="Venha fazer parte desta irmandade de homens comprometidos com Deus e suas famílias."
                infoItems={[
                    {
                        icon: <Users className="w-5 h-5 text-primary" />,
                        label: "Liderança: Equipe Entre Eles",
                    },
                    {
                        icon: <Mail className="w-5 h-5 text-primary" />,
                        label: "entreeles@searadeus.com",
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
