import { extendTheme,theme as base,type ThemeConfig} from '@chakra-ui/react'
import { createBreakpoints,mode } from '@chakra-ui/theme-tools'
// import { StyleFunctionProps } from '@chakra-ui/styled-system'
import "@fontsource/poppins"
export const theme = extendTheme({ breakpoints: createBreakpoints({
    sm: '572px',
    md: '768px',
    lg: '980px',
    xl: '1270px',
    xxl: '1920px'
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
      fontSize: {base:"xs",md:"sm",lg:"sm",xl:"sm"}  
    },
    normal: {
      fontSize:"14px"
    },
    tokenomics: {
      fontSize: "10px",
      color:"#666666",
      fontWeight: 400,
      letterSpacing:"0.25px"
    },
    roadMapHead: {
      fontSize: "46px",
      color: "white",
    },
    roadHead: {
      fontSize: "19px",
      color: "white",
      fontWeight: 500,
    },
    headText: {
      fontSize: { base: "2xl", md: "3xl", lg: "4xl", xl: "4xl" }
    },
    featuresHead: {
      fontSize: "23px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "34px",
      color: "black"
    },
    featuresText: {
      lineHeight: "21px",
      fontWeight: 400,
      fontStyle: "normal",
      letterSpacing: "0.5px",
      fontSize: "14px"
    },
    footerText: {
      fontSize: "14px",
    },
    headerStyle: {
      fontSize: "46px",
      fontWeight: 400,
      lineHeight: "58px",
      fontStyle: "normal",
      fontFamily: "Readex Pro"
    },
    deskTokenText: {
      fontSize: "14px",
      fontWeight: 500,
      letterSpacing: "0.5px",
      lineHeight: "21px",
      fontStyle: "normal",
      color: "#F6F6F6"
    },
    resultServiceHead: {
      fontSize: "38px",
      fontStyle: "normal",
      lineHeight: "48px",
      fontWeight: 400
    },
    resultServiceText: {
      fontSize: "14px",
      fontStyle: "normal",
      letterSpacing: "0.5px",
      lineHeight: "21px",
      fontWeight: 400,
      color: "#666666"
    },
    investorText: {
      fontSize: "19px",
      fontStyle: "normal",
      lineHeight: "28px",
      fontWeight: 500,
      letterSpacing: "0.15px",
      color:"#F6F6F6"
    }

  },    
  }
)
export default theme
