import { contentfulClient } from "@/lib/contentful";
import { IMissionDiaryEntry } from "@/types";

export async function getDailyMissionsMissionsCard(): Promise<
  IMissionDiaryEntry[] | null
> {
  const entries = await contentfulClient.getEntries({
    content_type: "diarioDeMissoes",
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
