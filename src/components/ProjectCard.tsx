
import { cn } from '@/lib/utils';

export interface ProjectProps {
  title: string;
  description: string;
  tools: string[];
  outcome: string;
  className?: string;
}

const ProjectCard = ({ title, description, tools, outcome, className }: ProjectProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg shadow-md p-6 card-hover",
      className
    )}>
      <h3 className="text-xl font-semibold text-morandi-blue-dark mb-2 font-montserrat">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium text-morandi-blue-dark mb-2">Tools & Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <span 
              key={index} 
              className="text-xs bg-morandi-neutral-light text-morandi-blue-dark px-3 py-1 rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-morandi-blue-dark mb-1">Key Outcome</h4>
        <p className="text-sm text-gray-600">{outcome}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
