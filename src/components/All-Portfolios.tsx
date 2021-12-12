import github from 'assets/svg/github.svg';
import uber from 'assets/project-images/uber.jpg';
import todo from 'assets/project-images/todolist.jpg';
import social from 'assets/project-images/social.png';
import pulse from 'assets/project-images/pulse.jpg';
import counter from 'assets/project-images/counter.png';

export type PortfolioType = {
    id: number;
    category: string;
    link: string;
    icon: string;
    image: string;
    title: string;
    tech: string;
    placeholder: string;
};

const portfolios = [
    {
        id: 1,
        category: 'Landings',
        link: 'https://github.com/AndreiYantsevich/uber',
        icon: github,
        image: uber,
        title: 'Uber',
        tech: 'HTML5, CSS3, JavaScript.',
        placeholder: 'A Pixel Perfect Landing Page.'
    },
    {
        id: 2,
        category: 'Landings',
        link: 'https://github.com/AndreiYantsevich/pulse',
        icon: github,
        image: pulse,
        title: 'Pulse Shop',
        tech: 'HTML5, CSS3, JavaScript.',
        placeholder: 'A Pixel Perfect Landing Page.'
    },
    {
        id: 3,
        category: 'React',
        link: 'https://github.com/AndreiYantsevich/TodoList',
        icon: github,
        image: todo,
        title: 'ToDoList',
        tech: 'React, Redux, REST API, Typescript, Formik, Material-UI, Storybook, Unit-tests.',
        placeholder: 'An app for Task Management, Project Management, Productivity.'
    },
    {
        id: 4,
        category: 'React',
        link: 'https://github.com/AndreiYantsevich/social',
        icon: github,
        image: social,
        title: 'Social Network',
        tech: 'React, Redux, Redux-Form, REST API, Typescript, CSS-Modules.',
        placeholder: 'A social networking service. An online platform for people to build social networks or social relationships with other people.'
    },
    {
        id: 5,
        category: 'React',
        link: 'https://github.com/AndreiYantsevich/counter',
        icon: github,
        image: counter,
        title: 'Counter',
        tech: 'React, Redux, Typescript.',
        placeholder: 'An app for counting and saving the result.'
    },
];

export default portfolios;
