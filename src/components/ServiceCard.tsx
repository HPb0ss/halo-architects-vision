
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="glass rounded-lg p-6 hover:shadow-lg transition-all duration-500 hover:translate-y-[-5px]">
      <div className="w-14 h-14 rounded-md flex items-center justify-center bg-primary/5 mb-5">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="font-display text-xl font-medium mb-3">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

export default ServiceCard;
