import { getMinistries } from "@/lib/contentfulHttp";
import MinistrySection from "@/components/MinistrySection";

interface IMinistrySections {
  slug: string;
  name: string;
  imageUrl: string;
  description: string;
}

export default async function MinistrySections() {
  const ministries: IMinistrySections[] | null = await getMinistries();

  return (
    <>
      {ministries.map((item, index) => (
        <MinistrySection
          key={item.slug + index}
          data={item}
          reverse={index % 2 === 1}
        />
      ))}
    </>
  );
}
