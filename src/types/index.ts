import { Document } from "@contentful/rich-text-types";

export interface MainBannerData {
  id: string;
  title: string;
  backgroundImageUrl: string;
  vision: string;
  purpose: string;
  buttonText?: string;
  buttonLink?: string;
  logoUrl: string;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  summary: Document; // Changed type to Document
  imageUrl: string;
  content?: Document; // Changed type to Document and kept optional
}

export interface CarouselItem {
  id: string;
  slug: string;
  name: string;
  logoUrl?: string; // Adicionado como opcional
  imageUrl: string;
  description: string;
}

export interface ILatestSermon {
  title: string;
  preacher: string;
  imageUrl: string;
  podcastUrl: string;
}
