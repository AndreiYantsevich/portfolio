import github from "assets/github.svg";
import port1 from "assets/portImages/maya-1.jpg";
import port2 from "assets/portImages/port1.jpg";
import port3 from "assets/portImages/port2.jpg";
import port4 from "assets/portImages/port3.jpg";
import port6 from "assets/portImages/port5.jpg";
import port7 from "assets/portImages/port6.jpg";

export type PortfolioType = {
  id: number;
  category: string;
  link: string;
  icon: any;
  image: any;
  title: string;
};

const portfolios = [
  {
    id: 1,
    category: "Animation",
    link: "www.github.com",
    icon: github,
    image: port1,
    title: "Autodesk Maya",
  },
  {
    id: 2,
    category: "Python",
    link: "www.github.com",
    icon: github,
    image: port2,
    title: "Python Web Scrapping",
  },
  {
    id: 3,
    category: "Animation",
    link: "www.github.com",
    icon: github,
    image: port3,
    title: "Autodesk Maya",
  },
  {
    id: 4,
    category: "Javascript",
    link: "www.github.com",
    icon: github,
    image: port4,
    title: "Vanilla Javascript Website",
  },
  {
    id: 5,
    category: "React Js",
    link: "www.github.com",
    icon: github,
    image: port6,
    title: "Getting Started With React",
  },
  {
    id: 6,
    category: "React Js",
    link: "www.github.com",
    icon: github,
    image: port7,
    title: "Vanilla Javascript Website",
  },
  {
    id: 7,
    category: "Test Port",
    link: "www.github.com",
    icon: github,
    image: port4,
    title: "Vanilla Javascript Website",
  },
];

export default portfolios;
