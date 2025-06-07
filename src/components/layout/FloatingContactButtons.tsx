'use client';

import { Button } from '@/components/ui/button';
import { Phone, MessageSquare } from 'lucide-react'; // Using MessageSquare for WhatsApp
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function FloatingContactButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ensure this runs only on client
    setIsVisible(true);
  }, []);

  if (!isVisible) {
    return null; // Avoid rendering on server to prevent hydration mismatch if needed for complex logic
  }
  
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      <Button asChild size="lg" className="rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white p-3 h-auto">
        <Link href="https://wa.me/SEU_NUMERO_DE_WHATSAPP" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <MessageSquare size={28} />
        </Link>
      </Button>
      <Button asChild size="lg" className="rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground p-3 h-auto">
        <Link href="tel:SEU_NUMERO_ADTEL" aria-label="ADTEL">
          <Phone size={28} />
        </Link>
      </Button>
    </div>
  );
}
