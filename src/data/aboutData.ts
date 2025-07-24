import { BriefcaseBusiness, CodeXml, Globe, GraduationCap } from 'lucide-react'

export const aboutData = {
  des: 'As a recent IT graduate, I have a solid foundation in HTML, CSS, JavaScript, and hands-on experience building user interfaces using React.js. I enjoy creating responsive, cross-device web experiences and am a quick learner of new technologies in frontend development.',
  meItems: [
    {
      key: 'basic',
      title: 'Basic',
      description: 'HTML, CSS, SCSS, Tailwind CSS',
      icon: Globe
    },
    {
      key: 'language',
      title: 'Language',
      description: 'Java, JavaScript',
      icon: CodeXml
    },
    {
      key: 'education',
      title: 'Education',
      description: 'Information techlonogy',
      icon: GraduationCap
    },
    {
      key: 'projects',
      title: 'Projects',
      description: 'Built 1 projects',
      icon: BriefcaseBusiness
    }
  ],
  toolsAndTechnicals: [
    {
      id: 'technicals',
      section: '#technicals',
      title: 'Technicals i use',
      logo: ['/spring-boot.svg', '/nextjs.svg', '/re.svg', '/redux.svg', '/tailwindcss.svg']
    },
    {
      id: 'tools',
      section: '#tools',
      title: 'Tools i use',
      logo: ['/vscode.svg', '/git.svg', '/intellij.svg', '/gitlab.svg']
    }
  ]
}
