import React from 'react';
import { techStack } from '../data/techStack';

const SkillsSection: React.FC = () => {
  return (
    <section className="container mx-auto py-16 flex flex-col items-center justify-center px-4 sm:px-8 lg:min-h-[110vh] min-h-screen lg:space-y-16 md:space-y-10 space-y-6">
      <h2 className="text-3xl md:text-6xl font-bold text-left mb-10 text-gray-700">Tech-Stack</h2>

      <div className="bg-white px-6 sm:px-14 py-8 rounded-xl shadow-md w-full max-w-screen-lg">
        {techStack.map((category, catIndex) => (
          <div key={catIndex} className="mb-12">
            <h3 className="text-2xl sm:text-4xl font-semibold mb-6">{category.category}</h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              {category.stack.map((tech, techIndex) => (
                <div key={techIndex} className="flex flex-col items-center">
                  <img src={tech.icon} alt={tech.name} className="w-10 sm:w-16 h-10 sm:h-16 mb-2" />
                  <p className="text-md sm:text-lg font-semibold text-center">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
