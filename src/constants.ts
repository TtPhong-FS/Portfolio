import { BookUserIcon, CodeIcon, HomeIcon, MailIcon } from '@/icons'
import { ImageMe } from './assets'
import Facebook from './assets/Facebook'
import Github from './assets/Github'
export const navigations = [
  {
    key: 'home',
    name: 'Home',
    link: '#home',
    icon: HomeIcon
  },
  {
    key: 'about',
    name: 'About me',
    link: '#about',
    icon: BookUserIcon
  },
  // {
  //   name: 'Services',
  //   link: '#services',
  //   icon: FaHandshake
  // },
  {
    key: 'contact',
    name: 'Contact',
    link: '#contact',
    icon: MailIcon
  },
  {
    key: 'projects',
    name: 'Projects',
    link: '#projects',
    icon: CodeIcon
  }
]

export const imageMe = [
  {
    title: 'Tran Thanh Phong',
    src: ImageMe
  }
]

export const socialMedia = [
  {
    id: 1,
    link: 'https://www.facebook.com/torischto01.smr',
    title: 'Facebook',
    icon: Facebook
  },
  {
    id: 2,
    link: 'https://github.com/TtPhong-FS',
    title: 'Github',
    icon: Github
  }
  // {
  //   id: 3,
  //   link: 'https://github.com/TtPhong-FS',
  //   title: 'Github',
  //   icon: FaLinkedin
  // }
]
