import github from 'assets/svg/github.svg';
import uber from 'assets/project-images/uber.jpg';
import todo from 'assets/project-images/todolist.jpg';
import social from 'assets/project-images/social.png';
import ghUsers from 'assets/project-images/ghUsers.png';
import counter from 'assets/project-images/counter.png';
import wordpress from 'assets/project-images/wordpress.jpg';

export type PortfolioType = {
    id: number;
    category: string;
    link: string;
    previewLink: string;
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
        link: 'https://github.com/yantsev1ch/uber',
        previewLink: 'https://yantsev1ch.github.io/uber/',
        icon: github,
        image: uber,
        title: 'Uber',
        tech: 'HTML5, CSS3, JavaScript.',
        placeholder: 'A Pixel Perfect Landing Page.'
    },
    {
        id: 2,
        category: 'React',
        link: 'https://github.com/yantsev1ch/startup_summer_2021',
        previewLink: 'https://yantsev1ch.github.io/startup_summer_2021/',
        icon: github,
        image: ghUsers,
        title: 'GitHub Users Page',
        tech: 'React, Redux, Redux-Thunk, Typescript',
        placeholder: 'Application for displaying github users and their repositories.'
    },
    {
        id: 3,
        category: 'React',
        link: 'https://github.com/yantsev1ch/TodoList',
        previewLink: 'https://yantsev1ch.github.io/TodoList/',
        icon: github,
        image: todo,
        title: 'ToDoList',
        tech: 'React, Redux, REST API, Typescript, Formik, Material-UI, Storybook, Unit-tests.',
        placeholder: 'An app for Task Management, Project Management, Productivity.'
    },
    {
        id: 4,
        category: 'React',
        link: 'https://github.com/yantsev1ch/social',
        previewLink: 'https://yantsev1ch.github.io/social/',
        icon: github,
        image: social,
        title: 'Social Network',
        tech: 'React, Redux, Redux-Form, REST API, Typescript, CSS-Modules.',
        placeholder: 'A social networking service. An online platform for people to build social networks or social relationships with other people.'
    },
    {
        id: 5,
        category: 'React',
        link: 'https://github.com/yantsev1ch/counter',
        previewLink: 'https://yantsev1ch.github.io/counter/',
        icon: github,
        image: counter,
        title: 'Counter',
        tech: 'React, Redux, Typescript.',
        placeholder: 'An app for counting and saving the result.'
    },
    {
        id: 6,
        category: 'Landings',
        link: 'https://github.com/yantsev1ch/wordpress',
        previewLink: 'https://yantsev1ch.github.io/wordpress/',
        icon: github,
        image: wordpress,
        title: 'Wordpress',
        tech: 'HTML5, CSS3.',
        placeholder: 'A Pixel Perfect Landing Page.'
    },
];

export default portfolios;
