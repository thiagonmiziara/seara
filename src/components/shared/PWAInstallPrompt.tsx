"use client";

import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

const PWA_INSTALL_PROMPT_DISMISSED = "pwa_install_prompt_dismissed";

const PWAInstallPrompt: React.FC = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const deferredPrompt = useRef<any>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);
    setIsStandalone(
      window.matchMedia("(display-mode: standalone)").matches ||
        (window.navigator as any).standalone
    );

    // Only show prompt if not dismissed and not in standalone mode
    if (
      localStorage.getItem(PWA_INSTALL_PROMPT_DISMISSED) === "true" ||
      isStandalone
    ) {
      setShowPrompt(false); // Ensure it's hidden if conditions are met
      return;
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      deferredPrompt.current = e;
      setShowPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, [isStandalone]);

  const handleInstallClick = async () => {
    if (deferredPrompt.current) {
      deferredPrompt.current.prompt();
      const { outcome } = await deferredPrompt.current.userChoice;
      if (outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt.current = null;
      setShowPrompt(false);
      localStorage.setItem(PWA_INSTALL_PROMPT_DISMISSED, "true");
    }
  };

  const handleDismiss = () => {
    console.log("Dismissing PWA prompt");
    setShowPrompt(false);
    localStorage.setItem(PWA_INSTALL_PROMPT_DISMISSED, "true");
  };

  // Only render if showPrompt is true
  if (!showPrompt) {
    return null;
  }

  // If it's iOS and already in standalone mode, don't show
  if (isIOS && isStandalone) {
    return null;
  }

  return (
    <div className='fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white z-50'>
      <Card className='bg-gray-700 text-white border-none'>
        <CardContent className='flex items-center justify-between p-4'>
          <div className='flex-1'>
            {isIOS ? (
              <p className='text-sm'>
                Para instalar o aplicativo, toque no ícone de compartilhamento{" "}
                <span className='font-bold'>[↑]</span> e selecione "Adicionar à
                Tela de Início".
              </p>
            ) : (
              <p className='text-sm'>
                Adicione o Seara à sua tela inicial para uma experiência de
                aplicativo!
              </p>
            )}
          </div>
          <div className='flex items-center space-x-2 ml-4'>
            {!isIOS && (
              <Button
                onClick={handleInstallClick}
                className='bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1'
              >
                Instalar
              </Button>
            )}
            <Button
              onClick={handleDismiss}
              variant='ghost'
              size='icon'
              className='text-white hover:bg-gray-600'
            >
              <X className='h-4 w-4' />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PWAInstallPrompt;
