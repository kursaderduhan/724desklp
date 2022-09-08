import { extendTheme,theme as base,type ThemeConfig} from '@chakra-ui/react'
import { createBreakpoints,mode } from '@chakra-ui/theme-tools'
// import { StyleFunctionProps } from '@chakra-ui/styled-system'

export const theme = extendTheme({ breakpoints: createBreakpoints({
    sm: '572px',
    md: '768px',
    lg: '980px',
    xl: '1270px',
    myCustomOne: '1920px'
  }),
  colors: {
    dark: {
      100: "#0A2971", //Header
      200: "#2C4EC6",
      300: "#000000" //JoinButton
      },
    light: {
      100: "#ffffff" //White
    }
  },
  textStyles: {
    normal: {
      fontSize: { base: 'xs', md: 'sm', lg: 'sm' },
    }
  },    
  }
)
export default theme
