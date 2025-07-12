import React, { memo } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from 'lucide-react';

interface OptimizedButtonProps {
  variant?: 'default' | 'outline';
  size?: 'default' | 'lg';
  href: string;
  children: React.ReactNode;
  icon?: 'calendar' | 'phone';
  className?: string;
}

const OptimizedButton = memo(({ 
  variant = 'default', 
  size = 'lg', 
  href, 
  children, 
  icon,
  className = ''
}: OptimizedButtonProps) => {
  const IconComponent = icon === 'calendar' ? Calendar : icon === 'phone' ? Phone : null;
  
  return (
    <Button 
      variant={variant} 
      size={size} 
      className={`text-base sm:text-lg px-6 py-4 h-auto ${className}`} 
      asChild
    >
      <a 
        href={href} 
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {IconComponent && <IconComponent className="mr-2 h-5 w-5 flex-shrink-0" />}
        {children}
      </a>
    </Button>
  );
});

OptimizedButton.displayName = 'OptimizedButton';

export default OptimizedButton;