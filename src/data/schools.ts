import { CarouselItem, ISchoolDetail } from "@/types";
import { BLOCKS, Document } from "@contentful/rich-text-types";

const createDocument = (text: string): Document => ({
    nodeType: BLOCKS.DOCUMENT,
    data: {},
    content: [
        {
            nodeType: BLOCKS.PARAGRAPH,
            data: {},
            content: [
                {
                    nodeType: "text",
                    value: text,
                    marks: [],
                    data: {},
                },
            ],
        },
    ],
});

export const schoolsData: (CarouselItem & { fullDescription: Document; curriculum: string[]; duration: string; targetAudience: string })[] = [
    {
        id: "escola-lideres",
        slug: "escola-de-lideres",
        name: "Escola de Líderes",
        imageUrl: "/assets/escoladelideres.PNG",
        logoUrl: "/assets/escoladelideres.PNG",
        description: createDocument("Capacitação e formação de líderes para o Reino de Deus."),
        fullDescription: createDocument(
            "A Escola de Líderes é um programa intensivo de treinamento voltado para o desenvolvimento de liderança bíblica e ministerial. Nosso objetivo é equipar cristãos para servir com excelência em suas comunidades e ministérios."
        ),
        curriculum: [
            "Liderança Serva",
            "Fundamentos Bíblicos",
            "Gestão de Ministérios",
            "Ética e Caráter Cristão",
            "Evangelismo Estratégico",
        ],
        duration: "10 meses",
        targetAudience: "Líderes e futuros líderes da igreja",
    },
    {
        id: "fundacao-biblica",
        slug: "fundacao-biblica",
        name: "Fundação Bíblica",
        imageUrl: "/assets/fundacao.png",
        logoUrl: "/assets/fundacao.png",
        description: createDocument("Alicerce sólido na Palavra de Deus para uma vida cristã vitoriosa."),
        fullDescription: createDocument(
            "A Escola de Fundação Bíblica oferece um ensino profundo e sistemático das doutrinas fundamentais da fé cristã. Ideal para quem deseja fortalecer sua base teológica e crescer no conhecimento da Palavra."
        ),
        curriculum: [
            "Doutrinas Fundamentais",
            "História do Cristianismo",
            "Hermeneutica Básica",
            "Vida de Oração",
            "Maturidade Cristã",
        ],
        duration: "12 meses",
        targetAudience: "Novos convertidos e membros que desejam aprofundamento",
    },
];
