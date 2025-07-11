import {
  DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejs, DiMongodb,
  DiDjango, DiJava, DiPython, DiGit, DiGithubBadge, DiVisualstudio,
} from "react-icons/di";
import {
  SiRedux, SiTailwindcss, SiBootstrap, SiFigma, SiFirebase,
  SiMysql, SiPostgresql, SiCplusplus, SiC, SiTypescript,
  SiPostman, SiVercel, SiNetlify, SiExpress
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";

export const skillsData = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: DiHtml5, level: 90 },
      { name: 'CSS', icon: DiCss3, level: 85 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 80 },
      { name: 'JavaScript', icon: DiJavascript1, level: 85 },
      { name: 'React JS (Learning)', icon: DiReact, level: 70 },
      { name: 'Redux (Learning)', icon: SiRedux, level: 60 },
      { name: 'Bootstrap', icon: SiBootstrap, level: 80 },
      { name: 'Figma', icon: SiFigma, level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Django', icon: DiDjango, level: 90 },
      { name: 'MySQL', icon: SiMysql, level: 75 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 70 },
      { name: 'MongoDB', icon: DiMongodb, level: 70 },
      { name: 'Node JS (Learning)', icon: DiNodejs, level: 65 },
      { name: 'Express JS (Learning)', icon: SiExpress, level: 60 },
      { name: 'Firebase (Basic)', icon: SiFirebase, level: 50 },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', icon: SiC, level: 80 },
      { name: 'C++', icon: SiCplusplus, level: 85 },
      { name: 'Java', icon: DiJava, level: 75 },
      { name: 'Python', icon: DiPython, level: 95 },
      { name: 'C-Sharp', icon: TbBrandCSharp, level: 65 },
      { name: 'JavaScript', icon: DiJavascript1, level: 85 },
      { name: 'TypeScript', icon: SiTypescript, level: 70 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: DiGit, level: 90 },
      { name: 'GitHub', icon: DiGithubBadge, level: 85 },
      { name: 'VS Code', icon: DiVisualstudio, level: 90 },
      { name: 'Postman', icon: SiPostman, level: 80 },
      { name: 'Vercel', icon: SiVercel, level: 75 },
      { name: 'Netlify', icon: SiNetlify, level: 70 },
      { name: 'Figma', icon: SiFigma, level: 85 },
    ],
  },
];
