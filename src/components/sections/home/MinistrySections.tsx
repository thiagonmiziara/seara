import MinistrySection from '@/components/MinistrySection';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { ministriesData } from '@/data/ministries';

export default function MinistrySections() {
  return (
    <SectionWrapper
      title='Ministérios'
      subtitle='Conheca os ministerios e encontre um lugar para crescer e servir.'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {ministriesData.map((item, index) => (
          <MinistrySection key={item.slug + index} data={item} />
        ))}
      </div>
    </SectionWrapper>
  );
}
