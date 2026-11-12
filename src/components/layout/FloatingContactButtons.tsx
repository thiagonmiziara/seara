"use client";

import { Button } from "@/components/ui/button";
import { MessageCircleMore } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FloatingContactButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className='fixed bottom-6 right-6 z-50 flex flex-col space-y-3'>
      <Button
        asChild
        size='lg'
        className='h-auto rounded-full bg-primary p-3 text-background shadow-lg hover:bg-primary/90'
      >
        <Link
          href='https://wa.me/SEU_NUMERO_DE_WHATSAPP'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='WhatsApp'
        >
          <MessageCircleMore size={28} />
        </Link>
      </Button>
    </div>
  );
}
