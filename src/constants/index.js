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
  image1,
  image2,
  image3,
  image4,
  image5,
} from "../assets/index.js";

// Same pattern as other constants

export const navLinks = () => {
  const { t } = useTranslation();

  return [
    {
      id: "about",
      title: t('about'),
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
      title: 'Web Developer',
      icon: web,
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
    name: "html",
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

export const projects = () => {
  return [
    {
      name: "Traveler",
      description: "A travel agency platform that lets users explore destinations...",
      tags: [
        { name: "html", color: "blue-text-gradient" },
        { name: "css", color: "green-text-gradient" },
        { name: "mysql", color: "pink-text-gradient" },
      ],
      image: carrent,
      source_code_link: "https://github.com/abdelazizguechari/travel-agance",
    },
    {
      name: "ENTV Park Auto System",
      description: "A comprehensive vehicle fleet management system for ENTV...",
      tags: [
        { name: "laravel", color: "blue-text-gradient" },
        { name: "scss", color: "green-text-gradient" },
        { name: "nodejs", color: "pink-text-gradient" },
      ],
      image: jobit,
      source_code_link: "https://github.com/abdelazizguechari/entv-auto",
    },
    {
      name: "NBR Airways System",
      description: "A flight management system for NBR Airways...",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "tailwand", color: "green-text-gradient" },
        { name: "inertia", color: "pink-text-gradient" },
      ],
      image: tripguide,
      source_code_link: "https://github.com/abdelazizguechari/afor",
    },
  ];
};

// Make galleryImages a constant array instead of a function
export const galleryImages = [
  {
    src: image1,
    alt: 'Gallery Item 1',
    title: 'Gallery Item 1',
    description: 'Description for item 1',
  },
  {
    src: image2,
    alt: 'Gallery Item 2',
    title: 'Gallery Item 2',
    description: 'Description for item 2',
  },
  {
    src: image3,
    alt: 'Gallery Item 3',
    title: 'Gallery Item 3',
    description: 'Description for item 3',
  },
  {
    src: image4,
    alt: 'Gallery Item 4',
    title: 'Gallery Item 4',
    description: 'Description for item 4',
  },
  {
    src: image5,
    alt: 'Gallery Item 5',
    title: 'Gallery Item 5',
    description: 'Description for item 5',
  },
];
