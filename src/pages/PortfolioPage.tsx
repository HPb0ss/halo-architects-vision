import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import ProjectCard from "@/components/ProjectCard";

const PortfolioPage = () => {
  useEffect(() => {
    document.title = "Portfolio | HALO Architects";
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("all");

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Azure Pavilion",
      category: "residential",
      imageSrc:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    },
    {
      id: 2,
      title: "Meridian Tower",
      category: "commercial",
      imageSrc: "/public/images/masrur-rahman-Q0oO-6KKEcY-unsplash.webp",
    },
    {
      id: 3,
      title: "Solstice Villa",
      category: "residential",
      imageSrc:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    },
    {
      id: 4,
      title: "Horizon Office",
      category: "commercial",
      imageSrc: "/public/images/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.webp",
    },
    {
      id: 5,
      title: "Cascade Apartments",
      category: "residential",
      imageSrc:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    },
    {
      id: 6,
      title: "Prisma Hotel",
      category: "hospitality",
      imageSrc:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    },
    {
      id: 7,
      title: "Echo Museum",
      category: "cultural",
      imageSrc:
        "https://images.unsplash.com/photo-1529336953128-a85760f58cb5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    },
    {
      id: 8,
      title: "Oasis Retreat",
      category: "hospitality",
      imageSrc:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    },
    {
      id: 9,
      title: "Pulse Commercial Center",
      category: "commercial",
      imageSrc:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const filterOptions = [
    { value: "all", label: "All Projects" },
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "hospitality", label: "Hospitality" },
    { value: "cultural", label: "Cultural" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              Our Portfolio
            </h1>
            <p className="text-foreground/70 text-lg md:text-xl max-w-2xl">
              Explore our diverse collection of projects that showcase our
              commitment to innovative, sustainable, and inspiring architectural
              design.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-2 -mx-2 scrollbar-none">
            <div className="flex px-2 space-x-2">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFilter(option.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    filter === option.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground/70 hover:bg-secondary/80"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <RevealOnScroll>
        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  category={
                    project.category.charAt(0).toUpperCase() +
                    project.category.slice(1)
                  }
                  imageSrc={project.imageSrc}
                />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-foreground/70">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </RevealOnScroll>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
