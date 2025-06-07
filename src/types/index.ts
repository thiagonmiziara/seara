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
