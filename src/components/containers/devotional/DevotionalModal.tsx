import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { IDevotional } from "@/types";
import RichTextRenderer from "@/lib/richTextRenderer";

interface DevotionalModalProps {
  devotional: IDevotional | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function DevotionalModal({
  devotional,
  isOpen,
  onClose,
}: DevotionalModalProps) {
  if (!devotional) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-[800px] max-h-[90vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle className='text-3xl font-bold mb-2'>
            {devotional.title}
          </DialogTitle>
          <DialogDescription className='text-gray-500 text-sm'>
            {devotional.date}
          </DialogDescription>
        </DialogHeader>
        <div className='py-4 text-lg leading-relaxed'>
          <RichTextRenderer document={devotional.content} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
