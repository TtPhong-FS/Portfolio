import { FaHeadphonesAlt, FaHome, FaProjectDiagram, FaTools } from 'react-icons/fa'

export const navItems = [
  {
    name: 'Home',
    link: '#',
    icon: FaHome
  },
  {
    name: 'Project',
    link: '#projects',
    icon: FaProjectDiagram
  },
  {
    name: 'Technical',
    link: '#',
    icon: FaTools
  },
  {
    name: 'Contact',
    link: '#contact',
    icon: FaHeadphonesAlt
  }
]

export const projects = [
  {
    id: 1,
    des: 'A website for shopping products about electronics and technicals.',
    title: 'E-Commerce for technology',
    img: '/img-techgear-client.png',
    link: 'https://techgear-silk.vercel.app',
    technicals: ['/re.svg', '/js.svg', '/tailwindcss.svg', '/redux.svg', '/spring-boot.svg', '/vercel.svg']
  },
  {
    id: 2,
    des: 'My portfolio page is a showcase of my personal projects and the technologies used.',
    title: 'Portfolio',
    img: '/portfolio-img.png',
    link: '/',
    technicals: ['/nextjs.svg', '/ts.svg', '/tailwindcss.svg', '/vercel.svg', '/aceternity.png']
  }
]
