import React, { useCallback, useEffect, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import ThemeContext from './ThemeContext'
import { Theme } from './types'

export interface ThemeProviderProps {
  theme: Theme
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme,
}) => {
  const [darkMode, setDarkMode] = useState(false)

  const handleToggleDarkMode = useCallback(() => {
    setDarkMode(!darkMode)
  }, [darkMode, setDarkMode])

  const { baseColor, textColor } = theme
  useEffect(() => {
    document.body.style.background = baseColor
    document.body.style.color = textColor
  }, [baseColor])

  return (
    <ThemeContext.Provider value={{
      darkMode,
      onToggleDarkMode: handleToggleDarkMode,
      theme,
    }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider