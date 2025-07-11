import { IEmptyStateProps } from "@/types";
import { PackageX } from "lucide-react";

export default function EmptyState({ title, description }: IEmptyStateProps) {
  return (
    <div className='flex flex-col items-center justify-center py-12 text-center text-muted-foreground'>
      <PackageX className='h-16 w-16 mb-4' />
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-sm'>{description}</p>
    </div>
  );
}
