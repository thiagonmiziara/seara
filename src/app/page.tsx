import CommunitiesCarousel from '@/components/sections/home/CommunitiesCarousel';
import SchoolsCarousel from '@/components/sections/home/SchoolsCarousel';
import MeetingsCarousel from '@/components/sections/home/MeetingsCarousel';
import ServiceTimes from '@/components/sections/home/ServiceTimes';
import SearaHighlights from '@/components/sections/home/SearaHighlights';
import MissionDiaryPreview from '@/components/sections/home/MissionDiaryPreview';
import MinistrySections from '@/components/sections/home/MinistrySections';
import LocationMap from '@/components/sections/home/LocationMap';
import AdditionalFeaturesPreview from '@/components/sections/home/AdditionalFeaturesPreview';
import MainBanner from '@/components/sections/home/MainBanner';

export default function HomePage() {
  return (
    <>
      <MainBanner />
      <CommunitiesCarousel />
      <MeetingsCarousel />
      <SearaHighlights />
      {/* <MissionDiaryPreview /> */}
      <MinistrySections />
      <SchoolsCarousel />
      <AdditionalFeaturesPreview />
      <ServiceTimes />
      <LocationMap />
    </>
  );
}
