
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Normally here we would submit to a backend service
    // But for now we'll just simulate a submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-morandi-blue-dark mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-morandi-neutral rounded-md focus:outline-none focus:ring-1 focus:ring-morandi-blue"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-morandi-blue-dark mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-morandi-neutral rounded-md focus:outline-none focus:ring-1 focus:ring-morandi-blue"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-morandi-blue-dark mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full p-3 border border-morandi-neutral rounded-md focus:outline-none focus:ring-1 focus:ring-morandi-blue"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-morandi-blue-dark mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full p-3 border border-morandi-neutral rounded-md focus:outline-none focus:ring-1 focus:ring-morandi-blue"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-morandi-blue text-white px-6 py-3 rounded-md hover:bg-morandi-blue-dark transition-colors duration-300 disabled:opacity-70 font-montserrat"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
