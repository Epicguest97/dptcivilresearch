
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className="relative bg-primary text-white py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Department Of Civil Engineering
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Civil Engineering Research And Innovation
            </p>
            <Link
              to="/professors"
              className="inline-block bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg 
              transition-colors duration-200"
            >
              Meet Our Professors
            </Link>
          </div>
          
          <div className="mt-8 md:mt-0 w-full md:w-1/3 flex justify-center items-center">
            <div className="w-48 h-48 bg-black/20 rounded-lg flex items-center justify-center border-2 border-accent/20">
              <span className="text-accent/50">Logo Space</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};
