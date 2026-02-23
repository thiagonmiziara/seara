"use client";

import { usePathname } from "next/navigation";
import BackToHome from "./BackToHome";
import { useEffect, useState } from "react";

export default function BackToHomeClient() {
  const pathname = usePathname();
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    if (!pathname || pathname === "/") {
      setShouldShow(false);
      return;
    }

    // If the page already renders a hero back button (class 'hero-back-button'), don't show the global one
    const hasHeroBack = !!document.querySelector(".hero-back-button");
    setShouldShow(!hasHeroBack);
  }, [pathname]);

  if (!shouldShow) return null;
  return <BackToHome />;
}
