
import React from 'react';
import type { Education as EducationType } from '../types';

interface EducationProps {
  data: EducationType[];
}

const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Education</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {data.map((edu) => (
          <div key={edu.degree} className="bg-slate-900 p-6 rounded-lg border border-slate-800 shadow-lg">
            <p className="text-sm font-medium text-slate-400">{edu.duration}</p>
            <h3 className="text-xl font-bold text-white mt-1">{edu.degree}</h3>
            <p className="text-md text-sky-400">{edu.institution}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
