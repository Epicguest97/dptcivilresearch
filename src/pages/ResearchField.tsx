
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, ChevronUp } from "lucide-react";
import { researchFields } from "@/data/researchFields";

const ResearchField = () => {
  const { id } = useParams();
  const [expandedArea, setExpandedArea] = useState<number | null>(null);
  
  const field = researchFields.find(f => f.id === Number(id));
  
  if (!field) {
    return <div className="container mx-auto px-4 py-8">Research field not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/" className="text-accent hover:underline">
            ← Back to Research Fields
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-2">{field.name}</h1>
        <p className="text-xl text-gray-600 mb-8">{field.description}</p>

        <div className="space-y-4">
          {field.areas.map((area) => (
            <Card key={area.id} className="overflow-hidden">
              <div
                className="cursor-pointer"
                onClick={() => setExpandedArea(expandedArea === area.id ? null : area.id)}
              >
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>{area.name}</CardTitle>
                  {expandedArea === area.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </CardHeader>
              </div>

              {expandedArea === area.id && (
                <CardContent>
                  <ScrollArea className="h-[300px] w-full">
                    <div className="space-y-4">
                      {area.papers.map((paper) => (
                        <div key={paper.id} className="p-4 border-b last:border-b-0">
                          <a 
                            href={paper.url}
                            className="text-accent hover:underline font-medium block mb-2"
                          >
                            {paper.title}
                          </a>
                          <p className="text-sm text-gray-600">{paper.authors}</p>
                          <div className="text-sm text-gray-500 mt-1">
                            {paper.journal} • {paper.date}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchField;
