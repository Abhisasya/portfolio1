import React from 'react';
import { Code, Palette, Database, Server, Globe, LineChart } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      id: 1,
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "C++", level: 80 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      id: 2,
      title: "Web Technologies",
      icon: <Globe size={24} />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "HTML/CSS", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 80 }
      ]
    },
    {
      id: 3,
      title: "Cloud & DevOps",
      icon: <Server size={24} />,
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 75 },
        { name: "CI/CD", level: 85 },
        { name: "Terraform", level: 75 }
      ]
    },
    {
      id: 4,
      title: "Databases",
      icon: <Database size={24} />,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "DynamoDB", level: 80 },
        { name: "Cassandra", level: 70 }
      ]
    },
    {
      id: 5,
      title: "Machine Learning",
      icon: <LineChart size={24} />,
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "PyTorch", level: 75 },
        { name: "Scikit-learn", level: 85 },
        { name: "Data Analysis", level: 85 },
        { name: "NLP", level: 75 }
      ]
    },
    {
      id: 6,
      title: "Tools & Others",
      icon: <Palette size={24} />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Agile/Scrum", level: 85 },
        { name: "System Design", level: 80 },
        { name: "Problem Solving", level: 90 },
        { name: "Technical Writing", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.id} 
              className={`p-6 rounded-lg transition-all duration-300 ${
                darkMode ? 'bg-gray-800' : 'bg-white shadow-md'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>
                    {category.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{skill.level}%</span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div 
                        className={`h-2 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;