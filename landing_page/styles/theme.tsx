import { extendTheme,theme as base, useColorModeValue, type ThemeConfig } from '@chakra-ui/react'
import { createBreakpoints, mode } from '@chakra-ui/theme-tools'
import { StyleFunctionProps } from '@chakra-ui/styled-system'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

export const theme = extendTheme({
  config,
  breakpoints: createBreakpoints({
    sm: '572px',
    md: '768px',
    lg: '980px',
    xl: '1270px',
    myCustomOne: '1920px'
  }),
  colors: {
    dark: {
      100: "#0A2971", //Header
      200: "#2C4EC6", //JoinButton
      },
    light: {
      100: "fff" //White
    }
  },
  textStyles: {
    normal: {
      fontSize: { base: 'xs', md: 'sm', lg: 'sm' },
      alignSelf: "flex-start",
    }
  },
    components: {
    },
    styles: {
        global: (props: StyleFunctionProps) => ({
                  body: {
                      textStyle: 'normal',
                      color: mode('dark.100','light.100')(props)
                  }
              })
          }
  }
)
export default theme
