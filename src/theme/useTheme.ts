import { useContext } from 'react'
import ThemeContext from './ThemeContext'

const useTheme = () => {
  const { darkMode, theme } = useContext(ThemeContext)
  return {
    darkMode,
    ...theme
  }
}

export default useTheme