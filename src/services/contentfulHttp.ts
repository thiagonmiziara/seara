import { contentfulClient } from "@/lib/contentful";
import {
  IDevotional,
  IMissionDetails,
  IMissionDiaryEntry,
  IMissionItem,
} from "@/types";
import { Asset } from "contentful";
import { Document } from "@contentful/rich-text-types";

export async function getAllNews() {
  const entries = await contentfulClient.getEntries({
    content_type: "noticias",
  });

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    title: item.fields.title,
    summary: item.fields.summary,
    imageUrl: item.fields.image?.fields?.file?.url
      ? `https:${item.fields.image.fields.file.url}`
      : "",
    date: item.fields.date,
    slug: item.fields.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function getMissionDiaryEntryBySlug(
  slug: string
): Promise<IMissionDiaryEntry | null> {
  const entries = await contentfulClient.getEntries({
    content_type: "diarioDeMissoesCard",
    "fields.slug": slug,
    limit: 1,
    include: 1,
  });

  const item = entries.items[0];
  if (!item) return null;

  const fields = item.fields;
  const imageAsset = fields.imageUrl as Asset;
  const qrCodePixUrlAsset = fields.qrCodePixUrl as Asset;

  return {
    id: item.sys.id,
    slug: String(fields.slug ?? ""),
    title: String(fields.title ?? ""),
    date: String(fields.date ?? ""),
    missionaryName: String(fields.missionaryName ?? ""),
    content: fields.content as Document,
    imageUrl: imageAsset?.fields?.file?.url
      ? `https:${imageAsset.fields.file.url}`
      : "",
    qrCodePixUrl: qrCodePixUrlAsset?.fields?.file?.url
      ? `https:${qrCodePixUrlAsset.fields.file.url}`
      : "",
    account: String(fields.account ?? ""),
    agency: String(fields.agency ?? ""),
    bankName: String(fields.bankName ?? ""),
    beneficiary: String(fields.beneficiary ?? ""),
    pixKey: String(fields.pixKey ?? ""),
    donationSubtitle: String(fields.donationSubtitle ?? ""),
    donationTitle: String(fields.donationTitle ?? ""),
    cnpj: String(fields.cnpj ?? ""),
  };
}

export async function getNewsItemBySlug(slug: string) {
  const entries = await contentfulClient.getEntries({
    content_type: "noticias",
    "fields.title[match]": slug.replace(/-/g, " "),
    limit: 1,
  });

  const item = entries.items[0] as any;

  if (!item) {
    return null;
  }

  return {
    id: item.sys.id,
    title: item.fields.title,
    summary: item.fields.summary,
    imageUrl: item.fields.image?.fields?.file?.url
      ? `https:${item.fields.image.fields.file.url}`
      : "",
    date: item.fields.date,
    slug: item.fields.title.toLowerCase().replace(/\s+/g, "-"),
    content: item.fields.content, // Include full content
  };
}

export async function getLatestNews() {
  const entries = await contentfulClient.getEntries({
    content_type: "noticias",
    order: ["-fields.date"], // Order by date descending
    limit: 1, // Get only the latest one
  });

  const item = entries.items[0] as any;

  if (!item) {
    return null;
  }

  return {
    id: item.sys.id,
    title: item.fields.title,
    summary: item.fields.summary,
    imageUrl: item.fields.image?.fields?.file?.url
      ? `https:${item.fields.image.fields.file.url}`
      : "",
    date: item.fields.date,
    slug: item.fields.title.toLowerCase().replace(/\s+/g, "-"),
    content: item.fields.content,
  };
}

export async function getMainBanner() {
  const entries = await contentfulClient.getEntries({
    content_type: "mainBanner",
    limit: 1,
  });

  const item = entries.items[0] as any;

  if (!item) return null;

  return {
    id: item.sys.id,
    title: item.fields.title,
    backgroundImageUrl: item.fields.backgroundImage?.fields?.file?.url
      ? `https:${item.fields.backgroundImage.fields.file.url}`
      : "",
    vision: item.fields.vision,
    purpose: item.fields.purpose,
    buttonText: item.fields.buttonText,
    buttonLink: item.fields.buttonLink,
    logoUrl: item.fields.logoImage?.fields?.file?.url
      ? `https:${item.fields.logoImage.fields.file.url}`
      : "",
  };
}

export async function getCommunities() {
  const entries = await contentfulClient.getEntries({
    content_type: "comunidades",
  });

  if (!entries.items || entries.items.length === 0) {
    return [];
  }

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    slug: item.fields.slug,
    name: item.fields.name,
    imageUrl: item.fields.imageUrl?.fields?.file?.url
      ? `https:${item.fields.imageUrl.fields.file.url}`
      : "",
    description: item.fields.description,
  }));
}

