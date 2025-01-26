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
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 
    hover:-translate-y-1 animate-fade-in">
      <img
        src={professor.imageUrl}
        alt={professor.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{professor.name}</h3>
        <p className="text-accent mb-3">{professor.title}</p>
        <p className="text-gray-600">{professor.research}</p>
        <button className="mt-4 text-accent hover:text-accent/90 font-medium">
          View Profile →
        </button>
      </div>
    </div>
  );
};