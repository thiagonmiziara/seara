import { contentfulClient } from "@/lib/contentful";
import { ILatestSermon } from "@/types";
import { Asset } from "contentful";

export async function getLatestSermon(): Promise<ILatestSermon | null> {
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
