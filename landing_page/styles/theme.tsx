import { extendTheme,theme as base,type ThemeConfig} from '@chakra-ui/react'
import { createBreakpoints,mode } from '@chakra-ui/theme-tools'
// import { StyleFunctionProps } from '@chakra-ui/styled-system'

export const theme = extendTheme({ breakpoints: createBreakpoints({
    sm: '572px',
    md: '768px',
    lg: '980px',
    xl: '1270px',
    myCustomOne: '1920px'
  }),fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
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
      fontSize: { base: 'xs', md: 'sm', lg: 'md', xl: "md" }
    },
    roadHead: {
      fontSize:{ base: 'sm', md: 'md', lg: 'lg', xl: "xl" }
    },
    headText: {
      fontSize: {base: "2xl", md: "3xl", lg: "4xl", xl:"5xl"}
    },
    featuresHead: {
      fontSize: { base: 'sm', md: 'md', lg: 'lg', xl: "xl" }
    },
    footerText: {
      fontSize: {base: "xs", md: "xs", lg: "xs", xl: "xs"}
    }
  },    
  }
)
export default theme
