import cloverLogo from '../../assets/logos/clover.png';
import darpaLogo from '../../assets/logos/darpa.png';
import learnDialogueLogo from '../../assets/logos/learn_dialogue.webp';
import dnbLogo from '../../assets/logos/dnb.png';
import ufaaLogo from '../../assets/logos/UFAA.png';
import garrettLogo from '../../assets/logos/Garrett_Laboratory.jpg';

export const profile = {
  name: 'Amogh Agarwal',
  nickname: 'Moggo',
  email: 'amoghagarwal.dev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/amogh-agarwal/',
  description:
    'Amogh Agarwal’s personal website. Software engineering, data science, and research.',
};

export const experience = [
  {
    role: 'Senior Data Scientist',
    company: 'Clover',
    logo: cloverLogo,
    logoStyle: 'standard',
    period: 'July 2025 — Present',
    description:
      'Developing and deploying machine learning models for real-time payments risk monitoring and credit underwriting decision engines.',
    tags: ['Machine learning', 'Payments risk', 'Credit underwriting'],
  },
  {
    role: 'ML Research Engineer (Computer Vision)',
    company: 'The Applied Research Laboratory (DARPA)',
    logo: darpaLogo,
    logoStyle: 'darpa',
    period: 'May 2023 — June 2025',
    description:
      'Researched and implemented novel computer vision algorithms for autonomous vehicles.',
    tags: ['Machine learning', 'Computer vision', 'Autonomous vehicles'],
  },
  {
    role: 'Mobile Software Engineer',
    company: 'LearnDialogue Laboratory',
    logo: learnDialogueLogo,
    logoStyle: 'learn',
    period: 'Aug 2022 — May 2023',
    description:
      'Developed a mobile app for sports science research and integrated an LSTM model to optimize workouts in real time.',
    tags: ['Mobile development', 'Sports science', 'LSTM'],
  },
  {
    role: 'Data Scientist',
    company: 'Dun & Bradstreet',
    logo: dnbLogo,
    logoStyle: 'standard',
    period: 'May 2022 — Dec 2022',
    description:
      'Created machine learning models and data visualizations for business credit scoring, helping assess credit risk and communicate model insights.',
    tags: ['Machine learning', 'Credit scoring', 'Data visualization'],
  },
  {
    role: 'Predictive Modeler (Basketball)',
    company: 'UF Athletic Association',
    logo: ufaaLogo,
    logoStyle: 'standard',
    period: 'May 2021 — May 2022',
    description:
      'Analyzed basketball player and team performance data, built predictive models, and created visualizations to inform game strategy, player development, and coaching decisions.',
    tags: ['Predictive modeling', 'Basketball analytics', 'Data visualization'],
  },
  {
    role: 'Statistical Research Analyst',
    company: 'Garrett Laboratory',
    logo: garrettLogo,
    logoStyle: 'standard',
    period: 'Aug 2020 — May 2021',
    description:
      'Conducting statistical analysis, developing research methodologies, and collaborating with the research team on data collection and analysis.',
    tags: ['R', 'Statistical analysis', 'Research methods'],
  },
];

export const toolkit = [
  {
    label: 'Interfaces',
    tools: ['Astro', 'React', 'TypeScript', 'HTML & CSS'],
  },
  { label: 'Systems', tools: ['Node.js', 'Python', 'AWS'] },
  {
    label: 'Exploration',
    tools: ['Machine learning', 'Data visualization', 'R', 'Statistics'],
  },
];
