import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Professor } from "@/types/professor";

const professors: Professor[] = [
  {
    id: 1,
    name: "Dr. Laxman P Kudva",
    title: "Assistant Professor Senior Scale",
    research: "Concrete technology, Construction industry and management, Building materials",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    email: "laxman.kudva@university.edu",
    publications: 15,
    education: "B.E. (CIVIL), M.Tech. (Construction Engineering and Management)",
    about: "Prof. Kudva specializes in developing innovative construction technologies and sustainable building materials. His research focuses on improving construction industry practices and management techniques.",
    currentProjects: [
      "Development of eco-friendly concrete mixtures",
      "Construction project management optimization",
      "Sustainable building materials research"
    ],
    publishedResearch: [
      {
        title: "Advanced Concrete Mix Design for Sustainable Construction",
        journal: "Journal of Construction Materials",
        year: 2024
      },
      {
        title: "Optimization of Construction Project Management Techniques",
        journal: "Construction Management Review",
        year: 2023
      }
    ],
    scholarLink: "https://researcher.manipal.edu/en/persons/laxman-p-kudva",
    researchGateLink: "https://www.researchgate.net/profile/Laxman-Kudva",
    department: "Civil Engineering",
    officeLocation: "Academic Block 3, Room 507"
  },
  {
    id: 2,
    name: "Dr. Someone",
    title: "Associate Professor of Environmental Engineering",
    research: "Water treatment, Environmental impact, Sustainable development",
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    email: "someone@university.edu",
    publications: 20,
    education: "Ph.D. Environmental Engineering, M.Tech. Environmental Science",
    about: "Dr. Someone is dedicated to solving environmental challenges through innovative water treatment solutions and sustainable development practices.",
    currentProjects: [
      "Advanced water treatment technologies",
      "Environmental impact assessment methods",
      "Sustainable urban development"
    ],
    publishedResearch: [
      {
        title: "Urban Water Management: A Case Study in Karnataka",
        journal: "Water Resources Management Quarterly",
        year: 2024
      },
      {
        title: "Sustainable Urban Development Practices",
        journal: "Environmental Science Journal",
        year: 2023
      }
    ],
    scholarLink: "https://scholar.google.com/citations?user=example1",
    researchGateLink: "https://www.researchgate.net/profile/example1",
    department: "Environmental Engineering",
    officeLocation: "Academic Block 2, Room 305"
  },
  {
    id: 3,
    name: "Dr. someoneelse",
    title: "Professor of Transportation Engineering",
    research: "Smart transportation, Urban mobility, Traffic optimization",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    email: "someoneelse@university.edu",
    publications: 25,
    education: "Ph.D. Transportation Engineering, M.Tech. Traffic Systems",
    about: "Dr. someoneelse focuses on developing smart transportation solutions and optimizing urban mobility systems.",
    currentProjects: [
      "Smart traffic management systems",
      "Urban mobility optimization",
      "Sustainable transportation infrastructure"
    ],
    publishedResearch: [
      {
        title: "Smart Transportation Systems in Growing Cities",
        journal: "Transportation Engineering Review",
        year: 2024
      },
      {
        title: "Urban Mobility Patterns Analysis",
        journal: "Smart Cities Journal",
        year: 2023
      }
    ],
    scholarLink: "https://scholar.google.com/citations?user=example2",
    researchGateLink: "https://www.researchgate.net/profile/example2",
    department: "Transportation Engineering",
    officeLocation: "Academic Block 1, Room 205"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {professors.map((professor) => (
            <Card key={professor.id} className="h-full">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 mb-4">
                    <img
                      src={professor.imageUrl}
                      alt={professor.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-xl font-bold">{professor.name}</h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        {professor.title}
                      </p>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                        <Mail className="h-4 w-4" />
                        <span>{professor.email}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                        <BookOpen className="h-4 w-4" />
                        <span>{professor.publications} Publications</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Link to={`/professor/${professor.id}`} className="w-full">
                        <Button className="w-full">View Full Profile</Button>
                      </Link>
                      <div className="flex gap-2">
                        <a 
                          href={professor.scholarLink}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button variant="outline" className="w-full">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Scholar
                          </Button>
                        </a>
                        <a 
                          href={professor.researchGateLink}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button variant="outline" className="w-full">
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
        </div>
      </div>
    </div>
  );
};

export default ProfessorList;
