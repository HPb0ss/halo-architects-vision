
import { useState } from "react";
import { Mail, Linkedin } from "lucide-react";

interface MemberCardProps {
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
}

const MemberCard = ({ name, title, bio, imageSrc }: MemberCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="team-card">
      <div className="aspect-[3/4] relative overflow-hidden bg-muted">
        <img
          src={imageSrc}
          alt={name}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
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
      <div className="p-6 space-y-3">
        <h3 className="font-display text-xl font-medium">{name}</h3>
        <p className="text-sm font-medium text-foreground/70">{title}</p>
        <p className="text-sm text-foreground/80 line-clamp-3">{bio}</p>
        <div className="flex space-x-3 pt-2">
          <button
            className="text-foreground/70 hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </button>
          <button
            className="text-foreground/70 hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
