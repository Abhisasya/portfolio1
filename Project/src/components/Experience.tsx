import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experienceData = [
    {
      id: 1,
      position: "Application Development Analyst",
      company: "Accenture",
      location: "India", // Update location if needed
      type: "Full-time",
      years: "Aug 2021 – Dec 2023",
      description:
        "Worked as a Cloud Technical Consultant (CTC) in an SAP BASIS Administration project. Handled SAP product builds for global cloud customers across AWS, Azure, GCP, and HEC data centers.",
      achievements: [
        "Managed ABAP/JAVA Stack Administration, S/4 HANA, and non-NetWeaver SAP products",
        "Installed and configured SAP components: SAC Agent, CPI-DS Agent, Optimization Server, TREX, IDM, Content Server",
        "Worked with databases: HANA DB, ASE, MaxDB; performed MaxDB upgrades and SAP JVM installations/upgrades",
        "Performed patching for BOBI, Lumira, BODS, and additional language installations",
        "Led Post-Migration and Cutover activities as Backup SPOC and Shift Lead",
        "Handled lifecycle activities for PIP/QCIP systems and released builds after QA"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-opacity-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>

        <div className="space-y-12">
          {experienceData.map((experience) => (
            <div 
              key={experience.id} 
              className={`p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 ${
                darkMode ? 'bg-gray-800 hover:shadow-blue-500/10' : 'bg-white hover:shadow-xl'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center">
                <div className={`p-4 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mb-4 md:mb-0 md:mr-6`}>
                  <Briefcase size={28} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{experience.position}</h3>
                  <h4 className="text-lg font-medium mb-2">{experience.company}</h4>
                  
                  <div className="flex flex-wrap items-center mb-3">
                    <div className="flex items-center mr-4 mb-2">
                      <Calendar size={16} className={`mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{experience.years}</span>
                    </div>
                    <div className="flex items-center mr-4 mb-2">
                      <MapPin size={16} className={`mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{experience.location}</span>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full mb-2 ${
                      darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {experience.type}
                    </span>
                  </div>
                  
                  <p className={`mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{experience.description}</p>
                  
                  <div className="mt-4">
                    <h5 className="font-medium mb-2">Key Achievements:</h5>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      {experience.achievements.map((achievement, index) => (
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

export default Experience;
