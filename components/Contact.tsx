
import React from 'react';
import { MailIcon } from './icons/MailIcon';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
      <p className="max-w-2xl mx-auto text-slate-400 mb-8">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
      </p>
      <div className="flex justify-center items-center gap-6 mb-8">
        <a href="mailto:gauravboruje7@gmail.com" className="text-slate-400 hover:text-sky-400 transition-colors duration-300 p-2">
          <MailIcon className="w-8 h-8" />
        </a>
        <a href="https://github.com/gauravboruje" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors duration-300 p-2">
          <GitHubIcon className="w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com/in/gaurav-boruje/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors duration-300 p-2">
          <LinkedInIcon className="w-8 h-8" />
        </a>
      </div>
      <a href="mailto:gauravboruje7@gmail.com" className="inline-block bg-sky-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-sky-500 transition-all duration-300 shadow-lg shadow-sky-600/30">
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
