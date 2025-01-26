import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { SearchBar } from "@/components/SearchBar";
import { ProfessorCard } from "@/components/ProfessorCard";

const professors = [
  {
    id: 1,
    name: "Laxman P Kudva",
    title: "Assistant Professor Senior Sclae",
    research: "EConcrete technology, construction industry and management, building materials",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    id: 2,
    name: "Dr. Someone",
    title: "Associate Professor of Environmental Engineering",
    research: "Water treatment, Environmental impact, Sustainable development",
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
  },
  {
    id: 3,
    name: "Dr. someoneelse",
    title: "Professor of Transportation Engineering",
    research: "Smart transportation, Urban mobility, Traffic optimization",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProfessors = professors.filter(
    (professor) =>
      professor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      professor.research.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      <main className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8" id="professors">
            Our Distinguished Faculty
          </h2>
          <SearchBar onSearch={setSearchQuery} />
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