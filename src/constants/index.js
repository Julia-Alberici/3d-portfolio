import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    sass,
    reactjs,
    angular,
    tailwind,
    nodejs,
    c,
    bootstrap,
    git,
    mysql,
    korp,
    clipz,
    picsome,
    weatherchecker,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    }
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
      name: "Sass",
      icon: sass,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
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
      name: "Angular JS",
      icon: angular,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "C#",
      icon: c,
    },
    {
      name: "MySql",
      icon: mysql,
    },
    {
      name: "git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "Full stack Developer",
      company_name: "Visoft Korp",
      icon: korp,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - Present",
      points: [
        "Designed, developed, and maintained software applications using mostly Typescript, React, Angular and C# .NET.",
        "Contributed to the design and implementation of new features to improve the overall user experience and increase product functionality.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Mentored Intern developers, providing support to improve their technical skills.",
      ],
    },
    {
      title: "Full stack Intern Developer",
      company_name: "Visoft Korp",
      icon: korp,
      iconBg: "#E6DEDD",
      date: "July 2022 - Nov 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Debugged and resolved software issues in a timely manner, ensuring the stability of software applications.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Implemented automated testing processes to increase the reliability and efficiency of software delivery.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Clipz",
      description:
        "Web-based platform for adding, editing, and watching videos. Providing a cool place to share clips among friends!",
        tags: [
        {
          name: "typescript",
          color: "orange-text-gradient",
        },
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: clipz,
      source_code_link: "https://github.com/Julia-Alberici/Clipz",
    },
    {
      name: "Pic Some",
      description:
        "User-friendly interface for favoriting photos and adding to cart, simulating an e-commerce experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: picsome,
      source_code_link: "https://github.com/Julia-Alberici/picSome",
    },
    {
      name: "Weather Checker",
      description:
        "Website that gets accurate and up-to-date weather information for any city in a visually appealing and user-friendly format.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "axios",
          color: "green-text-gradient",
        },
        {
          name: "googlemapsapi",
          color: "pink-text-gradient",
        },
      ],
      image: weatherchecker,
      source_code_link: "https://github.com/Julia-Alberici/Weather-Checker",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };