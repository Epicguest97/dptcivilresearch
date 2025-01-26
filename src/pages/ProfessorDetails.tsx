import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, BookOpen, GraduationCap, ExternalLink } from "lucide-react";

// This would typically come from an API or database
const professors = [
  {
    id: 1,
    name: "Laxman P Kudva",
    title: "Assistant Professor Senior Sclae",
    research: "Concrete technology, construction industry and management, building materials",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    email: "sarah.johnson@university.edu",
    publications: 12,
    education: "B.E. (CIVIL), M.Tech. (Construction Engineering and Management)",
    about: "Dr. Johnson specializes in developing innovative structural solutions for earthquake-prone regions. Her research focuses on sustainable building materials and advanced bridge design techniques.",
    currentProjects: [
      "Developing eco-friendly concrete alternatives",
      "Seismic response of high-rise buildings",
      "Smart bridge monitoring systems"
    ]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    title: "Associate Professor of Environmental Engineering",
    research: "Water treatment, Environmental impact, Sustainable development",
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "Professor of Transportation Engineering",
    research: "Smart transportation, Urban mobility, Traffic optimization",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
];

const ProfessorDetails = () => {
  const { id } = useParams();
  const professor = professors.find(p => p.id === Number(id));

  if (!professor) {
    return <div className="container mx-auto px-4 py-8">Professor not found</div>;
  }

  const researchTopics = professor.research.split(',').map(topic => topic.trim());

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
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
              <Button variant="outline">
                <ExternalLink className="mr-2 h-4 w-4" />
                Google Scholar
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-8">
          {/* About Section */}
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{professor.about}</p>
            </CardContent>
          </Card>

          {/* Education & Stats */}
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

          {/* Current Projects */}
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
        </div>
      </div>
    </div>
  );
};

export default ProfessorDetails;
