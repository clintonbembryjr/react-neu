import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import ThemeContext from './ThemeContext'
import { Theme } from './types'

export interface ThemeProviderProps {
  darkTheme: Theme,
  lightTheme: Theme
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  darkTheme,
  lightTheme,
}) => {
  const [darkMode, setDarkMode] = useState(false)
  const activeTheme = useMemo(() => {
    if (darkMode) return darkTheme
    return lightTheme
  }, [
    darkMode,
    darkTheme,
    lightTheme,
  ])

  const handleToggleDarkMode = useCallback(() => {
    setDarkMode(!darkMode)
  }, [darkMode, setDarkMode])

  const { baseColor, textColor } = activeTheme
  useEffect(() => {
    document.body.style.background = baseColor
    document.body.style.color = textColor
  }, [baseColor])

  return (
    <ThemeContext.Provider value={{
      darkMode,
      onToggleDarkMode: handleToggleDarkMode,
      theme: activeTheme,
    }}>
      <StyledThemeProvider theme={activeTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider