import MinistrySection from "@/components/MinistrySection";
import { getMinistries } from "@/services/get-ministries";

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
