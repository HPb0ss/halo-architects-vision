
import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  imageSrc: string;
  delay?: number;
}

const ProjectCard = ({ title, category, imageSrc, delay = 0 }: ProjectCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className="project-card group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <img
          src={imageSrc}
          alt={title}
          className={`project-image ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse w-full h-full bg-muted"></div>
          </div>
        )}
      </div>
      <div className="project-overlay">
        <span className="text-sm font-medium text-white/80">{category}</span>
        <h3 className="font-display text-xl sm:text-2xl text-white mt-1">
          {title}
        </h3>
        <div className="mt-4 flex items-center text-white/90 text-sm font-medium">
          <span>View Project</span>
          <ArrowRight className="h-4 w-4 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
