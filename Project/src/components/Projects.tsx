import React, { useState } from 'react';
import { ExternalLink, Github, Info, X } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  details: string;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Cloud-Native Microservices Platform",
      description: "Developed a scalable microservices architecture using AWS services and Kubernetes",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      tags: ["AWS", "Kubernetes", "Docker", "Node.js", "MongoDB"],
      github: "https://github.com/saipriya/cloud-platform",
      demo: "https://cloud-platform-demo.com",
      details: "Built a highly available and scalable microservices platform using AWS EKS, implemented service mesh with Istio, and set up automated CI/CD pipelines. The platform handles millions of requests per day with 99.99% uptime."
    },
    {
      id: 2,
      title: "AI-Powered Image Recognition",
      description: "Machine learning system for real-time image recognition and classification",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
      tags: ["Python", "TensorFlow", "OpenCV", "Flask", "React"],
      github: "https://github.com/saipriya/image-recognition",
      demo: "https://image-recognition-demo.com",
      details: "Implemented a deep learning model using TensorFlow for real-time image recognition. The system achieves 95% accuracy in object detection and classification. Built a web interface using React and Flask for easy interaction."
    },
    {
      id: 3,
      title: "Distributed Database System",
      description: "Custom-built distributed database with support for ACID transactions",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      tags: ["Java", "gRPC", "Redis", "PostgreSQL"],
      github: "https://github.com/saipriya/distributed-db",
      demo: "https://distributed-db-demo.com",
      details: "Designed and implemented a distributed database system with support for ACID transactions, replication, and fault tolerance. The system can handle thousands of transactions per second with strong consistency guarantees."
    }
  ];

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                darkMode ? 'bg-gray-800 hover:shadow-blue-500/10' : 'bg-white hover:shadow-xl'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`text-xs px-2 py-1 rounded-full mr-2 mb-2 ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`flex items-center text-sm ${
                      darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                    }`}
                  >
                    <Info size={16} className="mr-1" />
                    Details
                  </button>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`transition-colors ${
                        darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                      }`}
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`transition-colors ${
                        darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                      }`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black bg-opacity-70 transition-opacity"
            onClick={closeModal}
          ></div>
          
          <div 
            className={`relative max-w-2xl w-full rounded-lg shadow-xl overflow-hidden transition-all transform ${
              darkMode ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            <div className="relative h-48 sm:h-64">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={closeModal}
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              
              <div className="flex flex-wrap mb-4">
                {selectedProject.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className={`text-xs px-2 py-1 rounded-full mr-2 mb-2 ${
                      darkMode 
                        ? 'bg-gray-800 text-gray-300' 
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {selectedProject.details}
              </p>
              
              <div className="flex justify-between">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex items-center px-4 py-2 rounded-lg ${
                    darkMode 
                      ? 'bg-gray-800 text-white hover:bg-gray-700' 
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  <Github size={18} className="mr-2" />
                  View Code
                </a>
                
                <a 
                  href={selectedProject.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex items-center px-4 py-2 rounded-lg ${
                    darkMode 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  <ExternalLink size={18} className="mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;