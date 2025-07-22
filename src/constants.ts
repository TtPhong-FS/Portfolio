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

export const projects = [
  {
    id: 1,
    tags: ['ReactJs', 'TailwindCss', 'Redux', 'Mysql', 'Spring boot'],
    des: 'A website for shopping products about electronics and technicals.',
    title: 'E-Commerce for technology',
    image: '/techgear-home.png',
    demoUrl: 'https://techgear-silk.vercel.app',
    githubUrl: 'https://github.com/TtPhong-FS/Ecommerce-techstore-client'
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
