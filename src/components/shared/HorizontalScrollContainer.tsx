import type { ReactNode } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface HorizontalScrollContainerProps {
  children: ReactNode;
  className?: string;
  shouldCenter?: boolean; // Nova propriedade para centralização
}

export function HorizontalScrollContainer({
  children,
  className,
  shouldCenter = false,
}: HorizontalScrollContainerProps) {
  return (
    <ScrollArea className={cn("w-full", className)}>
      <div
        className={cn(
          "inline-flex space-x-4 p-1 pb-4",
          shouldCenter ? "w-full justify-center" : ""
        )}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {children}
      </div>
      <ScrollBar orientation="horizontal" className="h-2.5" />
    </ScrollArea>
  );
}
