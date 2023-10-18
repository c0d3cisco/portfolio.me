import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  // docker,
  lima,
  hhouse,
  usArmy,
  utk,
  bz1,
  threejs,
  // hh1,
  hh2,
} from "../assets/index.ts";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Process Optimization",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Healthcare Specialist (68W), Sergeant ",
    company_name: "U.S. Army",
    icon: usArmy,
    iconBg: "#000",
    date: "Jan 2021 - Feb 2022",
    hashTags: ['#leadership', '#adaptability'],
    points: [
      "Developed protocols for more efficient medical supply and evacuation routes, resulting in decreased emergency response time and increased mission readiness used by 80 soldiers in Afghanistan.",
      "Organized and executed Combat Lifesaver courses by coordinating schedules with multiple agencies, resulting in 450+ soldiers obtaining medical certifications.",
    ],
  },
  {
    title: "Computer Solutions Teacher Assistant ",
    company_name: "UTK",
    icon: utk,
    iconBg: "#FF8200",
    date: "Aug 2018 - May 2020",
    hashTags: ['#mentorship',],
    points: [
      "Maintained uninterrupted laboratory curriculum by developing repair detection methods that became standard practice to ensure measurement accuracy and functionality of over 30 different types of Arduino sensors.",
      "Assisted with discussion sections, review sessions, or laboratory sessions for over 250 students to use MATLAB to solve real-world engineering problems and increase their coding capabilities.",
    ],
  },
  {
    title: "Digital Process Engineer",
    company_name: "Lima Corporate",
    icon: lima,
    iconBg: "#FFFFFF",
    date: "May 2020 - Apr 2023",
    points: [
      "Reduced the digital preparation time of 3D-printed surgical instruments by 93% through conceptualizing and testing new digital tools, streamlining existing processes, and integrating customer support into the manufacturing process.",
      "Continuously maintained and optimized procedural documentation by process mapping existing digital manufacturing infrastructure to target bottlenecks and redundancies while ensuring FDA compliance through process failure analyses.", 
      "Advanced the development and on-time deployment of various features to an in-house 3D-model processing software by writing technical documentation (i.e., user and testing requirements and verification and validation reports).",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Helen House",
    icon: hhouse,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "UX/UI developer of data dashboard using React and Materialize UI to visually represent appointment data and SQL databases based on client needs.",
      "Implemented a scalable Node.js API interface with secure 0Auth2.0 authentication and authorization capable of managing the operational data.",
      "Established technical alignment within the team by decomposing customer needs for a Software-as-a-Service solution into technical requirements and specifications utilizing Kanban agile methodologies.",
    ],
  },
];

const projects = [
  {
    name: "Helen House Portal",
    description:
      "Web-based SaaS for Helen House, a rural LGBTQ+ youth center, that streamlines data collection, enhances security, and provides analytics for grant applications by digitizing paper records.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "0Auth2.0",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: [hh2],
    source_code_link: "https://github.com/",
  },
  {
    name: "ByteSize Adventurez ",
    description:
      "A simple and intuitive application that provides children with a variety of exciting activities that promote cognitive, social, and emotional development.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],

    image: [bz1],
    source_code_link: "https://code201d98-team1.github.io/ByteSizeAdventurez/",
  },
];

export { services, technologies, experiences, projects };