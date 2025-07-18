"use client";

import React, { useEffect, useState } from "react";
import { MissionDiaryEntryCard } from "./MissionDiaryEntry";
import { IMissionDiaryEntry } from "@/types";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Skeleton } from "@/components/ui/skeleton";
import EmptyState from "@/components/shared/EmptyState";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HorizontalScrollContainer } from "@/components/shared/HorizontalScrollContainer";

export const MissionDiaryContainer: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState<IMissionDiaryEntry[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMissionDiaryEntries = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          "/api/contentful?type=serviceDailyMissionsCard"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: IMissionDiaryEntry[] = await response.json();
        setEntries(data);
      } catch (err) {
        console.error("Failed to fetch mission diary entries:", err);
        setError("Failed to load mission diary entries.");
        setEntries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMissionDiaryEntries();
  }, []);

  if (loading) {
    return (
      <SectionWrapper title='Diário de Missões'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[...Array(3)].map((_, index) => (
            <Card key={index} className='w-full shadow-lg'>
              <Skeleton className='h-48 w-full rounded-t-lg' />
              <CardHeader>
                <Skeleton className='h-6 w-3/4 mb-2' />
                <Skeleton className='h-4 w-1/2' />
              </CardHeader>
              <CardContent>
                <Skeleton className='h-4 w-full mb-2' />
                <Skeleton className='h-4 w-5/6' />
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    );
  }

  if (error) {
    return (
      <SectionWrapper title='Diário de Missões'>
        <EmptyState
          title='Erro ao carregar diário de missões'
          description={error}
        />
      </SectionWrapper>
    );
  }

  if (!entries) {
    return null;
  }

  return (
    <SectionWrapper title='Diário de Missões'>
      <HorizontalScrollContainer>
        {entries.map((entry) => (
          <Card
            key={entry.id}
            className='w-[300px] min-w-[300px] md:w-[350px] md:min-w-[350px] flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mr-4'
          >
            <MissionDiaryEntryCard entry={entry} />
          </Card>
        ))}
      </HorizontalScrollContainer>
    </SectionWrapper>
  );
};
