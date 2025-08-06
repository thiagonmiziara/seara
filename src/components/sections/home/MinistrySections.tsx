import MinistrySection from "@/components/MinistrySection";
import { getMinistries } from "@/services/get-ministries";

export const revalidate = 60; // Revalidate at most every 60 seconds

export default async function MinistrySections() {
  const ministries = await getMinistries();

  if (!ministries) {
    return null;
  }

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
