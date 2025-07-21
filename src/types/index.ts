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

export interface INewsItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  missionaryName?: string;
  imageUrl?: string;
  summary: Document;
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

export interface IEmptyStateProps {
  title: string;
  description: string;
}

export interface IKidsData {
  id: string;
  name: string;
  imageUrl: string;
  description: Document;
  vision: Document;
  ageGroups: { name: string; description: string }[];
  leader: string;
  contact: string;
}

export interface IYoungData {
  id: string;
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
  bio: Document;
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

export interface ISchoolDetail {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
  fullDescription: Document;
  curriculum: string[];
  duration: string;
  targetAudience: string;
}

export interface ICommunity {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
  fullDescription: Document;
  address: string;
  meetingTimes: string;
  leader: string;
}

export interface IMeetings {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
  fullDescription: Document;
  schedule: string;
  location: string;
  contactPerson: string;
}

export interface IMinistrySections {
  slug: string;
  name: string;
  imageUrl: string;
  description: string;
}

export interface IMinistryDetails {
  id: string;
  slug: string;
  name: string;
  imageUrl: string;
  description: string;
  fullDescription: Document;
}

export interface IProducts {
  id: string;
  name: string;
  imageUrls: string[];
  price: string;
  phone: string;
}
