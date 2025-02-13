
export interface ResearchPaper {
  id: number;
  title: string;
  authors: string;
  journal: string;
  date: string;
  url: string;
  abstract: string;
  keywords: string[];
}

export interface ResearchArea {
  id: number;
  name: string;
  papers: ResearchPaper[];
}

export interface ResearchField {
  id: number;
  name: string;
  shortName: string;
  description: string;
  areas: ResearchArea[];
}
