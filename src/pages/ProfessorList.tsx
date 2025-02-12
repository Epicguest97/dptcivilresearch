
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Using the same professors data from ProfessorDetails
const professors = [
  {
    id: 1,
    name: "Dr. Laxman P Kudva",
    title: "Assistant Professor Senior Scale",
    research: "Concrete technology, Construction industry and management, Building materials",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    email: "laxman.kudva@university.edu",
    publications: 15
  },
  {
    id: 2,
    name: "Dr. Someone",
    title: "Associate Professor of Environmental Engineering",
    research: "Water treatment, Environmental impact, Sustainable development",
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    email: "someone@university.edu",
    publications: 20
  },
  {
    id: 3,
    name: "Dr. someoneelse",
    title: "Professor of Transportation Engineering",
    research: "Smart transportation, Urban mobility, Traffic optimization",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    email: "someoneelse@university.edu",
    publications: 25
  }
];

const ProfessorList = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/" className="text-accent hover:underline">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-center">Our Professors</h1>

        <Tabs defaultValue={professors[0].id.toString()} className="w-full max-w-4xl mx-auto">
          <TabsList className="w-full justify-start mb-8 overflow-x-auto flex-wrap">
            {professors.map((professor) => (
              <TabsTrigger
                key={professor.id}
                value={professor.id.toString()}
                className="min-w-[200px]"
              >
                {professor.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {professors.map((professor) => (
            <Card
              key={professor.id}
              value={professor.id.toString()}
              className="mb-4"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-48 h-48 shrink-0">
                    <img
                      src={professor.imageUrl}
                      alt={professor.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{professor.name}</h2>
                    <p className="text-lg text-muted-foreground mb-4">
                      {professor.title}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span>{professor.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <BookOpen className="h-4 w-4" />
                        <span>{professor.publications} Publications</span>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Link to={`/professor/${professor.id}`}>
                        <Button>View Full Profile</Button>
                      </Link>
                      <div className="space-x-2">
                        <a href="https://researcher.manipal.edu/en/persons/laxman-p-kudva" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Google Scholar
                          </Button>
                        </a>
                        <a href="https://www.researchgate.net/" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            ResearchGate
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ProfessorList;
