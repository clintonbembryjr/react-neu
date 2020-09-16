import { createContext } from 'react'

import createTheme from './createTheme'
import { ThemeContextValue } from './types'

const ThemeContext = createContext<ThemeContextValue>({
  onToggleDarkMode: () => {},
  theme: createTheme(),
})

export default ThemeContext