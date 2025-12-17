
export interface SocialLinks {
  linkedIn?: string;
  github?: string;
  googleScholar?: string;
  orcid?: string;
  twitter?: string;
  email?: string;
}

export interface Profile {
  fullName: string;
  title: string;
  location: string;
  email: string;
  shortBio: string;
  longBio: string;
  avatarUrl?: string;
  socialLinks: SocialLinks;
}

export enum AcademicItemType {
  PUBLICATION = 'Publication',
  PATENT = 'Patent',
  TALK = 'Talk',
  POSTER = 'Poster'
}

export interface Publication {
  id: string;
  type: AcademicItemType;
  title: string;
  authors: string;
  venue: string;
  year: number;
  link?: string;
  doi?: string;
}

export interface Patent {
  title: string;
  number: string;
  year: number;
  status: 'Granted' | 'Pending';
}

export interface AcademicAward {
  name: string;
  org: string;
  year: number;
  details: string;
}

export interface Academic {
  publications: Publication[];
  patents: Patent[];
  awards: AcademicAward[];
  researchInterests: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
  year: number;
  credentialId?: string;
  link?: string;
  description: string;
}

export interface Professional {
  certificates: Certificate[];
  awards: AcademicAward[];
}

export enum ExperienceType {
  FULL_TIME = 'Full-time',
  PART_TIME = 'Part-time',
  FREELANCE = 'Freelance',
  VOLUNTEER = 'Volunteer',
  COOP = 'Co-op'
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: ExperienceType;
  bullets: string[];
  techTags: string[];
  link?: string;
}

export interface Project {
  name: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  link?: string;
  imageUrl?: string;
}

export interface PortfolioData {
  profile: Profile;
  academic: Academic;
  professional: Professional;
  experiences: ExperienceItem[];
  coopRoles: ExperienceItem[];
  projects: Project[];
}
