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
        className='rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white p-3 h-auto'
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
