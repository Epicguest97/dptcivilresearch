
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, BookOpen, GraduationCap, ExternalLink, ArrowLeft } from "lucide-react";

const professors = [
  {
    id: 1,
    name: " Dr. Laxman P Kudva",
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
    ]
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
    ]
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
    ]
  }
];

const ProfessorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const professor = professors.find(p => p.id === Number(id));

  if (!professor) {
    return <div className="container mx-auto px-4 py-8">Professor not found</div>;
  }

  const handleBack = () => {
    navigate(-1); // This will go back to the previous page in history
  };

  const researchTopics = professor.research.split(',').map(topic => topic.trim());

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={handleBack} 
          className="mb-6 hover:bg-transparent p-0"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="w-48 h-48 shrink-0">
            <img
              src={professor.imageUrl}
              alt={professor.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{professor.name}</h1>
            <p className="text-lg text-muted-foreground mb-4">{professor.title}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {researchTopics.map((topic, index) => (
                <Badge key={index} variant="secondary">
                  {topic}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
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

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{professor.about}</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{professor.education}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Publications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{professor.publications}</p>
                <p className="text-muted-foreground">Published works</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Current Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {professor.currentProjects.map((project, index) => (
                  <li key={index} className="text-muted-foreground">
                    {project}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Published Research</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {professor.publishedResearch.map((paper, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                    <h3 className="font-semibold text-lg mb-1">{paper.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {paper.journal} • {paper.year}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfessorDetails;
