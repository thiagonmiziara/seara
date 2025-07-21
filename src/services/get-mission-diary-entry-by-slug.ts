import { contentfulClient } from "@/lib/contentful";
import { IMissionDiaryEntry } from "@/types";
import { Asset } from "contentful";
import { Document } from "@contentful/rich-text-types";

export async function getMissionDiaryEntryBySlug(
  slug: string
): Promise<IMissionDiaryEntry | null> {
  const entries = await contentfulClient.getEntries({
    content_type: "diarioDeMissoes",
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
