
export interface PublishedResearch {
  title: string;
  journal: string;
  year: number;
}

export interface Professor {
  id: number;
  name: string;
  title: string;
  research: string;
  imageUrl: string;
  email: string;
  publications: number;
  education: string;
  about: string;
  currentProjects: string[];
  publishedResearch: PublishedResearch[];
  scholarLink: string;
  researchGateLink: string;
  department?: string;
  officeLocation?: string;
}
