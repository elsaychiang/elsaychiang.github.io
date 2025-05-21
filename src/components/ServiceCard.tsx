
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const ServiceCard = ({ title, description, icon: Icon, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center card-hover",
      className
    )}>
      <div className="w-16 h-16 rounded-full bg-morandi-neutral-light flex items-center justify-center mb-4">
        <Icon className="h-8 w-8 text-morandi-blue" />
      </div>
      
      <h3 className="text-xl font-semibold text-morandi-blue-dark mb-2 font-montserrat">{title}</h3>
      
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
