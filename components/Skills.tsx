import React from 'react';
import type { SkillCategory } from '../types';
import { CodeIcon } from './icons/CodeIcon';
import { LanguageIcon } from './icons/LanguageIcon';
import { FrameworkIcon } from './icons/FrameworkIcon';
import { ToolIcon } from './icons/ToolIcon';
import { DatabaseIcon } from './icons/DatabaseIcon';
import { SparklesIcon } from './icons/SparklesIcon';


interface SkillsProps {
  data: SkillCategory[];
}

const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  'Languages': LanguageIcon,
  'Frameworks & Libraries': FrameworkIcon,
  'Tools & Platforms': ToolIcon,
  'Databases': DatabaseIcon,
  'Soft Skills': SparklesIcon,
};


const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((category) => {
          const IconComponent = iconMap[category.title] || CodeIcon;
          return (
            <div key={category.title} className="bg-slate-900 p-6 rounded-lg border border-slate-800 shadow-lg transition-all duration-300 hover:border-sky-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/10">
              <h3 className="text-xl font-semibold text-sky-400 mb-4 flex items-center gap-3">
                <IconComponent className="w-7 h-7" />
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="bg-slate-800 text-slate-300 text-sm font-medium px-3 py-1.5 rounded-full">
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;