export async function getSchoolDetailBySlug(slug: string) {
  const entries = await contentfulClient.getEntries({
    content_type: "detalhesDaEscola",
    "fields.slug": slug,
    limit: 1,
  });

  const item = entries.items[0] as any;

  if (!item) {
    return null;
  }

  return {
    id: item.sys.id,
    name: item.fields.name,
    slug: item.fields.slug,
    imageUrl: item.fields.imageUrl?.fields?.file?.url
      ? `https:${item.fields.imageUrl.fields.file.url}`
      : "",
    description: item.fields.description,
    fullDescription: item.fields.fullDescription,
  };
}

export async function getCommunityDetailBySlug(slug: string) {
  const entries = await contentfulClient.getEntries({
    content_type: "detalhesDaComunidade",
    "fields.slug": slug,
    limit: 1,
  });

  const item = entries.items[0] as any;

  if (!item) {
    return null;
  }

  return {
    id: item.sys.id,
    name: item.fields.name,
    slug: item.fields.slug,
    imageUrl: item.fields.imageUrl?.fields?.file?.url
      ? `https:${item.fields.imageUrl.fields.file.url}`
      : "",
    description: item.fields.description,
    fullDescription: item.fields.fullDescription,
    address: item.fields.address,
    meetingTimes: item.fields.meetingTimes,
    leader: item.fields.leader,
  };
}

export async function getAllSchools() {
  const entries = await contentfulClient.getEntries({
    content_type: "escolas",
  });

  if (!entries.items || entries.items.length === 0) {
    return [];
  }

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    slug: item.fields.slug,
    name: item.fields.name,
    logoUrl: item.fields.logoUrl?.fields?.file?.url
      ? `https:${item.fields.logoUrl.fields.file.url}`
      : "",
    imageUrl: item.fields.imageUrl?.fields?.file?.url
      ? `https:${item.fields.imageUrl.fields.file.url}`
      : "",
    description: item.fields.description,
  }));
}

export async function getMeetings() {
  const entries = await contentfulClient.getEntries({
    content_type: "cultosEEncontros",
  });

  if (!entries.items || entries.items.length === 0) {
    return [];
  }

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    slug: item.fields.slug,
    name: item.fields.name,
    imageUrl: item.fields.imageUrl?.fields?.file?.url
      ? `https:${item.fields.imageUrl.fields.file.url}`
      : "",
    description: item.fields.description,
  }));
}

export async function getMeetingsDetailBySlug(slug: string) {
  const entries = await contentfulClient.getEntries({
    content_type: "detalhesCultosEEncontros",
    "fields.slug": slug,
    limit: 1,
  });

  const item = entries.items[0] as any;

  if (!item) {
    return null;
  }

  return {
    id: item.sys.id,
    name: item.fields.name,
    slug: item.fields.slug,
    imageUrl: item.fields.imageUrl?.fields?.file?.url
      ? `https:${item.fields.imageUrl.fields.file.url}`
      : "",
    description: item.fields.description,
    fullDescription: item.fields.fullDescription,
    schedule: item.fields.schedule,
    location: item.fields.location,
    contactPerson: item.fields.contactPerson,
  };
}

export async function getLatestSermon() {
  const entries = await contentfulClient.getEntries({
    content_type: "ultimaPregacao",
  });

  if (!entries?.items?.length) return null;

  const item = entries.items[0].fields;
  const imageAsset = item.imageUrl as Asset;

  return {
    title: String(item.title ?? ""),
    preacher: String(item.preacher ?? ""),
    imageUrl: imageAsset?.fields?.file?.url
      ? `https:${imageAsset.fields.file.url}`
      : "",
    podcastUrl: String(item.podcastUrl ?? ""),
  };
}

