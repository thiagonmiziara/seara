import { notFound } from "next/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { JoinSection } from "@/components/sections/JoinSection";
import { schoolsData } from "@/data/schools";
import RichTextRenderer from "@/lib/richTextRenderer";
import {
    BookOpen,
    Users,
    Target,
    Clock,
    GraduationCap,
    Shield,
    Instagram,
    MessageCircle,
    Mail,
    Users2,
} from "lucide-react";

export async function generateStaticParams() {
    return schoolsData.map((school) => ({
        slug: school.slug,
    }));
}

export default async function SchoolPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const school = schoolsData.find((s) => s.slug === slug);

    if (!school) {
        notFound();
    }

    // Map curriculum to MissionSection values
    const missionValues = school.curriculum.slice(0, 3).map((item, idx) => ({
        icon: [Target, Shield, BookOpen][idx % 3],
        title: item,
        description: `Aprofundamento e aplicação prática dos princípios de ${item.toLowerCase()}.`,
    }));

    // Map more info to ActivitiesSection
    const activities = [
        {
            icon: Clock,
            title: "Duração",
            description: `Programa intensivo com duração total de ${school.duration}.`,
            schedule: "Consulte horários",
            highlight: true,
        },
        {
            icon: Users,
            title: "Público Alvo",
            description: school.targetAudience,
            schedule: "Inscrições abertas",
            highlight: false,
        },
        {
            icon: GraduationCap,
            title: "Certificação",
            description: "Certificado de conclusão reconhecido pela Igreja Seara de Deus.",
            schedule: "Ao final do curso",
            highlight: false,
        },
    ];

    const socialLinks = [
        {
            icon: <Instagram className="w-10 h-10 text-primary mb-4" />,
            title: "Instagram",
            description: "@searadeus",
            href: "https://www.instagram.com/searadeus",
        },
        {
            icon: <MessageCircle className="w-10 h-10 text-primary mb-4" />,
            title: "WhatsApp",
            description: "Informações e Inscrições",
            href: "#",
        },
    ];

    const locationIcon = (
        <div className="p-3 bg-primary/10 rounded-xl">
            <GraduationCap className="w-6 h-6 text-primary" />
        </div>
    );

    return (
        <main className="min-h-screen bg-background text-foreground">
            <HeroSection
                backgroundLetters={
                    school.name === "Escola de Líderes" ? ["E", "L"] : ["F", "B"]
                }
                title={<span className="text-primary">{school.name.toUpperCase()}</span>}
                showBackButton={true}
                backButtonText="Página Inicial"
                description={
                    <div className="text-balance">
                        <RichTextRenderer document={school.description} />
                    </div>
                }
            />

            <MissionSection
                subtitle="Sobre a Escola"
                title={
                    <span>
                        {school.name} <span className="text-primary">Seara de Deus</span>
                    </span>
                }
                description={
                    <div className="text-balance">
                        <RichTextRenderer document={school.fullDescription} />
                    </div>
                }
                values={missionValues}
            />

            <ActivitiesSection
                subtitle="Detalhes do Curso"
                title="Informações & <span className='text-primary'>Cronograma</span>"
                description="Tudo o que você precisa saber para iniciar sua jornada de aprendizado."
                activities={activities}
            />

            <JoinSection
                subtitle="Inscrições"
                title={
                    <span>
                        Invista no seu <span className="text-primary">Chamado!</span>
                    </span>
                }
                description="Não perca a oportunidade de crescer e se capacitar. Nossas escolas estão com inscrições abertas para novas turmas."
                infoItems={[
                    {
                        icon: <Users2 className="w-5 h-5 text-primary" />,
                        label: "Vagas Limitadas",
                    },
                    {
                        icon: <Mail className="w-5 h-5 text-primary" />,
                        label: "escolas@searadeus.com",
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
