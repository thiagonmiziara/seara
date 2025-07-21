import { contentfulClient } from "@/lib/contentful";
import { IMainBannerData } from "@/types";

export async function getMainBanner(): Promise<IMainBannerData | null> {
  const entries = await contentfulClient.getEntries({
    content_type: "bannerPrincipal",
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