export async function getMinistries() {
  const entries = await contentfulClient.getEntries({
    content_type: "ministerios",
  });

  if (!entries.items || entries.items.length === 0) {
    return [];
  }

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    slug: item.fields.slug,
    name: item.fields.name,
    imageUrl: item.fields.imageUrl?.fields?.file?.url
      ? `https:${item.fields.imageUrl.fields.file.url}`
      : "",
    description: item.fields.description,
  }));
}

export async function getMinistryDetailBySlug(slug: string) {
  const entries = await contentfulClient.getEntries({
    content_type: "detalhesMinisterios",
    "fields.slug": slug,
    limit: 1,
  });

  const item = entries.items[0] as any;

  if (!item) {
    return null;
  }

  return {
    id: item.sys.id,
    name: item.fields.name,
    slug: item.fields.slug,
    imageUrl: item.fields.imageUrl?.fields?.file?.url
      ? `https:${item.fields.imageUrl.fields.file.url}`
      : "",
    description: item.fields.description,
    fullDescription: item.fields.fullDescription,
  };
}

export async function getProducts() {
  const entries = await contentfulClient.getEntries({
    content_type: "produtosDaLoja",
  });

  if (!entries.items || entries.items.length === 0) {
    return [];
  }

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    name: item.fields.name,
    imageUrls: item.fields.imageUrl
      ?.map((asset: Asset) =>
        asset.fields.file?.url ? `https:${asset.fields.file.url}` : ""
      )
      .filter(Boolean),
    price: item.fields.price,
    phoneNumber: item.fields.phoneNumber,
  }));
}

export async function getKidsDetails() {
  const entries = await contentfulClient.getEntries({
    content_type: "kidsDetalhes",
    limit: 1,
  });

  if (!entries.items || entries.items.length === 0) {
    return null;
  }

  const item = entries.items[0] as any;

  return {
    id: item.sys.id,
    name: item.fields.name,
    imageUrl: item.fields.bannerUrl?.fields?.file?.url
      ? `https:${item.fields.bannerUrl.fields.file.url}`
      : "",
    description: item.fields.description,
    vision: item.fields.vision,
    ageGroups:
      item.fields.ageGroups?.map((group: any) => ({
        name: group.fields.name,
        description: group.fields.description,
      })) || [],
    leader: item.fields.leader,
    contact: item.fields.contact,
  };
}

export async function getYoungDetails() {
  const entries = await contentfulClient.getEntries({
    content_type: "jovemDetalhes",
    limit: 1,
  });

  if (!entries.items || entries.items.length === 0) {
    return null;
  }

  const item = entries.items[0] as any;

  return {
    id: item.sys.id,
    name: item.fields.name,
    imageUrl: item.fields.imageUrl?.fields?.file?.url
      ? `https:${item.fields.imageUrl.fields.file.url}`
      : "",
    description: item.fields.description,
    mission: item.fields.mission,
    activities:
      item.fields.activities?.map((group: any) => ({
        name: group.fields.name,
        description: group.fields.description,
      })) || [],
    leader: item.fields.leader,
    contact: item.fields.contact,
  };
}

export async function getServiceProviders() {
  const entries = await contentfulClient.getEntries({
    content_type: "prestadoresDeServico",
  });

  if (!entries.items || entries.items.length === 0) {
    return null;
  }

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    name: item.fields.name,
    contact: item.fields.contact,
    description: item.fields.description,
    serviceType: item.fields.serviceType,
    approved: item.fields.approved,
  }));
}

export async function getPsychologicalSupport() {
  const entries = await contentfulClient.getEntries({
    content_type: "apoioPsicologico",
  });

  if (!entries.items || entries.items.length === 0) {
    return null;
  }

  const item = entries.items[0] as any;

  return {
    id: item.sys.id,
    name: item.fields.name ?? "",
    title: item.fields.title ?? "",
    imageUrl: item.fields.imageUrl?.fields?.file?.url
      ? `https:${item.fields.imageUrl.fields.file.url}`
      : "",
    bio: item.fields.bio ?? "",
    services: item.fields.services ?? [],
    phone: item.fields.phone ?? "",
    email: item.fields.email ?? "",
    address: item.fields.address ?? "",
    description: item.fields.description ?? "",
  };
}

