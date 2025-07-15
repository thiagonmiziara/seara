import MinistrySection from "@/components/MinistrySection";
import { getMinistries } from "@/services/contentfulHttp";
import { IMinistrySections } from "@/types";

export default async function MinistrySections() {
  const ministries: IMinistrySections[] | null = await getMinistries();

  return (
    <>
      {ministries?.map((item, index) => (
        <MinistrySection
          key={item.slug + index}
          data={item}
          reverse={index % 2 === 1}
        />
      ))}
    </>
  );
}
