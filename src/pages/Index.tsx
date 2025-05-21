
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  Database, 
  FileText, 
  Code, 
  Mail, 
  Phone, 
  Linkedin, 
  Eye 
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import SectionContainer from '@/components/SectionContainer';
import ContactForm from '@/components/ContactForm';
import ProjectCard from '@/components/ProjectCard';
import ServiceCard from '@/components/ServiceCard';
import TimelineItem from '@/components/TimelineItem';

const Index = () => {
  // Add animation delay for elements with data-animate attribute
  useEffect(() => {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach((el, index) => {
      const delay = index * 0.15;
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.animationDelay = `${delay}s`;
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <SectionContainer id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mt-8 md:mt-0" data-animate>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-montserrat text-morandi-blue-dark">
              Yi Shiuan (Elsa) <span className="text-morandi-blue">Chiang</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-morandi-blue">
              Business Analytics Consultant | Data-Driven Problem Solver
            </p>
            <p className="text-gray-600 mb-8 max-w-lg">
              Hi, I'm Elsa, a data enthusiast passionate about transforming insights into strategic business actions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                className="bg-morandi-blue hover:bg-morandi-blue-dark text-white rounded-md px-6 py-2 font-montserrat"
              >
                <a href="#projects">Explore My Work</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-morandi-blue text-morandi-blue hover:bg-morandi-blue-light/10 rounded-md px-6 py-2 font-montserrat"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-2/5" data-animate>
            <div className="w-48 h-48 md:w-72 md:h-72 mx-auto rounded-full border-4 border-morandi-neutral-light overflow-hidden shadow-lg">
              {/* Placeholder for profile image - replace with actual image */}
              <div className="w-full h-full bg-morandi-neutral grid place-items-center">
                <span className="text-6xl font-montserrat text-white">EC</span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      
      {/* About Section */}
      <SectionContainer id="about" className="bg-white py-16 md:py-24">
        <h2 className="section-title" data-animate>About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6" data-animate>
            <p className="text-gray-600">
              Analytical professional with a background in financial auditing and data-driven decision-making, 
              currently pursuing a Master's degree in Business Analytics and Information Management. 
              Skilled in data visualization, business intelligence tools, SQL, and predictive analytics, 
              with hands-on experience in financial risk evaluation and operational efficiency improvement. 
              Passionate about leveraging data to optimize business processes, forecast demand, and support 
              strategic decision-making across various industries.
            </p>
          </div>
          
          <div className="space-y-6" data-animate>
            <div>
              <h3 className="section-subtitle">Education</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Purdue University</p>
                  <p className="text-gray-600">M.S. in Business Analytics and Information Management</p>
                  <p className="text-sm text-morandi-blue">Expected Aug 2025</p>
                </div>
                <div>
                  <p className="font-medium">National Taipei University</p>
                  <p className="text-gray-600">B.B.A. in Accountancy</p>
                  <p className="text-sm text-morandi-blue">June 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      
      {/* Experience Section */}
      <SectionContainer id="experience" className="bg-morandi-neutral-lightest">
        <h2 className="section-title" data-animate>Professional Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l border-morandi-neutral-dark pl-1">
            <TimelineItem 
              year="Jan 2025 – Apr 2025" 
              title="Analytics Consultant" 
              company="Wabash Marketplace" 
              description={[
                "Developed optimization models to enhance financial strategy",
                "Conducted scenario analysis using Python",
                "Designed interactive dashboards for key metrics visualization"
              ]}
              data-animate
            />
            
            <TimelineItem 
              year="Sep 2019 – Jun 2021" 
              title="Auditor" 
              company="Deloitte & Touche" 
              description={[
                "Audited 5 public companies, improving compliance and risk evaluation",
                "Utilized Power BI for financial reporting and analysis",
                "Collaborated with cross-functional teams to identify process improvements"
              ]}
              isLast={true}
              data-animate
            />
          </div>
        </div>
      </SectionContainer>
      
      {/* Skills Section */}
      <SectionContainer id="skills" className="bg-white">
        <h2 className="section-title" data-animate>Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-morandi-neutral-lightest p-6 rounded-lg shadow-sm" data-animate>
            <h3 className="section-subtitle">Programming & Tools</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Python</li>
              <li>SQL</li>
              <li>Tableau</li>
              <li>Power BI</li>
              <li>SAP</li>
              <li>SAS EM</li>
            </ul>
          </div>
          
          <div className="bg-morandi-neutral-lightest p-6 rounded-lg shadow-sm" data-animate>
            <h3 className="section-subtitle">Languages</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Mandarin (native)</li>
              <li>English (fluent)</li>
            </ul>
          </div>
          
          <div className="bg-morandi-neutral-lightest p-6 rounded-lg shadow-sm" data-animate>
            <h3 className="section-subtitle">Expertise</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Accounting</li>
              <li>Auditing</li>
              <li>Business Analytics</li>
              <li>Data Visualization</li>
              <li>Financial Analysis</li>
            </ul>
          </div>
        </div>
      </SectionContainer>
      
      {/* Services Section */}
      <SectionContainer id="services" className="bg-morandi-neutral-lightest">
        <h2 className="section-title" data-animate>Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            title="Data Analytics Consulting" 
            description="Transform raw data into actionable insights to drive strategic decisions"
            icon={Eye}
            data-animate
          />
          
          <ServiceCard 
            title="Financial Analysis" 
            description="Comprehensive financial assessment and forecasting for strategic planning"
            icon={FileText}
            data-animate
          />
          
          <ServiceCard 
            title="Operational Efficiency" 
            description="Optimize business processes to reduce costs and improve performance"
            icon={BarChart}
            data-animate
          />
          
          <ServiceCard 
            title="Data Visualization" 
            description="Create intuitive dashboards that make complex data easy to understand"
            icon={Database}
            data-animate
          />
        </div>
      </SectionContainer>
      
      {/* Projects Section */}
      <SectionContainer id="projects" className="bg-white">
        <h2 className="section-title" data-animate>Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Crossroads Classic Analytics Challenge"
            description="NCAA prediction using Tableau & XGBoost"
            tools={["Tableau", "XGBoost", "Python"]}
            outcome="Placed 5th out of 87 teams in the competition"
            data-animate
          />
          
          <ProjectCard
            title="Bankruptcy Prediction (Kaggle)"
            description="Built a predictive model for bankruptcy risk assessment"
            tools={["SAS EM", "Statistical Analysis", "Machine Learning"]}
            outcome="Ranked 18th in the competition with 87% accuracy"
            data-animate
          />
          
          <ProjectCard
            title="Airbnb Pricing Optimization"
            description="Developed and deployed pricing prediction model"
            tools={["XGBoost", "Python", "SQL", "Data Visualization"]}
            outcome="Improved pricing strategy with 92% accuracy rate"
            data-animate
          />
        </div>
      </SectionContainer>
      
      {/* Contact Section */}
      <SectionContainer id="contact" className="bg-morandi-neutral-lightest">
        <h2 className="section-title" data-animate>Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="md:col-span-1 space-y-6" data-animate>
            <h3 className="section-subtitle">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-morandi-blue mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">765-421-0274</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-morandi-blue mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:yschiang86@gmail.com" className="text-gray-600 hover:text-morandi-blue">
                    yschiang86@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Linkedin className="h-5 w-5 text-morandi-blue mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a href="#" className="text-gray-600 hover:text-morandi-blue">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2" data-animate>
            <ContactForm />
          </div>
        </div>
      </SectionContainer>
      
      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="container-custom text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Yi Shiuan (Elsa) Chiang. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