export async function getDevotionals(): Promise<IDevotional[] | null> {
  const entries = await contentfulClient.getEntries({
    content_type: "devocional",
    select: [
      "sys.id",
      "fields.title",
      "fields.date",
      "fields.preview",
      "fields.content",
    ],
    order: ["-fields.date"],
  });

  if (!entries.items || entries.items.length === 0) {
    return null;
  }

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    title: item.fields.title ?? "",
    date: item.fields.date ?? "",
    preview: item.fields.preview ?? "",
    content: item.fields.content ?? null,
  }));
}

export async function getMissions(): Promise<IMissionItem[] | null> {
  const entries = await contentfulClient.getEntries({
    content_type: "missoes",
  });

  if (!entries.items || entries.items.length === 0) {
    return null;
  }

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    slug: item.fields.slug ?? "",
    title: item.fields.title ?? "",
    description: item.fields.description ?? "",
    imageUrl: item.fields.imageUrl?.fields?.file?.url
      ? `https:${item.fields.imageUrl.fields.file.url}`
      : "",
    qrCodeUrl: item.fields.qrCodeUrl?.fields?.file?.url
      ? `https:${item.fields.qrCodeUrl.fields.file.url}`
      : "",
  }));
}

export async function getMissionDetailsBySlug(
  slug: string
): Promise<IMissionDetails | null> {
  const entries = await contentfulClient.getEntries({
    content_type: "detalhesMissao",
    "fields.slug": slug,
    limit: 1,
    include: 1,
  });

  const item = entries.items[0];
  if (!item) return null;

  const fields = item.fields;
  const imageAsset = fields.imageUrl as Asset;
  const qrCodeAsset = fields.qrCodeUrl as Asset;
  const qrCodePixUrlAsset = fields.qrCodePixUrl as Asset;

  return {
    id: item.sys.id,
    slug: String(fields.slug ?? ""),
    title: String(fields.title ?? ""),
    imageUrl: imageAsset?.fields?.file?.url
      ? `https:${imageAsset.fields.file.url}`
      : "",
    description: String(fields.description ?? ""),
    fullDetails: fields.fullDetails as Document,
    objectives: (fields.objectives as string[]) ?? [],
    howToHelp: (fields.howToHelp as string[]) ?? [],
    qrCodeUrl: qrCodeAsset?.fields?.file?.url
      ? `https:${qrCodeAsset.fields.file.url}`
      : "",
  };
}

export async function getDailyMissionsMissionsCard(): Promise<
  IMissionDiaryEntry[] | null
> {
  const entries = await contentfulClient.getEntries({
    content_type: "diarioDeMissoesCard",
  });

  if (!entries.items || entries.items.length === 0) {
    return null;
  }

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    slug: item.fields.slug ?? "",
    title: item.fields.title ?? "",
    date: item.fields.date ?? "",
    missionaryName: item.fields.missionaryName ?? "",
    content: item.fields.content ?? "",
    imageUrl: item.fields.imageUrl?.fields?.file?.url
      ? `https:${item.fields.imageUrl.fields.file.url}`
      : "",
    qrCodePixUrl: item.fields.qrCodePixUrl?.fields?.file?.url
      ? `https:${item.fields.qrCodePixUrl.fields.file.url}`
      : "",
    account: String(item.fields.account ?? ""),
    agency: String(item.fields.agency ?? ""),
    bankName: String(item.fields.bankName ?? ""),
    beneficiary: String(item.fields.beneficiary ?? ""),
    pixKey: String(item.fields.pixKey ?? ""),
    donationSubtitle: String(item.fields.donationSubtitle ?? ""),
    donationTitle: String(item.fields.donationTitle ?? ""),
    cnpj: String(item.fields.cnpj ?? ""),
  }));
}
