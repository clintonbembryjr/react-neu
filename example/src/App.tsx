import React from 'react'

import {
  Box,
  createTheme,
  ThemeProvider,
} from 'react-neu'

import DarkModeSwitch from './components/DarkModeSwitch'

import Home from './views/Home'

const App = () => {
  const { dark: darkTheme, light: lightTheme } = createTheme({
    baseColor: { h: 500, s: 100, l: 41 },
    baseGreyColorDark: { h: 300, s: 100, l: 50 },
    borderRadius: 28,
  })

  return (
    <ThemeProvider darkTheme={darkTheme} lightTheme={lightTheme}>
      <Box
        alignItems="center"
        height={72}
        justifyContent="center"
        row
      >
        <DarkModeSwitch />
      </Box>
      <Home />
    </ThemeProvider>
  )
}

export default App
