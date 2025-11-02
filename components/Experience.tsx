
import React from 'react';
import type { Experience as ExperienceType } from '../types';

interface ExperienceProps {
  data: ExperienceType[];
}

const ExperienceCard: React.FC<{ item: ExperienceType; isLast: boolean }> = ({ item, isLast }) => (
  <div className="relative pl-10">
    <div className="absolute left-0 top-1 w-4 h-4 bg-sky-500 rounded-full border-4 border-slate-950"></div>
    {!isLast && <div className="absolute left-[7px] top-4 h-full w-0.5 bg-slate-700"></div>}
    
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-8 transition-all duration-300 hover:border-sky-500 hover:shadow-2xl hover:shadow-sky-500/10">
      <p className="text-sm font-medium text-slate-400 mb-1">{item.duration}</p>
      <h3 className="text-xl font-bold text-white">{item.role}</h3>
      <h4 className="text-md font-semibold text-sky-400 mb-3">{item.company}</h4>
      <p className="text-slate-400">{item.description}</p>
    </div>
  </div>
);

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Work Experience</h2>
      <div className="max-w-3xl mx-auto">
        {data.map((item, index) => (
          <ExperienceCard key={item.company} item={item} isLast={index === data.length - 1} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
