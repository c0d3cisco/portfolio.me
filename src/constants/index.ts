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
  lima,
  hhouse,
  usArmy,
  utk,
  bz1,
  threejs,
  // hh1,
  gcu,
  hh2,
  bootstrap,
  chatGPT,
  express,
  materialUI,
  netlify,
  sass,
  sqlite,
  vite,
  vscode

} from "../assets/index.ts";

export const navLinks = [
  {
    id: "about",
    title: ["About", "Sobre mi"]
  },
  {
    id: "experience",
    title: ["Experience", "Experiencia"],
  },
  {
    id: "tech",
    title: ["Tech", "Tecnología"],
  },
  {
    id: "work",
    title: ["Work", "Trabajo"],
  },
  {
    id: "contact",
    title: ["Contact", "Contacto"],
  },
];

const services = [
  {
    title: ["Web Developer", "Desarrollador Web"],
    icon: web,
  },
  {
    title: ["Full Stack", "Full Stack"],
    icon: mobile,
  },
  {
    title: ["Backend Developer", "Desarrollador Backend"],
    icon: backend,
  },
  {
    title: ["Process Optimization", "Optimización de procesos"],
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
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "ChatGPT",
    icon: chatGPT,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Material UI",
    icon: materialUI,
  },
  {
    name: "Netlify",
    icon: netlify,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "SQLite",
    icon: sqlite,
  },
  {
    name: "Vite",
    icon: vite,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
];

const experiences = [
  {
    title: ["B.S. Biochemistry ", "B.S. Bioquímica"],
    company_name: ["University of Tennessee, Knoxville", "Universidad de Tennessee, Knoxville"],
    icon: utk,
    iconBg: "#FF8200",
    date: "Aug 2009 - May 2013",
    hashTags: [['#leadership', '#adaptability'], ['#liderazgo', '#adaptabilidad']],
    points: [[], []],
  },
  {
    title: ["Healthcare Specialist (68W), Sergeant", "Especialista en Salud (68W), Sargento"],
    company_name: ["U.S. Army", "Ejército de los EE. UU."],
    icon: usArmy,
    iconBg: "#000",
    date: "Jun 2013 - Jun 2017",
    hashTags: [['#leadership', '#adaptability'], ['#liderazgo', '#adaptabilidad']],
    points: [[
      "Developed protocols for more efficient medical supply and evacuation routes, resulting in decreased emergency response time and increased mission readiness used by 80 soldiers in Afghanistan.",
      "Organized and executed Combat Lifesaver courses by coordinating schedules with multiple agencies, resulting in 450+ soldiers obtaining medical certifications.",
    ], [
      "Desarrolle protocolos para rutas de evacuación y suministro médico más eficientes, lo que resultó en una disminución del tiempo de respuesta de emergencia y una mayor preparación para la misión utilizada por 80 soldados en Afganistán.",
      "Organicé y ejecuté cursos de Combat Lifesaver coordinando cronogramas con múltiples agencias, lo que resultó en que más de 450 soldados obtuvieran certificaciones médicas.",
    ]],
  },
  {
    title: ["M.S. General Psychology", "M.S. Psychología General"],
    company_name: ["Grand Canyon University", "Universidad Grand Canyon"],
    icon: gcu,
    iconBg: "#F7F7F7",
    date: "Aug 2015 - Jan 2017",
    hashTags: [[], []],
    points: [[], []],
  },
  {
    title: ["B.S. Mechanical Engineering", "B.S. Ingeniería Mecánica"],
    company_name: ["University of Tennessee, Knoxville", "Universidad de Tennessee, Knoxville"],
    icon: utk,
    iconBg: "#FF8200",
    date: "Aug 2017 - May 2020",
    hashTags: [[], []],
    points: [[], []],
  },
  {
    title: ["Computer Solutions Teacher Assistant ", "Asistente de Profesor de Soluciones Informáticas"],
    company_name: ["University of Tennessee, Knoxville", "Universidad de Tennessee, Knoxville"],
    icon: utk,
    iconBg: "#FF8200",
    date: "Aug 2018 - May 2020",
    hashTags: [['#mentorship',], []],
    points: [[
      "Maintained uninterrupted laboratory curriculum by developing repair detection methods that became standard practice to ensure measurement accuracy and functionality of over 30 different types of Arduino sensors.",
      "Assisted with discussion sections, review sessions, or laboratory sessions for over 250 students to use MATLAB to solve real-world engineering problems and increase their coding capabilities.",
    ], [
      "Mantuve un plan de estudios de laboratorio ininterrumpido mediante el desarrollo de métodos de detección de reparaciones que se convirtieron en una práctica estándar para garantizar la precisión de las mediciones y la funcionalidad de más de 30 tipos diferentes de sensores Arduino.",
      "Ayudé con secciones de discusión, sesiones de revisión o sesiones de laboratorio para que más de 250 estudiantes usaran MATLAB para resolver problemas de ingeniería del mundo real y aumentar sus capacidades de codificación.",
    ]],
  },
  {
    title: ["Digital Process Engineer", "Ingeniero de Procesos Digitales"],
    company_name: ["Lima Corporate", "Lima Corporate"],
    icon: lima,
    iconBg: "#FFFFFF",
    date: "May 2020 - Apr 2023",
    hashTags: [[], []],
    points: [[
      "Reduced the digital preparation time of 3D-printed surgical instruments by 93% through conceptualizing and testing new digital tools, streamlining existing processes, and integrating customer support into the manufacturing process.",
      "Continuously maintained and optimized procedural documentation by process mapping existing digital manufacturing infrastructure to target bottlenecks and redundancies while ensuring FDA compliance through process failure analyses.",
      "Advanced the development and on-time deployment of various features to an in-house 3D-model processing software by writing technical documentation (i.e., user and testing requirements and verification and validation reports).",
    ], [
      "Redujimos el tiempo de preparación digital de instrumentos quirúrgicos impresos en 3D en un 93% mediante la conceptualización y prueba de nuevas herramientas digitales, la optimización de los procesos existentes y la integración de la atención al cliente en el proceso de fabricación",
      "Documentación de procedimientos mantenida y optimizada continuamente mediante el mapeo de procesos de la infraestructura de fabricación digital existente para abordar cuellos de botella y redundancias, al tiempo que se garantiza el cumplimiento de la FDA a través de análisis de fallas de procesos",
      "Avanzó en el desarrollo y la implementación oportuna de varias funciones en un software interno de procesamiento de modelos 3D mediante la redacción de documentación técnica (es decir, requisitos de prueba y de usuario e informes de verificación y validación)",
    ]],
  },
  {
    title: ["Full Stack Developer", "Desarrollador Full Stack"],
    company_name: ["Helen House", "Helen House"],
    icon: hhouse,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Present",
    hashTags: [[], []],
    points: [[
      "UX/UI developer of data dashboard using React and Materialize UI to visually represent appointment data and SQL databases based on client needs.",
      "Implemented a scalable Node.js API interface with secure 0Auth2.0 authentication and authorization capable of managing the operational data.",
      "Established technical alignment within the team by decomposing customer needs for a Software-as-a-Service solution into technical requirements and specifications utilizing Kanban agile methodologies.",
    ], [
      "Desarrollador UX/UI de panel de datos utilizando React y Materialise UI para representar visualmente datos de citas y bases de datos SQL según las necesidades del cliente.",
      "Se implementó una interfaz API Node.js escalable con autenticación y autorización segura 0Auth2.0 capaz de administrar los datos operativos.",
      "Establecí una alineación técnica dentro del equipo al descomponer las necesidades del cliente para una solución de software como servicio en requisitos y especificaciones técnicas utilizando metodologías ágiles Kanban",
    ]],
  },
];

const projects = [
  {
    name: ["Helen House Portal", "Portal de Helen House"],
    description:
      ["Web-based SaaS for Helen House, a rural LGBTQ+ youth center, that streamlines data collection, enhances security, and provides analytics for grant applications by digitizing paper records.",
        "Un servicio de web para Helen House, un centro juvenil LGBTQ+ rural, que agiliza la recopilación de datos, mejora la seguridad y proporciona análisis para solicitudes de subvenciones mediante la digitalización de registros en papel",
      ],
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
    source_code_link: "https://github.com/c0d3cisco/hh-frontend",
  },
  {
    name: ["ByteSize Adventurez", "ByteSize Adventurez"],
    description:
      ["A simple and intuitive application that provides children with a variety of exciting activities that promote cognitive, social, and emotional development.",
        "Una aplicación sencilla e intuitiva que proporciona a los niños una variedad de actividades emocionantes que promueven el desarrollo cognitivo, social y emocional.",
      ],
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
    source_code_link: "https://github.com/code201d98-Team1/ByteSizeAdventurez",
  },
];

export { services, technologies, experiences, projects };