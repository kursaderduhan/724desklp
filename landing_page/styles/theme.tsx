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
  },fontSizes: {
    xs: "0.75rem",    //12px
    sm: "0.875rem",   //14px
    md: "1rem",       //16px
    lg: "1.125rem",   //18px
    xl: "1.25rem",    //20px
    "2xl": "1.5rem",  //24px
    "3xl": "1.875rem",//30px
    "4xl": "2.25rem", //36px
    "5xl": "3rem",    //48px
    "6xl": "3.75rem", //60px
    "7xl": "4.5rem",  //72px
    "8xl": "6rem",    //96px
    "9xl": "8rem",    //128px
  },
  colors: {
    dark: {
      100: "#0A2971", //Header
      200: "#2C4EC6",
      300: "#000000", //JoinButton
      400: "#666666"  //textGray
      },
    light: {
      100: "#ffffff" //White
    }
  },
  textStyles: {
    headerText: {
      fontSize: {base:"sm",md:"sm",lg:"sm",xl:"sm"}  
    },
    normal: {
      fontSize: { base: 'xs', md: 'sm', lg: 'sm', xl: "sm" }
    },
    roadMapHead: {
      fontSize: { base: 'xs', md: 'sm', lg: 'sm', xl: "5xl" }
    },
    roadHead: {
      fontSize:{ base: 'sm', md: 'md', lg: 'lg', xl: "xl" }
    },
    headText: {
      fontSize: {base: "2xl", md: "3xl", lg: "4xl", xl:"4xl"}
    },
    featuresHead: {
      fontSize: { base: 'sm', md: 'md', lg: 'lg', xl: "2xl" }
    },
    footerText: {
      fontSize: {base: "xs", md: "xs", lg: "xs", xl: "xs"}
    }
  },    
  }
)
export default theme
