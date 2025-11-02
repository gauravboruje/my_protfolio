
import React from 'react';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col justify-center py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          Gaurav Boruje
        </h1>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-300">
          Full Stack Developer
        </h2>
        <p className="mt-6 text-lg text-slate-400 max-w-2xl">
          Enthusiastic developer with a passion for crafting modern UI/UX and building scalable web solutions. Eager to apply my skills in a dynamic software development team.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a href="https://github.com/gauravboruje" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors duration-300">
            <GitHubIcon className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/gaurav-boruje/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors duration-300">
            <LinkedInIcon className="w-8 h-8" />
          </a>
          <a href="#contact" className="ml-4 inline-block bg-sky-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-sky-500 transition-all duration-300 shadow-lg shadow-sky-600/30">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
