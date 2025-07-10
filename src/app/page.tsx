import ClientOnlyMainBannerWrapper from "@/components/sections/home/ClientOnlyMainBannerWrapper";
import CommunitiesCarousel from "@/components/sections/home/CommunitiesCarousel";
import SchoolsCarousel from "@/components/sections/home/SchoolsCarousel";
import MeetingsCarousel from "@/components/sections/home/MeetingsCarousel";
import ServiceTimes from "@/components/sections/home/ServiceTimes";
import LatestSermon from "@/components/sections/home/LatestSermon";
import SearaNewsPreview from "@/components/sections/home/SearaNewsPreview";
import MissionDiaryPreview from "@/components/sections/home/MissionDiaryPreview";
import YouthAndKidsSections from "@/components/sections/home/YouthAndKidsSections";
import LocationMap from "@/components/sections/home/LocationMap";
import StorePreview from "@/components/sections/home/StorePreview";
import AdditionalFeaturesPreview from "@/components/sections/home/AdditionalFeaturesPreview";

export default function HomePage() {
  return (
    <>
      <ClientOnlyMainBannerWrapper />
      <CommunitiesCarousel />
      <MeetingsCarousel />
      <LatestSermon />
      <SearaNewsPreview />
      <MissionDiaryPreview />
      <YouthAndKidsSections />
      <StorePreview />
      <SchoolsCarousel />
      <AdditionalFeaturesPreview />
      <ServiceTimes />
      <LocationMap />
    </>
  );
}
