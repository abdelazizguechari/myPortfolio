import { useTranslation } from 'react-i18next'; // Import useTranslation

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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = () => {
  const { t } = useTranslation(); // Access translation function

  return [
    {
      id: "about",
      title: t('about'), // Translated value
    },
    {
      id: "work",
      title: t('tech'),
    },
    {
      id: "project",
      title: t('project'),
    },
    {
      id: "contact",
      title: t('contact'),
    },
  ];
};


export const services = () => {
  return [
    {
      title: 'Web Developer', // Titles are now static, to be translated in the component
      icon: web, // Example icon path
    },
    {
      title: 'Graphic Designer',
      icon: mobile,
    },
    {
      title: 'UI/UX Designer',
      icon: backend,
    },
    {
      title: 'Content Creator',
      icon: creator,
    },
  ];
};


export const technologies = [
  {
    name: "html", // Translated value
    icon: html,
  },
  {
    name: "css",
    icon: css,
  },
  {
    name: "javascript",
    icon: javascript,
  },
  {
    name: "bootstrap",
    icon: typescript,
  },
  {
    name: "reactjs",
    icon: reactjs,
  },
  {
    name: "tailwind",
    icon: tailwind,
  },
  {
    name: "nodejs",
    icon: nodejs,
  },
  {
    name: "mysql",
    icon: mongodb,
  },
  {
    name: "afterEffect",
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



export const projects = [
  
  {
    name: "Traveler",
    description: "A travel agency platform that allows users to explore destinations, book travel packages, and manage their trips seamlessly with curated recommendations and customer support", // Translated description
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/abdelazizguechari/travel-agance",
  },
  {
    name: "ENTV Park Auto System",
    description: "A comprehensive management system for ENTV's vehicle fleet, developed to streamline fleet operations and improve efficiency. schedule routine maintenance.The platform also includes notifications",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/abdelazizguechari/entv-auto",
  },
  {
    name: "NBR Airways System",
    description: "An airline management system for NBR Airways that streamlines flight scheduling, booking management, and customer communication, ensuring an efficient and user-friendly",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwand",
        color: "green-text-gradient",
      },
      {
        name: "inertia",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/abdelazizguechari/afor",
  },
];
