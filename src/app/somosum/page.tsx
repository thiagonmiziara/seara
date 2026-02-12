import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { JoinSection } from "@/components/sections/JoinSection";
import {
    Heart,
    Users,
    BookOpen,
    HandHeart,
    Globe,
    Sparkles,
    Mail,
    Instagram,
    MessageCircle,
} from "lucide-react";

export const revalidate = 60;

export default function SomosUmPage() {
    const activities = [
        {
            icon: HandHeart,
            title: "Ações Sociais",
            description: "Projetos de impacto social na comunidade",
            schedule: "Mensal",
            highlight: true,
        },
        {
            icon: BookOpen,
            title: "Grupos de Comunhão",
            description: "Encontros para fortalecer a unidade do corpo",
            schedule: "Semanalmente",
            highlight: false,
        },
        {
            icon: Globe,
            title: "Eventos de Integração",
            description: "Celebrações que unem toda a igreja",
            schedule: "Trimestral",
            highlight: false,
        },
        {
            icon: Sparkles,
            title: "Cultos de Unidade",
            description: "Momentos especiais de adoração conjunta",
            schedule: "Mensal",
            highlight: true,
        },
    ];

    const missionValues = [
        {
            icon: Heart,
            title: "Amor",
            description:
                "Cultivar o amor genuíno entre os irmãos, refletindo o amor de Cristo em nossas relações.",
        },
        {
            icon: Users,
            title: "Unidade",
            description:
                "Promover a unidade do corpo de Cristo, superando diferenças e celebrando a diversidade.",
        },
        {
            icon: HandHeart,
            title: "Serviço",
            description:
                "Servir uns aos outros e à comunidade, demonstrando o amor de Deus através de ações práticas.",
        },
    ];

    const socialLinks = [
        {
            icon: <Instagram className="w-10 h-10 text-primary mb-4" />,
            title: "Instagram",
            description: "@somosum.seara",
            href: "https://www.instagram.com/searadeus",
        },
        {
            icon: <MessageCircle className="w-10 h-10 text-primary mb-4" />,
            title: "WhatsApp",
            description: "Grupo Somos Um",
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
                backgroundLetters={["S", "U"]}
                title={
                    <span className="text-primary tracking-tighter">SOMOS UM</span>
                }
                showBackButton={true}
                backButtonText="Página Inicial"
                description={
                    <span>
                        Celebrando a <span className="text-primary font-semibold">unidade</span>
                        do corpo de Cristo, vivendo em comunhão e amor.
                    </span>
                }
            />

            <MissionSection
                subtitle="Nossa Missão"
                title={
                    <span>
                        Unidos em <span className="text-primary">Cristo</span>,
                        servindo ao mundo
                    </span>
                }
                description="O Ministério Somos Um da Seara de Deus promove a unidade do corpo de Cristo através da comunhão, do serviço mútuo e do amor prático. Acreditamos que quando vivemos em unidade, o poder de Deus se manifesta de forma extraordinária, transformando vidas e impactando nossa comunidade."
                values={missionValues}
            />

            <ActivitiesSection
                subtitle="Nossas Atividades"
                title="Projetos & <span className='text-primary'>Iniciativas</span>"
                description="Ações que promovem a unidade e o amor entre os irmãos e na comunidade."
                activities={activities}
            />

            <JoinSection
                subtitle="Participe"
                title={
                    <span>
                        Juntos somos <span className="text-primary">Mais Fortes!</span>
                    </span>
                }
                description="Venha fazer parte desta família unida em Cristo. Juntos podemos fazer a diferença!"
                infoItems={[
                    {
                        icon: <Users className="w-5 h-5 text-primary" />,
                        label: "Liderança: Equipe Somos Um",
                    },
                    {
                        icon: <Mail className="w-5 h-5 text-primary" />,
                        label: "somosum@searadeus.com",
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
