import type { ReactNode } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface HorizontalScrollContainerProps {
  children: ReactNode;
  className?: string;
}

export function HorizontalScrollContainer({
  children,
  className,
}: HorizontalScrollContainerProps) {
  return (
    <ScrollArea className={cn("w-full whitespace-nowrap", className)}>
      <div className='flex w-max space-x-4 p-1 pb-4'>{children}</div>
      <ScrollBar orientation='horizontal' className='h-2.5' />
    </ScrollArea>
  );
}
