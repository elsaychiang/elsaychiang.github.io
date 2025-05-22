
import { cn } from '@/lib/utils';

export interface ProjectProps {
  title: string;
  caption?: string; // Added optional caption
  description: string[] | string;
  tools: string[];
  outcome: string;
  className?: string;
}

const ProjectCard = ({ title, caption, description, tools, outcome, className }: ProjectProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg shadow-md p-6 card-hover",
      className
    )}>
      <h3 className="text-xl font-semibold text-morandi-blue-dark mb-2 font-montserrat">
        {title}
      </h3>
      
      {/* Display caption if provided */}
      {caption && (
        <p className="text-morandi-blue font-medium mb-2">
          {caption}
        </p>
      )}
      
      {/* Handle both string and array descriptions */}
      {typeof description === 'string' ? (
        <p className="text-gray-600 mb-4">
          {description}
        </p>
      ) : (
        <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
          {description.map((item, index) => (
            <li key={index} className="text-sm">{item}</li>
          ))}
        </ul>
      )}
      
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
