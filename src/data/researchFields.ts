import { ResearchField } from "../types/research";


export const researchFields: ResearchField[] = [
  {
    id: 1,
    name: "Geotechnical Characterization, and Sustainable Ground Improvement",
    shortName: "GCSGI",
    description: "Innovative soil characterization, stabilization, and foundation engineering",
    fullDescription: "Innovative soil characterization, stabilization, and foundation engineering. Specialized in insitu soil strength assessment using Instrumented Free-Fall Penetrometers (IFFPs) for offshore infrastructure, soil-pipe interaction for subsea pipelines, ground improvement techniques, automatic SPT systems, and clay soil characterization for embankment stability. Explore sustainable solutions for municipal solid waste and seismic isolation systems. Through field studies, laboratory testing, and numerical modeling, develop practical geotechnical solutions for infrastructure development. ",
    showFullDescription: false,
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
            abstract: "This paper presents innovative project management techniques specifically designed for modern construction projects. Through a comprehensive analysis of 50 major construction projects across India, we identify key success factors and propose a new framework for efficient project delivery. The study demonstrates a 25% improvement in project completion times when implementing these techniques.",
            keywords: ["Project Management", "Construction", "Innovation"]
          },
          {
            id: 2,
            title: "Digital Twin Technology in Construction Project Management",
            authors: "Dr. Laxman P Kudva, Dr. Michael Chen",
            journal: "Digital Construction Technology Review",
            date: "2023",
            url: "https://doi.org/10.1234/dctr.2023.15",
            abstract: "An investigation into the implementation of digital twin technology in construction project management. This research explores how real-time digital representations of physical construction sites can improve decision-making and project outcomes. Case studies from three major infrastructure projects demonstrate significant improvements in cost control and schedule adherence.",
            keywords: ["Digital Twin", "Construction Management", "Technology"]
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
            abstract: "This research introduces an innovative approach to concrete mix design that significantly reduces carbon emissions while maintaining structural integrity. The study includes extensive laboratory testing and field implementation data from multiple construction sites. Results show a 30% reduction in carbon footprint without compromising strength requirements.",
            keywords: ["Concrete", "Sustainability", "Materials"]
          },
          {
            id: 4,
            title: "Nano-modified Building Materials: A Comprehensive Review",
            authors: "Dr. Laxman P Kudva, Dr. Robert Wilson, Dr. Emily Chang",
            journal: "Advanced Construction Materials Journal",
            date: "2024",
            url: "https://doi.org/10.1234/acmj.2024.03",
            abstract: "A comprehensive review of nano-modified building materials and their applications in modern construction. This paper examines the latest developments in nanomaterial incorporation into traditional building materials, focusing on enhanced durability, strength, and sustainability aspects.",
            keywords: ["Nanomaterials", "Building Materials", "Durability"]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Geoenvironmental Resources & Monitoring",
    shortName: "GERM",
    description: "The research spans multiple fields, including climate studies, mineral exploration, and environmental studies. It covers Antarctic paleoclimatology, sedimentology, remote sensing, and data validation techniques to enhance satellite-derived rainfall accuracy...",
    fullDescription: "The research spans multiple fields, including climate studies, mineral exploration, and environmental studies. It covers Antarctic paleoclimatology, sedimentology, remote sensing, and data validation techniques to enhance satellite-derived rainfall accuracy, particularly in complex terrains. Hydrometeorology, climatology, and statistical evaluations of satellite-based precipitation datasets are explored for improved rainfall estimates. Geospatial analysis also addresses accessibility issues in healthcare. Mineral exploration focuses on geoheritage, petrology, and economic mineralization. Environmental studies investigate microplastic pollution in ecosystems, analytical techniques in environmental monitoring, submarine groundwater discharge, and biogeochemistry in fishing zones. Additionally, geotechnical, GIS, and geostatistical methods are applied to civil and environmental engineering challenges. Other areas of focus include environmental management, waste treatment, methane emission monitoring, and improving energy equity through measurements of household energy usage and sustainable construction materials.",
    showFullDescription: false,
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
            abstract: "This study analyzes the seismic response of multi-story buildings in major Indian urban centers. Using advanced simulation techniques and real seismic data, we evaluate the performance of different structural systems under various earthquake scenarios. The research provides crucial insights for improving building codes in seismic zones.",
            keywords: ["Seismic Response", "Urban Buildings", "Structural Systems"]
          },
          {
            id: 6,
            title: "Performance-Based Seismic Design Methods",
            authors: "Dr. Laxman P Kudva, Dr. Thomas Anderson",
            journal: "Earthquake Engineering Review",
            date: "2023",
            url: "https://doi.org/10.1234/eer.2023.12",
            abstract: "An innovative approach to performance-based seismic design methods for modern structures. This research presents new methodologies for predicting and optimizing structural behavior during seismic events, incorporating both analytical models and experimental validation.",
            keywords: ["Seismic Design", "Performance-Based", "Structural Engineering"]
          }
        ]
      }
    ]
  }
];
