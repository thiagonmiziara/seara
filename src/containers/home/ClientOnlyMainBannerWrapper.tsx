"use client";

import { useEffect, useState } from "react";
import MainBanner from "./MainBanner";

export default function ClientOnlyMainBannerWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return <MainBanner />;
}
