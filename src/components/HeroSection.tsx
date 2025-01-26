export const HeroSection = () => {
  return (
    <div className="relative bg-primary text-white py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Civil Engineering Research & Innovation
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Discover groundbreaking research and projects from our distinguished faculty members
            in civil engineering.
          </p>
          <a
            href="#professors"
            className="inline-block bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg 
            transition-colors duration-200"
          >
            Meet Our Professors
          </a>
        </div>
      </div>
    </div>
  );
};