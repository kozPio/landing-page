import { portfolioData } from 'src/portfolio';

export interface Skill {
  name: string;
  level: string;
}
[];

interface PortfolioData {
  main: {
    name: string;
    occupation: string;
    description: string;
    image: string;
    bio: string;
    email: string;
    phone: string;
    resumedownload: string;
    social: {
      name: string;
      url: string;
      className: string;
    }[];
  };
  resume: {
    education: {
      school: string;
      degree: string;
      description: string;
    }[];
    skills: Skill[];
  };
  portfolio: {
    projects: {
      title: string;
      category: string;
      image: string;
      url: string;
    }[];
  };
}

export function getportfolioData(): PortfolioData {
  return portfolioData;
}
