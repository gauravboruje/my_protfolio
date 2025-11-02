
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12 py-6 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} Gaurav Boruje. All rights reserved.</p>
        <p className="text-sm mt-1">Designed & Built with React and Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
