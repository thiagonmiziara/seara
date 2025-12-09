import SectionWrapper from "@/components/shared/SectionWrapper";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import { getYoungDetails } from "@/services/get-young-details";
import { ActivitiesSection } from "./compponents/activities-section";
import { HeroSection } from "./compponents/hero-section";
import { MissionSection } from "./compponents/mission-section";
import { JoinSection } from "./compponents/join-section";

export const revalidate = 60; // Revalidate at most every 60 seconds

export default async function JovemPage() {
  const youngData = await getYoungDetails();

  if (!youngData) {
    return null;
  }

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <MissionSection />
      <ActivitiesSection />
      <JoinSection />
    </main>
  );
}
