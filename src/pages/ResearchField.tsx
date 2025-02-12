
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { researchFields } from "@/data/researchFields";

const ResearchField = () => {
  const { id } = useParams();
  const [expandedArea, setExpandedArea] = useState<number | null>(null);
  
  const field = researchFields.find(f => f.id === Number(id));
  
  if (!field) {
    return <div className="container mx-auto px-4 py-8">Research field not found</div>;
  }

  const renderAuthors = (authors: string) => {
    return authors.split(", ").map((author, index, array) => (
      <span key={author}>
        {author.startsWith("Dr. Laxman P Kudva") ? (
          <Link to="/professor/1" className="text-accent hover:underline">
            {author}
          </Link>
        ) : (
          author
        )}
        {index < array.length - 1 ? ", " : ""}
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/" className="text-accent hover:underline">
            ← Back to Home
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
                  <ScrollArea className="h-[500px] w-full">
                    <div className="space-y-6">
                      {area.papers.map((paper) => (
                        <div key={paper.id} className="p-4 border rounded-lg">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-lg font-semibold text-accent">
                              {paper.title}
                            </h3>
                            <a 
                              href={paper.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm text-accent hover:underline"
                            >
                              View Paper <ExternalLink className="h-4 w-4" />
                            </a>
                          </div>
                          
                          <p className="text-sm text-gray-600 mt-2">
                            {renderAuthors(paper.authors)}
                          </p>
                          
                          <div className="text-sm text-gray-500 mt-1">
                            {paper.journal} • {paper.date}
                          </div>
                          
                          <div className="mt-4 text-gray-700 text-sm">
                            <h4 className="font-semibold mb-2">Abstract:</h4>
                            <p className="leading-relaxed">
                              {paper.abstract}
                            </p>
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
