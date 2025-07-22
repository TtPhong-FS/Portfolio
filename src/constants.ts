import { FaBriefcase, FaHome, FaPhone, FaUser } from 'react-icons/fa'
import {
  BriefCase,
  BriefCaseBlack,
  CodeXml,
  CodeXmlBlack,
  Facebook,
  FacebookDark,
  Github,
  GithubDark,
  Glode,
  GlodeBlack,
  Graducation,
  GraducationBlack,
  ImageMe
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
  // {
  //   name: 'Services',
  //   link: '#services',
  //   icon: FaHandshake
  // },
  {
    name: 'Contact',
    link: '#contact',
    icon: FaPhone
  },
  {
    name: 'My work',
    link: '#projects',
    icon: FaBriefcase
  }
]

export const projectCategories = [
  {
    label: 'All',
    key: 'all'
  },
  {
    label: 'TechStore',
    key: 'techstore'
  }
  // {
  //   label: 'NgocBich Store - Website Cosmetics',
  //   key: 'ngocbichstore'
  // }
]

export const projects = [
  {
    id: 1,
    tags: ['React.js', 'Swiper', 'Tailwind CSS', 'Redux Toolkit'],
    des: 'An advanced eCommerce platform built with Spring Boot and React.js, featuring category trees, search products, shopping cart, basic order system, whitelist, user authentication via JWT',
    title: 'E-Commerce website',
    image: '/techgear-home.png',
    demoUrl: 'https://techgear-silk.vercel.app',
    githubUrl: 'https://github.com/TtPhong-FS/Ecommerce-techstore-client',
    category: 'techstore'
  },
  {
    id: 2,
    tags: ['React.js', 'Table Tanstack', 'Tailwind CSS', 'Redux Toolkit'],
    des: 'A dashboard panel for administrators to manage categories, category attributes, products, orders, and user accounts... Supports dark mode theme, secure basic with auth context & role-based access.',
    title: 'Dashboard Panel',
    image: '/techgear-dashboard.png',
    demoUrl: 'https://techgear-dashboard.vercel.app',
    githubUrl: 'https://github.com/TtPhong-FS/Dashboard-Panel-For-E-Commerce-TechStore',
    category: 'techstore'
  },
  {
    id: 3,
    tags: ['Restful API', 'Spring boot', 'Spring security', 'JWT authen', 'Mysql', 'Redis'],
    des: 'A dashboard panel for administrators to manage categories, category attributes, products, orders, and user accounts... Supports dark mode theme, secure basic with auth context & role-based access.',
    title: 'Backend System',
    image: '/be-techgear.png',
    demoUrl: '#',
    githubUrl: 'https://github.com/TtPhong-FS/Backend-TechStore.git',
    category: 'techstore'
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
    description: 'HTML, CSS, SCSS, Tailwind CSS',
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
    key: 'education',
    title: 'Education',
    description: 'Information techlonogy',
    iconBlack: GraducationBlack,
    icon: Graducation
  },
  {
    key: 'projects',
    title: 'Projects',
    description: 'Built 1 projects',
    iconBlack: BriefCaseBlack,
    icon: BriefCase
  }
]

export const toolsAndTechnicals = [
  {
    id: 1,
    section: '#tools',
    title: 'Tools i use',
    logo: ['/vscode.svg', '/git.svg', '/intellij.svg', '/gitlab.svg']
  },
  {
    id: 2,
    section: '#technicals',
    title: 'Technicals i use',
    logo: ['/spring-boot.svg', '/nextjs.svg', '/re.svg', '/redux.svg', '/tailwindcss.svg']
  }
]

export const toolTitle = 'Tools i use'

export const tools = ['/vscode.svg', '/git.svg', '/intellij.svg', '/gitlab.svg']

export const socialMedia = [
  {
    id: 1,
    link: 'https://www.facebook.com/torischto01.smr',
    icon: Facebook,
    iconDark: FacebookDark
  },
  {
    id: 2,
    link: 'https://github.com/TtPhong-FS',
    icon: Github,
    iconDark: GithubDark
  }
]
