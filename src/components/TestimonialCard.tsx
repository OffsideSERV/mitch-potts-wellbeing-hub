
import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  review: string;
  rating?: number;
  timeAgo?: string;
  className?: string;
}

const TestimonialCard = ({ name, review, rating = 5, timeAgo, className = "" }: TestimonialCardProps) => {
  return (
    <Card className={`bg-background/80 backdrop-blur-sm border shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center mb-3">
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          {timeAgo && (
            <span className="ml-2 text-sm text-muted-foreground">{timeAgo}</span>
          )}
        </div>
        <p className="text-muted-foreground mb-4 italic">"{review}"</p>
        <p className="font-semibold text-foreground">— {name}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
