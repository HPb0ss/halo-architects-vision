
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

const TestimonialCard = ({ quote, author, role, company }: TestimonialCardProps) => {
  return (
    <div className="glass rounded-lg p-6 md:p-8">
      <blockquote className="text-foreground/90 italic mb-6">
        "{quote}"
      </blockquote>
      <div className="flex items-center">
        <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center font-medium text-primary">
          {author[0]}
        </div>
        <div className="ml-3">
          <h4 className="font-medium">{author}</h4>
          <p className="text-sm text-foreground/70">
            {role}
            {company && `, ${company}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
