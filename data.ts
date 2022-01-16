import { RiComputerLine } from "react-icons/ri";
import { SiTestinglibrary } from "react-icons/si";
import { BsCircleFill } from "react-icons/bs";
import { MdDeveloperMode } from "react-icons/md";
import {
  AiOutlineCloudServer,
  AiOutlineApi,
  AiOutlineAntDesign,
} from "react-icons/ai";
import { Project, Service, Skill } from "./types";

export const services: Service[] = [
  {
    title: "Web Development",
    about:
      "I build web applications using the latest technologies like <b>React</b>.",
    Icon: RiComputerLine,
  },
  {
    title: "Amazon Web Services",
    about: "I use <b>AWS</b> to deploy and manage web applications.",
    Icon: AiOutlineCloudServer,
  },
  {
    title: "Build APIs",
    about: "I build APIs using <b>Node.js</b> and <b>express</b>.",
    Icon: AiOutlineApi,
  },
  {
    title: "Competitive coder",
    about:
      "Solves variety of coding problems day to day on <b>Codeforces</b>, <b>Leetcode</b>, etc..",
    Icon: MdDeveloperMode,
  },
  {
    title: "Testing and Debugging",
    about:
      "I use <b>Jest</b>, <b>Cypress</b> and <b>React Testing Library</b>.",
    Icon: SiTestinglibrary,
  },
  {
    title: "UI/UX Designer",
    about:
      "I design user interface and user experience with <b>Figma</b> and <b>Framer</b>.",
    Icon: AiOutlineAntDesign,
  },
];

export const skills: Skill[] = [
  {
    name: "C++",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "Javascript",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "React",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Nodejs",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "MongoDB",
    level: "70%",
    Icon: BsCircleFill,
  },
];

export const tools: Skill[] = [
  {
    name: "Git",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "Figma",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Framer",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "VsCode",
    level: "90%",
    Icon: BsCircleFill,
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Tic-Tac-Toe",
    description: "A simple tic-tac-toe game.",
    image: "/images/tic-tac-toe.png",
    link: "https://tictactoe-react.netlify.app/",
    github_url: "",
    category: ["react", "express"],
    tags: ["tictactoe", "react", "express"],
  },
  {
    id: 2,
    title: "Covid-19 Tracker",
    description: "A simple covid-19 tracker.",
    image: "/images/covid.webp",
    link: "https://covid-19-tracker.netlify.app/",
    github_url: "",
    category: ["mongodb", "express", "nodejs"],
    tags: ["covid", "react", "express"],
  },
  {
    id: 3,
    title: "Todo App",
    description: "A simple todo app.",
    image: "/images/todo.jpg",
    link: "https://todo-app-react.netlify.app/",
    github_url: "",
    category: ["react", "express", "nodejs"],
    tags: ["todo", "react", "express"],
  },
  {
    id: 4,
    title: "Weather App",
    description: "A simple weather app.",
    image: "/images/weather.png",
    link: "https://weather-app-react.netlify.app/",
    github_url: "",
    category: ["react", "express"],
    tags: ["weather", "react", "express"],
  },
  {
    id: 5,
    title: "Calculator",
    description: "A simple calculator.",
    image: "/images/calculator.png",
    link: "https://calculator-react.netlify.app/",
    github_url: "",
    category: ["react", "typescript"],
    tags: ["calculator", "react"],
  },
];
