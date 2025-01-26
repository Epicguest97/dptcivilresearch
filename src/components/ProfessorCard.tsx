import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, BookOpen, Phone } from "lucide-react";

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
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <img
          src={professor.imageUrl}
          alt={professor.name}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <CardHeader className="-mt-12 relative z-10">
        <CardTitle className="text-2xl font-bold text-white mb-1">
          {professor.name}
        </CardTitle>
        <CardDescription className="text-gray-200">
          {professor.title}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {researchTopics.map((topic, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {topic}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <BookOpen className="h-4 w-4" />
          <span>15 Publications</span>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button size="icon" variant="ghost">
            <Mail className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost">
            <Phone className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="default">View Profile</Button>
      </CardFooter>
    </Card>
  );
};