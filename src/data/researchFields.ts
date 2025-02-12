
import { ResearchField } from "../types/research";

export const researchFields: ResearchField[] = [
  {
    id: 1,
    name: "Building Technology Construction and Management",
    shortName: "BTCM",
    description: "Advanced construction techniques, project management, and sustainable building practices",
    areas: [
      {
        id: 1,
        name: "Construction Project Management",
        papers: [
          {
            id: 1,
            title: "Innovative Project Management Techniques in Modern Construction",
            authors: "Dr. Laxman P Kudva, Dr. John Smith, Dr. Sarah Johnson",
            journal: "Construction Management Journal",
            date: "2024",
            url: "https://doi.org/10.1234/cmj.2024.01",
            abstract: "This paper presents innovative project management techniques specifically designed for modern construction projects. Through a comprehensive analysis of 50 major construction projects across India, we identify key success factors and propose a new framework for efficient project delivery. The study demonstrates a 25% improvement in project completion times when implementing these techniques."
          },
          {
            id: 2,
            title: "Digital Twin Technology in Construction Project Management",
            authors: "Dr. Laxman P Kudva, Dr. Michael Chen",
            journal: "Digital Construction Technology Review",
            date: "2023",
            url: "https://doi.org/10.1234/dctr.2023.15",
            abstract: "An investigation into the implementation of digital twin technology in construction project management. This research explores how real-time digital representations of physical construction sites can improve decision-making and project outcomes. Case studies from three major infrastructure projects demonstrate significant improvements in cost control and schedule adherence."
          }
        ]
      },
      {
        id: 2,
        name: "Building Materials Technology",
        papers: [
          {
            id: 3,
            title: "Advanced Concrete Mix Design for Sustainable Construction",
            authors: "Dr. Laxman P Kudva, Dr. Jane Doe",
            journal: "Materials Science Review",
            date: "2023",
            url: "https://doi.org/10.1234/msr.2023.08",
            abstract: "This research introduces an innovative approach to concrete mix design that significantly reduces carbon emissions while maintaining structural integrity. The study includes extensive laboratory testing and field implementation data from multiple construction sites. Results show a 30% reduction in carbon footprint without compromising strength requirements."
          },
          {
            id: 4,
            title: "Nano-modified Building Materials: A Comprehensive Review",
            authors: "Dr. Laxman P Kudva, Dr. Robert Wilson, Dr. Emily Chang",
            journal: "Advanced Construction Materials Journal",
            date: "2024",
            url: "https://doi.org/10.1234/acmj.2024.03",
            abstract: "A comprehensive review of nano-modified building materials and their applications in modern construction. This paper examines the latest developments in nanomaterial incorporation into traditional building materials, focusing on enhanced durability, strength, and sustainability aspects."
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
            id: 5,
            title: "Seismic Response of Multi-Story Buildings in Urban India",
            authors: "Dr. Laxman P Kudva, Dr. Jane Smith, Dr. Rajesh Kumar",
            journal: "Structural Engineering Journal",
            date: "2024",
            url: "https://doi.org/10.1234/sej.2024.05",
            abstract: "This study analyzes the seismic response of multi-story buildings in major Indian urban centers. Using advanced simulation techniques and real seismic data, we evaluate the performance of different structural systems under various earthquake scenarios. The research provides crucial insights for improving building codes in seismic zones."
          },
          {
            id: 6,
            title: "Performance-Based Seismic Design Methods",
            authors: "Dr. Laxman P Kudva, Dr. Thomas Anderson",
            journal: "Earthquake Engineering Review",
            date: "2023",
            url: "https://doi.org/10.1234/eer.2023.12",
            abstract: "An innovative approach to performance-based seismic design methods for modern structures. This research presents new methodologies for predicting and optimizing structural behavior during seismic events, incorporating both analytical models and experimental validation."
          }
        ]
      }
    ]
  }
];
