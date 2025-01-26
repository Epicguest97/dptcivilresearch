import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <Input
        className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:border-accent"
        placeholder="Search professors by name or research area..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};