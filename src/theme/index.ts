import { colors } from '../shared/colors'

const breakpoints = ['40em', '48em', '64em', '80em']
// const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]
const space = [
  '0',
  '0.25rem',
  '0.5rem',
  '0.75rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '2rem',
  '2.5rem',
  '3rem',
  '4rem',
  '5rem',
  '6rem',
  '8rem',
  '10rem',
  '12rem',
  '14rem',
  '16rem',
]
const fontSizes = [12, 14, 16, 20, 24, 36, 48, 80, 96]
const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900]
const lineHeights = {
  solid: 1,
  title: 1.25,
  copy: 1.5,
}

const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
}

const fonts = {
  serif: 'athelas, georgia, times, serif',
  sans:
    '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
}

const borders = [
  0,
  '1px solid',
  '2px solid',
  '4px solid',
  '8px solid',
  '16px solid',
  '32px solid',
]

const radii = [0, '2px', '4px', '6px', '16px', '9999px', '100%']
const width = [16, 32, 64, 128, 256]
const heights = [16, 32, 64, 128, 256]
const maxWidths = [16, 32, 64, 128, 256, 512, 768, 1024, 1536]

const mediaQueries = {
  sm: `@media screen and (min-width: ${breakpoints[0]})`,
  md: `@media screen and (min-width: ${breakpoints[1]})`,
  lg: `@media screen and (min-width: ${breakpoints[2]})`,
  xl: `@media screen and (min-width: ${breakpoints[3]})`,
}

const shadows = [
  `
    none 
  `,
  `
     0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  `,
  `
     0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  `,
  `
     0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  `,
  `
     0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  `,
  `
     0 25px 50px -12px rgba(0, 0, 0, 0.25);
  `,
  `
     0 0 0 3px rgba(66, 153, 225, 0.5);
  `,
  `
     inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  `,
]
export const theme = {
  colors,
  fontSizes,
  breakpoints,
  mediaQueries,
  space,
  shadows,
  radii,
  fonts,
  borders,
  width,
  heights,
  maxWidths,
  letterSpacings,
  fontWeights,
  lineHeights,
}
