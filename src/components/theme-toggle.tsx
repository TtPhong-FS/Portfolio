import { useTheme } from 'next-themes'
import { FiSun } from 'react-icons/fi'
import { IoMoonSharp } from 'react-icons/io5'

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? <FiSun /> : <IoMoonSharp />}
    </button>
  )
}
