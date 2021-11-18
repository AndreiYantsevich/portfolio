import github from "assets/github.svg";
import port2 from "assets/portImages/port1.jpg";
import port4 from "assets/portImages/port3.jpg";
import port6 from "assets/portImages/port5.jpg";
import port7 from "assets/portImages/port6.jpg";

export type PortfolioType = {
  id: number;
  category: string;
  link: string;
  icon: string;
  image: string;
  title: string;
};

const portfolios = [
  {
    id: 1,
    category: "Landings",
    link: "www.github.com",
    icon: github,
    image: port2,
    title: "Uber",
  },
  {
    id: 2,
    category: "Javascript",
    link: "www.github.com",
    icon: github,
    image: port4,
    title: "Vanilla Javascript Website",
  },
  {
    id: 3,
    category: "React",
    link: "www.github.com",
    icon: github,
    image: port6,
    title: "Todolist",
  },
  {
    id: 4,
    category: "React",
    link: "www.github.com",
    icon: github,
    image: port7,
    title: "Social Network",
  },
];

export default portfolios;
