import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface Professor {
  id: number;
  name: string;
  title: string;
  research: string;
  imageUrl: string;
}

interface ProfessorCardProps {
  professor: Professor;
}

export const ProfessorCard = ({ professor }: ProfessorCardProps) => {
  const researchTopics = professor.research.split(',').map(topic => topic.trim());

  return (
    <Link to={`/professor/${professor.id}`}>
      <Card className="group relative overflow-hidden hover:shadow-md transition-shadow">
        <div className="flex p-4 gap-4">
          <div className="w-24 h-24 shrink-0 overflow-hidden rounded-full">
            <img
              src={professor.imageUrl}
              alt={professor.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-2">
            <CardHeader className="p-0">
              <CardTitle className="text-xl font-semibold">
                {professor.name}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {professor.title}
              </p>
            </CardHeader>

            <CardContent className="p-0">
              <div className="flex flex-wrap gap-1 mb-2">
                {researchTopics.map((topic, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-xs"
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                <span>15 Publications</span>
              </div>
            </CardContent>
          </div>
        </div>

        <div className="absolute right-4 top-4" onClick={(e) => e.preventDefault()}>
          <Button size="icon" variant="ghost">
            <Mail className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </Link>
  );
};