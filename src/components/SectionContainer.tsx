
import { ReactNode } from 'react';

interface SectionContainerProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const SectionContainer = ({ id, className = '', children }: SectionContainerProps) => {
  return (
    <section id={id} className={`${className}`}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
