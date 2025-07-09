import { contentfulClient } from "./contentful";

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
    curriculum: item.fields.curriculum,
    duration: item.fields.duration,
    targetAudience: item.fields.targetAudience,
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
