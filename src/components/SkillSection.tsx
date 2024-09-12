import React from 'react';
import { techStack } from '../data/techStack';

const SkillsSection: React.FC = () => {
    return (
        <section className="container mx-auto py-16 h-[105vh] flex flex-col items-around justify-around">
            <div className="space-y-16 flex flex-col mt-8">
                <h2 className="text-6xl font-bold text-left mb-10 text-gray-700">Tech-Stack</h2>

                <div className='bg-white px-14 py-8 rounded-xl shadow-md'>
                    {techStack.map((category, catIndex) => (
                        <div key={catIndex} className="mb-16">
                            <h3 className="text-4xl font-semibold mb-6">{category.category}</h3>

                            {/* Grid for each tech stack */}
                            <div className="grid grid-cols-2 xs:grid-cols-4 md:grid-cols-7 gap-6 justify-items-center">
                                {category.stack.map((tech, techIndex) => (
                                    <div key={techIndex} className="flex flex-col items-center">
                                        <img src={tech.icon} alt={tech.name} className="w-20 h-20 mb-2" />
                                        <p className="text-lg font-semibold text-center">{tech.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div></div>
        </section>
    );
};

export default SkillsSection;
