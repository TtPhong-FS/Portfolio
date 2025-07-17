import { FaFolderOpen, FaHandshake, FaHome, FaPhone, FaUser } from 'react-icons/fa'
import {
  BriefCase,
  BriefCaseBlack,
  CodeXml,
  CodeXmlBlack,
  Glode,
  GlodeBlack,
  Graducation,
  GraducationBlack,
  ImageMe,
  Puzzle,
  PuzzleBlack
} from './assets'

export const navItems = [
  {
    name: 'Home',
    link: '#hero',
    icon: FaHome
  },
  {
    name: 'About me',
    link: '#about',
    icon: FaUser
  },
  {
    name: 'Services',
    link: '#services',
    icon: FaHandshake
  },
  {
    name: 'My work',
    link: '#my-work',
    icon: FaFolderOpen
  },
  {
    name: 'Contact me',
    link: '#contact',
    icon: FaPhone
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
    des: 'Showcase of my personal projects and the technologies used.',
    title: 'Portfolio',
    img: '/portfolio-img.png',
    link: '/',
    technicals: ['/nextjs.svg', '/ts.svg', '/tailwindcss.svg', '/vercel.svg', '/aceternity.png']
  }
]

export const infoImage = [
  {
    title: 'Tran Thanh Phong',
    src: ImageMe
  }
]

export const infoDescription =
  'As a recent IT graduate, I have a solid foundation in HTML, CSS, JavaScript, and hands-on experience building user interfaces using React.js. I enjoy creating responsive, cross-device web experiences and am a quick learner of new technologies in frontend development.'

export const infoList = [
  {
    key: 'basic',
    title: 'Basic',
    description: 'Html, Css, Scss, TailwindCss',
    iconBlack: GlodeBlack,
    icon: Glode
  },
  {
    key: 'language',
    title: 'Language',
    description: 'Java, JavaScript',
    iconBlack: CodeXmlBlack,
    icon: CodeXml
  },
  {
    key: 'framework-library',
    title: 'Frameworks & Libraries',
    description: 'NextJs, ReactJs',
    iconBlack: PuzzleBlack,
    icon: Puzzle
  },
  {
    key: 'education',
    title: 'Education',
    description: 'Information techlonogy',
    iconBlack: GraducationBlack,
    icon: Graducation
  },
  {
    key: 'projects',
    title: 'Projects',
    description: 'Built 2 projects',
    iconBlack: BriefCaseBlack,
    icon: BriefCase
  }
]
