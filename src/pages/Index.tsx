import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { researchFields as initialResearchFields } from "@/data/researchFields";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Local state for managing the expanded descriptions
  const [researchFields, setResearchFields] = useState(initialResearchFields);

  // Toggle description visibility
  const toggleDescription = (id: number) => {
    setResearchFields(prevFields => 
      prevFields.map(field => 
        field.id === id 
          ? { ...field, showFullDescription: !field.showFullDescription }
          : field
      )
    );
  };

  // Get all papers across all fields and areas, sort by date
  const getLatestPapers = () => {
    const allPapers = researchFields.flatMap(field => 
      field.areas.flatMap(area => 
        area.papers.map(paper => ({
          ...paper,
          field: field.name,
          fieldId: field.id,
          area: area.name
        }))
      )
    );
    
    return allPapers.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    ).slice(0, 3);
  };

  const latestPapers = getLatestPapers();

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Research Fields</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchFields.map((field) => (
            <Card className="h-full hover:shadow-lg transition-shadow" key={field.id}>
              <CardHeader>
                <CardTitle className="flex flex-col gap-2">
                  <span className="text-accent font-semibold">{field.shortName}</span>
                  <span className="text-xl">{field.name}</span>
                </CardTitle>
                <CardDescription className="mt-2">
                  {field.showFullDescription ? field.fullDescription : field.description}
                  <Button 
                    variant="link" 
                    className="p-0 h-auto mt-1 text-accent" 
                    onClick={(e) => {
                      e.preventDefault(); // Prevent navigation
                      toggleDescription(field.id);
                    }}
                  >
                    {field.showFullDescription ? "Read Less" : "Read More"}
                  </Button>
                </CardDescription>
                <div className="mt-3">
                  <Link 
                    to={`/research/${field.id}`} 
                    className="text-accent hover:underline font-medium"
                  >
                    View Research →
                  </Link>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>
      
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPapers.map((paper) => (
            <Card key={paper.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>{paper.date}</span>
                </div>
                <CardTitle className="text-lg mb-2">{paper.title}</CardTitle>
                <CardDescription>
                  <Link 
                    to={`/research/${paper.fieldId}`} 
                    className="text-accent hover:underline block mb-1"
                  >
                    {paper.field}
                  </Link>
                  <p className="text-sm text-gray-600 mb-2">{paper.area}</p>
                  <p className="text-sm line-clamp-2">{paper.abstract}</p>
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
