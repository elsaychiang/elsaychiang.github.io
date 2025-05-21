
import { cn } from '@/lib/utils';
import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string[];
  isLast?: boolean;
  className?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, 
  title, 
  company, 
  description, 
  isLast = false,
  className
}) => {
  return (
    <div className={cn("relative pl-8 pb-8", className)}>
      <div className="timeline-dot"></div>
      {!isLast && <div className="timeline-line"></div>}
      
      <div className="mb-1 text-sm text-morandi-blue">
        {year}
      </div>
      
      <h3 className="text-lg font-semibold text-morandi-blue-dark font-montserrat">{title}</h3>
      <p className="text-morandi-blue font-medium mb-2">{company}</p>
      
      <ul className="list-disc pl-5 space-y-1">
        {description.map((item, index) => (
          <li key={index} className="text-gray-600">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimelineItem;
