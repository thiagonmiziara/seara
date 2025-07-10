"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

export default function GlobalLoading() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    handleComplete();
    return () => {};
  }, [pathname, searchParams]);

  if (isLoading) {
    return (
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm'>
        <Skeleton className='h-12 w-12 rounded-full bg-primary animate-pulse' />
      </div>
    );
  }

  return null;
}
