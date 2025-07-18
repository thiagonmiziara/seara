import { Document } from "@contentful/rich-text-types";

export interface IMainBannerData {
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
  content: Document;
  missionaryName: string;
  imageUrl?: string;
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

export interface IDevotional {
  id: string;
  title: string;
  date: string;
  preview: string;
  content: Document;
}

export interface IMissionDiaryEntry {
  id: string;
  slug: string;
  title: string;
  date: string;
  content: Document;
  missionaryName: string;
  imageUrl: string;
  qrCodePixUrl: string;
  donationTitle: string;
  donationSubtitle: string;
  pixKey: string;
  bankName: string;
  agency: string;
  account: string;
  beneficiary: string;
  cnpj?: string;
}

export interface IMissionItem {
  id: string;
  slug: string;
  title: string;
  imageUrl: string;
  description: string;
  qrCodeUrl: string;
}

export interface IMissionDetails {
  id: string;
  slug: string;
  title: string;
  imageUrl: string;
  description: string;
  fullDetails: Document;
  objectives: string[];
  howToHelp: string[];
  qrCodeUrl: string;
}

export interface IContact {
  id: string;
  address: string;
  phone: string;
  email: string;
  mapLink: string;
}
