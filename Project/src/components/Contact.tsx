import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear the error for this field as user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      // In a real application, you would send the form data to a server here
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className={`block mb-2 font-medium ${errors.name ? 'text-red-500' : ''}`}
                >
                  {errors.name || 'Name'}
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 focus:border-blue-500' 
                      : 'bg-white border-gray-300 focus:border-blue-600'
                  } border focus:outline-none transition-colors ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className={`block mb-2 font-medium ${errors.email ? 'text-red-500' : ''}`}
                >
                  {errors.email || 'Email'}
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 focus:border-blue-500' 
                      : 'bg-white border-gray-300 focus:border-blue-600'
                  } border focus:outline-none transition-colors ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject (optional)
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 focus:border-blue-500' 
                      : 'bg-white border-gray-300 focus:border-blue-600'
                  } border focus:outline-none transition-colors`}
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className={`block mb-2 font-medium ${errors.message ? 'text-red-500' : ''}`}
                >
                  {errors.message || 'Message'}
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={5} 
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 focus:border-blue-500' 
                      : 'bg-white border-gray-300 focus:border-blue-600'
                  } border focus:outline-none transition-colors ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`px-8 py-3 rounded-lg font-medium flex items-center ${
                  darkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                } transition-colors duration-300`}
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
              
              {submitted && (
                <div className={`mt-4 p-3 rounded-lg ${
                  darkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-800'
                }`}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
          
          <div className="order-1 md:order-2">
            <div className={`h-full p-8 rounded-lg ${
              darkMode ? 'bg-gray-800' : 'bg-white shadow-md'
            }`}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mr-4`}>
                    <Mail size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:balasankulaabhi@gmail.com" 
                      className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
                    >
                      balasankulaabhi@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mr-4`}>
                    <Phone size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a 
                      href="tel:+16599108624" 
                      className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
                    >
                      +1 (659) 910-8624
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mr-4`}>
                    <MapPin size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      Montogomery, Alabama<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium mb-3">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Abhisasya" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`p-3 rounded-full ${
                      darkMode 
                        ? 'bg-gray-700 hover:bg-gray-600' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    } transition-colors duration-300`}
                  >
                    <Github size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/balasankula-abhisasya91392b1b3" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`p-3 rounded-full ${
                      darkMode 
                        ? 'bg-gray-700 hover:bg-gray-600' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    } transition-colors duration-300`}
                  >
                    <Linkedin size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                  </a>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;