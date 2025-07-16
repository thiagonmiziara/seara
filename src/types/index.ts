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
  summary: Document;
  imageUrl: string;
  content?: Document;
}

export interface CarouselItem {
  id: string;
  slug: string;
  name: string;
  logoUrl?: string;
  imageUrl: string;
  description: string;
}

export interface ILatestSermon {
  title: string;
  preacher: string;
  imageUrl: string;
  podcastUrl: string;
}

export interface IMinistrySectionButton {
  text: string;
  link: string;
  variant: "default" | "outline";
  icon?: React.ElementType;
  target?: string;
}

export interface IMinistrySectionProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  imageAlt?: string;
  categoryIcon?: React.ElementType;
  categoryText: string;
  mainTitle: string;
  description: string | Document;
  buttons: IMinistrySectionButton[];
}

export interface IProduct {
  id: string;
  name: string;
  imageUrls: string[];
  price: string;
  phoneNumber: string;
}

export interface IEmptyStateProps {
  title: string;
  description: string;
}

export interface IKidsData {
  name: string;
  imageUrl: string;
  description: string;
  vision: string;
  ageGroups: { name: string; description: string }[];
  leader: string;
  contact: string;
}

export interface IYoungData {
  name: string;
  imageUrl: string;
  description: string;
  mission: string;
  activities: { name: string; description: string }[];
  leader: string;
  contact: string;
}

export interface IServiceProviders {
  id: string;
  name: string;
  contact: string;
  description: string;
  serviceType: string;
  approved: boolean;
}

export interface IPsychologicalSupportData {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
  services: string[];
  phone: string;
  email: string;
  address: string;
  description: string;
}
