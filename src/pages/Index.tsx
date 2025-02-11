
import { HeroSection } from "@/components/HeroSection";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";

const researchFields = [
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

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Research Fields
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchFields.map((field) => (
            <Link to={`/research/${field.id}`} key={field.id}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex flex-col gap-2">
                    <span className="text-accent font-semibold">{field.shortName}</span>
                    <span className="text-xl">{field.name}</span>
                  </CardTitle>
                  <CardDescription>{field.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
