"use client";

import { useState, useEffect } from "react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import DevotionalCard from "@/components/containers/devotional/DevotionalCard";
import DevotionalModal from "@/components/containers/devotional/DevotionalModal";
import { IDevotional } from "@/types";
import { BLOCKS } from "@contentful/rich-text-types";
import { Skeleton } from "@/components/ui/skeleton";
import EmptyState from "@/components/shared/EmptyState";
import { formatDate } from "@/lib/utils";

export default function DevocionalPage() {
  const [selectedDevotional, setSelectedDevotional] =
    useState<IDevotional | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [devotionals, setDevotionals] = useState<IDevotional[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDevotionals = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetch("/api/contentful?type=serviceDevotionals", {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch devotionals");
        }
        const data: IDevotional[] = await response.json();
        setDevotionals(data);
      } catch (err) {
        console.error("Error fetching devotionals:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    // Fetch immediately on mount
    fetchDevotionals();

    // Poll for updates every 30 seconds
    const interval = setInterval(fetchDevotionals, 30000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  const handleReadMore = (devotional: IDevotional) => {
    setSelectedDevotional(devotional);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDevotional(null);
  };

  return (
    <SectionWrapper
      title='Devocional Diário'
      subtitle='Encontre inspiração e reflexão para o seu dia com nosso devocional.'
    >
      {loading ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[...Array(3)].map((_, index) => (
            <Skeleton key={index} className='h-64 w-full rounded-lg' />
          ))}
        </div>
      ) : error || devotionals.length === 0 ? (
        <EmptyState
          title='Nenhum devocional encontrado'
          description='Não foi possível carregar os devocionais. Por favor, tente novamente mais tarde.'
        />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {devotionals.map((devotional) => (
            <DevotionalCard
              key={devotional.id}
              devotional={{ ...devotional, date: formatDate(devotional.date) }}
              onReadMore={handleReadMore}
            />
          ))}
        </div>
      )}

      <DevotionalModal
        devotional={selectedDevotional}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </SectionWrapper>
  );
}
