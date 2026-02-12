import { IMainBannerData } from "@/types";
import { Document, BLOCKS } from "@contentful/rich-text-types";

// Helper to create a simple rich text document
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

export const mainBannerData: IMainBannerData = {
    id: "local-banner",
    title: "Igreja Seara de Deus",
    imageUrl: "/assets/searasedeigreja.png",
    vision: createDocument(
        "Ser uma igreja relevante, que transforma vidas através do amor de Cristo e impacta gerações."
    ),
    purpose: createDocument(
        "Conectar pessoas a Deus, edificar vidas em Cristo e servir ao próximo com excelência."
    ),
    buttonText: "Conheça Mais",
    buttonLink: "/sobre",
    logoUrl: "/assets/logo.png",
};
