import { contentfulClient } from "@/lib/contentful";
import { ILatestSermon } from "@/types";
import { Asset } from "contentful";

export async function getLatestSermon(): Promise<ILatestSermon | null> {
  const entries = await contentfulClient.getEntries({
    content_type: "ultimaPregacao",
  });

  if (!entries?.items?.length) return null;

  const item = entries.items[0]; // Get the full item to access sys.updatedAt

  const imageAsset = item.fields.imageUrl as Asset;

  return {
    title: String(item.fields.title ?? ""),
    preacher: String(item.fields.preacher ?? ""),
    imageUrl: imageAsset?.fields?.file?.url
      ? `https:${imageAsset.fields.file.url}?v=${new Date(
        item.sys.updatedAt
      ).getTime()}`
      : "",
    podcastUrl: String(item.fields.podcastUrl ?? ""),
  };
}
