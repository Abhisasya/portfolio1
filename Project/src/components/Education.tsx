import React from 'react';
import { School, Calendar } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const educationData = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "Auburn University at Montgomery",
      location: "Montgomery, AL",
      years: "2023 - 2025",
      description: "Specialized in Software Engineering ",
      achievements: [
        "GPA: 3.24/4.0",
  
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Technology in Computer Science",
      institution: "Kakatiya Institute of Technology and sciences",
      location: "Warangal, India",
      years: "2017 - 2021",
      description: "Major in Computer Science with focus on software development",
      achievements: [
        "First Class with Distinction",
        "Led technical team in college fest",
        "Won first prize in national coding competition"
      ]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>

        <div className="space-y-12">
          {educationData.map((education) => (
            <div 
              key={education.id}
              className={`p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 ${
                darkMode ? 'bg-gray-800 hover:shadow-blue-500/10' : 'bg-white hover:shadow-xl'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center">
                <div className={`p-4 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mb-4 md:mb-0 md:mr-6`}>
                  <School size={28} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{education.degree}</h3>
                  <h4 className="text-lg font-medium mb-2">{education.institution}</h4>
                  <div className="flex items-center mb-3">
                    <Calendar size={16} className={`mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{education.years}</span>
                    <span className={`mx-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>•</span>
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{education.location}</span>
                  </div>
                  <p className={`mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{education.description}</p>
                  
                  <div className="mt-4">
                    <h5 className="font-medium mb-2">Achievements:</h5>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      {education.achievements.map((achievement, index) => (
                        <li key={index} className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;