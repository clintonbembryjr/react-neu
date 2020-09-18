import { HSLA, Theme, ThemeConfig } from './types'

const DEFAULT_COLOR: HSLA = { h: 200, s: 100, l: 50 }

const createTheme = (config?: ThemeConfig): Theme => {
  const {
    baseColor = DEFAULT_COLOR,
    baseGreyColor,
    borderRadius = 24,
    siteWidth = 1200
  } = config || {}

  const { h, s } = baseColor
  const { h: baseGreyH } = baseGreyColor ? baseGreyColor : baseColor

  const blackHSLA: HSLA = { h: baseGreyH, s: 95, l: 4 }
  const whiteHSLA: HSLA = { h: baseGreyH, s: 100, l: 100 }
  const black = hslToCssString(blackHSLA)
  const white = hslToCssString(whiteHSLA)

  const grey = {
    100: hslToCssString({ h: baseGreyH, s: 20, l: 96 }),
    200: hslToCssString({ h: baseGreyH, s: 20, l: 94 }),
    300: hslToCssString({ h: baseGreyH, s: 20, l: 90 }),
    400: hslToCssString({ h: baseGreyH, s: 20, l: 90 }),
    500: hslToCssString({ h: baseGreyH, s: 7, l: 52 }),
    600: hslToCssString({ h: baseGreyH, s: 10, l: 37 }),
    700: hslToCssString({ h: baseGreyH, s: 17, l: 23 }),
    800: hslToCssString({ h: baseGreyH, s: 25, l: 17 }),
    900: hslToCssString({ h: baseGreyH, s: 42, l: 10 }),
  }

  const baseBg = `radial-gradient(circle at top, ${grey[100]}, ${grey[200]})`

  return {
    baseBg,
    baseColor: grey[200],
    borderRadius,
    buttonSizes: {
      lg: 72,
      md: 48,
      sm: 36,
    },
    colors: {
      black,
      grey,
      primary: {
        dark: hslToCssString({ h, s, l: 15 }),
        light: hslToCssString({ h, s, l: 75 }),
        main: hslToCssString(baseColor),
      },
      white,
    },
    highlightColor: grey[100],
    shadowColor: grey[300],
    siteWidth,
    spacing: {
      0: 0,
      1: 4,
      2: 8,
      3: 16,
      4: 24,
      5: 32,
      6: 48,
      7: 72,
      8: 96
    },
    surfaces: {
      N2: {
        background: `radial-gradient(circle at top, ${grey[300]}, ${grey[400]})`,
        border: '0',
        highlight: `inset 4px -4px 8px -4px ${white}`,
        shadow: `inset -4px 4px 8px -4px ${hslToCssString({ ...blackHSLA, a: 15 })}`,
      },
      N1: {
        background: baseBg,
        border: '0',
        highlight: `inset 2px -2px 4px ${hslToCssString({ ...whiteHSLA, a: 75 })}`,
        shadow: `inset -2px 2px 4px ${hslToCssString({ ...blackHSLA, a: 15 })}`,
      },
      0: {
        background: grey[200],
        border: `0`,
        highlight: `inset -1px 1px 0px ${hslToCssString({ ...whiteHSLA, a: 66 })}`,
        shadow: `0px 0px 1px 1px ${hslToCssString({ ...blackHSLA, a: 7.5 })}`,
      },
      1: {
        background: grey[200],
        border: '0',
        highlight: `4px -4px 8px 0px ${white}`,
        shadow: `-4px 4px 8px 0 ${hslToCssString({ ...blackHSLA, a: 15 })}`,
      },
      2: {
        background: grey[200],
        border: '0',
        highlight: `8px -8px 16px 0px ${white}`,
        shadow: `-8px 8px 16px 0 ${hslToCssString({ ...blackHSLA, a: 15 })}`,
      }
    },
    textColor: black,
  }
}

const hslToCssString = (hsla: HSLA) => {
  const { h, s, l, a = 100 } = hsla
  return `hsl(${h}deg ${s}% ${l}% / ${a}%)`
}

export default createTheme