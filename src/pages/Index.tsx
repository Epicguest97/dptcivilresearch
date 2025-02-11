
import { HeroSection } from "@/components/HeroSection";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { researchFields } from "@/data/researchFields";

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
