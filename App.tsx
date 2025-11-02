
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import type { SkillCategory, Experience as ExperienceType, Project, Education as EducationType } from './types';

const App: React.FC = () => {
  const skillsData: SkillCategory[] = [
    { title: 'Languages', skills: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'JavaScript (ES6+)' }, { name: 'PHP' }, { name: 'Java' }] },
    { title: 'Frameworks & Libraries', skills: [{ name: 'React.js' }, { name: 'Next.js' }, { name: 'Laravel' }, { name: 'Bootstrap' }, { name: 'Tailwind CSS' }] },
    { title: 'Tools & Platforms', skills: [{ name: 'Git & GitHub' }, { name: 'VS Code' }, { name: 'Figma' }, { name: 'XAMPP' }, { name: 'Postman' }] },
    { title: 'Databases', skills: [{ name: 'MySQL' }, { name: 'Node.js (Basic)' }] },
    { title: 'Soft Skills', skills: [{ name: 'Adaptability' }, { name: 'Time Management' }, { name: 'Debugging' }, { name: 'Responsive Design' }] },
  ];

  const experienceData: ExperienceType[] = [
     {
      role: 'Full Stack Developer',
      company: 'CodeWeaver IT Solutions',
      duration: 'August 2024 – Present',
      description: 'Currently contributing to the development of dynamic and scalable web applications, working across both frontend and backend stacks to deliver robust solutions.',
    },
    {
      role: 'Web Development Intern',
      company: 'Confederation of Indian Innovators (CII)',
      duration: 'December 2023 – June 2024',
      description: 'Developed and tested RESTful APIs using Postman. Built web-based solutions for startups and innovators, focusing on scalable and responsive designs.',
    },
    {
      role: 'Front-End Development Intern',
      company: 'IGN Software Solutions',
      duration: 'January 2023 – March 2023',
      description: 'Contributed to front-end development using HTML, CSS, and JavaScript. Enhanced website performance by optimizing code and ensuring cross-browser compatibility.',
    },
  ];

  const projectsData: Project[] = [
    {
      title: 'Flipkart Clone',
      description: 'A full-featured e-commerce website clone with product listings, search, and cart functionality. Focused on responsive design and dynamic UI updates.',
      tags: ['React', 'PHP', 'MySQL', 'Tailwind CSS'],
      link: 'https://github.com/gauravboruje',
      image: 'https://picsum.photos/seed/flipkart/400/300'
    },
    {
      title: 'Netflix Clone',
      description: 'A responsive Netflix-like landing page featuring a modern UI with video backgrounds and styled components to mimic the streaming service experience.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/gauravboruje',
      image: 'https://picsum.photos/seed/netflix/400/300'
    },
    {
      title: 'FilmOmatic App',
      description: 'A conceptual photo and video editing application UI, designed to provide an intuitive and powerful user experience for creative media editing.',
      tags: ['UI/UX', 'Figma'],
      link: 'https://github.com/gauravboruje',
      image: 'https://picsum.photos/seed/filmomatic/400/300'
    },
    {
      title: 'Eduwings IRP Website',
      description: 'An institute resource planning website for managing academic and administrative tasks, providing a centralized platform for students and faculty.',
      tags: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
      link: 'https://github.com/gauravboruje',
      image: 'https://picsum.photos/seed/eduwings/400/300'
    },
  ];

  const educationData: EducationType[] = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Rashtrasant Tukadoji Maharaj Nagpur University',
      duration: '2023 – 2025',
    },
    {
      degree: 'Bachelor of Commerce in Computer Application (BCCA)',
      institution: 'Dr. Ambedkar Institute of Management Studies',
      duration: '2020 – 2023',
    },
  ];


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-6 md:px-12 py-8">
        <Hero />
        <Skills data={skillsData} />
        <Experience data={experienceData} />
        <Projects data={projectsData} />
        <Education data={educationData} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
