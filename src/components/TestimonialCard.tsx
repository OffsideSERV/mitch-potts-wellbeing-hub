import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  content: string;
  timeAgo: string;
  reviews?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  content, 
  timeAgo, 
  reviews,
  className = "" 
}) => {
  return (
    <Card className={`border-0 shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        
        <blockquote className="text-muted-foreground leading-relaxed mb-4 italic">
          "{content}"
        </blockquote>
        
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-foreground">{name}</div>
            {reviews && (
              <div className="text-sm text-muted-foreground">{reviews}</div>
            )}
          </div>
          <div className="text-sm text-muted-foreground">
            {timeAgo}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;