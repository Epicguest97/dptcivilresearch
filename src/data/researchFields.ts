
import { ResearchField } from "../types/research";

export const researchFields: ResearchField[] = [
  {
    id: 1,
    name: "Building Construction Technology and Management",
    shortName: "BCTM",
    description: "Advanced construction techniques, project management, and sustainable building practices",
    areas: [
      {
        id: 1,
        name: "Construction Project Management",
        papers: [
          {
            id: 1,
            title: "Innovative Project Management Techniques in Construction",
            authors: "Dr. Laxman P Kudva, Dr. John Smith",
            journal: "Construction Management Journal",
            date: "2024",
            url: "#"
          }
        ]
      },
      {
        id: 2,
        name: "Building Materials Technology",
        papers: [
          {
            id: 2,
            title: "Advanced Concrete Mix Design for Sustainable Construction",
            authors: "Dr. Laxman P Kudva, Dr. Jane Doe",
            journal: "Materials Science Review",
            date: "2023",
            url: "#"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Structural Engineering",
    shortName: "SE",
    description: "Analysis and design of structural systems, earthquake engineering",
    areas: [
      {
        id: 3,
        name: "Earthquake Engineering",
        papers: [
          {
            id: 3,
            title: "Seismic Response of Multi-Story Buildings",
            authors: "Dr. John Doe, Dr. Jane Smith",
            journal: "Structural Engineering Journal",
            date: "2024",
            url: "#"
          }
        ]
      }
    ]
  }
];
