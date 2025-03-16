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
  docker,
  j23,
  coder,
  sg,
  ecom,
  tierraps,
  threejs,
} from "../assets";

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
    title: "Fullstack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Advanced Associate's Degree in System Analysis",
    company_name: "Instituto Superior Juan XXIII",
    icon: j23,
    iconBg: "#383E56",
    date: "March 2022 - Present",
    points: [
      "Analyzing business requirements and designing efficient IT solutions to improve processes and decision-making.",
      "Developing, implementing, and maintaining information systems to meet organizational needs.",
      "Collaborating with stakeholders, developers, and IT teams to ensure system functionality and user satisfaction.",
      "Evaluating system performance, troubleshooting issues, and recommending improvements for scalability and security.",
    ],
  },
  {
    title: "React Frontend Developer",
    company_name: "Coderhouse",
    icon: coder,
    iconBg: "#E6DEDD",
    date: "August 2024 - January 2025",
    points: [
      "Building modern, responsive, and accessible websites using HTML, CSS, and JavaScript.",
      "Developing dynamic, scalable, and high-performance web applications with React.js and related technologies.",
      "Using Git and GitHub for version control, collaboration, and managing code repositories efficiently.",
      "Implementing best practices in UI/UX design, state management, and performance optimization.",
      "Working with APIs, handling asynchronous data, and integrating third-party libraries.",
      "Gaining the skills to work as a Frontend Developer in various industries, collaborating in agile teams.",
    ],
  },
];

const projects = [
  {
    name: "Serigrafia Gomez",
    description:
      "Full-stack application for Serigrafía Gomez. The frontend is built with React, HTML, and CSS (using SASS), while the backend is powered by Node.js and Express.js, providing a dynamic experience that integrates real-time data management for products and customers. The database used for this project is MySQL, allowing for structured data storage and retrieval.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: sg,
    source_code_link: "https://github.com/thiagoredondo/SG",
  },
  {
    name: " E-Commerce",
    description:
      "E-commerce platform designed to provide customers with a smooth and optimized shopping experience. The site is fully responsive and optimized to ensure intuitive navigation from any device. Integration with Firebase allows customers to authenticate and place orders securely.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: ecom,
    source_code_link: "https://github.com/thiagoredondo/Redondo-Thiago-React",
  },
  {
    name: "Tierra Productividad Sustentable",
    description:
      "Website for Tierra Productividad Sustentable, a fully responsive platform designed for seamless navigation and optimal performance. It features a modern, user-friendly interface that highlights the company’s sustainability services while implementing SEO best practices for better visibility.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
    ],
    image: tierraps,
    source_code_link: "https://github.com/thiagoredondo/Tierra-Productividad-Sustentable",
  },
];

export { services, technologies, experiences, projects };
