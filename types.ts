
export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
}
