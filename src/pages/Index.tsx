import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { SearchBar } from "@/components/SearchBar";
import { ProfessorCard } from "@/components/ProfessorCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const researchFields = [
  "All",
  "Construction Technology",
  "Environmental Engineering",
  "Transportation",
  "Structural Engineering",
  "Water Resources"
];

const professors = [
  {
    id: 1,
    name: "Laxman P Kudva",
    title: "Assistant Professor Senior Scale",
    research: "Construction Technology, Building Materials",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    field: "Construction Technology"
  },
  {
    id: 2,
    name: "Dr. Someone",
    title: "Associate Professor of Environmental Engineering",
    research: "Water treatment, Environmental impact, Sustainable development",
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    field: "Environmental Engineering"
  },
  {
    id: 3,
    name: "Dr. someoneelse",
    title: "Professor of Transportation Engineering",
    research: "Smart transportation, Urban mobility, Traffic optimization",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    field: "Transportation"
  },
  {
    id: 4,
    name: "Dr. John Doe",
    title: "Professor of Structural Engineering",
    research: "Earthquake Engineering, Steel Structures",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    field: "Structural Engineering"
  },
  {
    id: 5,
    name: "Dr. Jane Smith",
    title: "Professor of Water Resources",
    research: "Hydraulics, Water Management",
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    field: "Water Resources"
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedField, setSelectedField] = useState("All");

  const filteredProfessors = professors.filter(
    (professor) => {
      const matchesSearch = 
        professor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        professor.research.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesField = 
        selectedField === "All" || professor.field === selectedField;

      return matchesSearch && matchesField;
    }
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      <main className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8" id="professors">
            Our Distinguished Faculty
          </h2>
          
          <div className="flex flex-col gap-8">
            <Tabs defaultValue="All" className="w-full">
              <TabsList className="w-full flex flex-wrap justify-center gap-2">
                {researchFields.map((field) => (
                  <TabsTrigger
                    key={field}
                    value={field}
                    onClick={() => setSelectedField(field)}
                    className="px-4 py-2"
                  >
                    {field}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <SearchBar onSearch={setSearchQuery} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProfessors.map((professor) => (
            <ProfessorCard key={professor.id} professor={professor} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;