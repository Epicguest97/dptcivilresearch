import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { SearchBar } from "@/components/SearchBar";
import { ProfessorCard } from "@/components/ProfessorCard";

const professors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Professor of Structural Engineering",
    research: "Specializing in earthquake-resistant structures and sustainable building materials.",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    title: "Associate Professor of Environmental Engineering",
    research: "Focusing on water treatment technologies and environmental impact assessment.",
    imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "Professor of Transportation Engineering",
    research: "Researching smart transportation systems and urban mobility solutions.",
    imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
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