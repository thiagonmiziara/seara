import { contentfulClient } from "@/lib/contentful";
import { Asset } from "contentful";

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
