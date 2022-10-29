import { extendTheme } from "@chakra-ui/react";

const components = {
  Heading: {
    baseStyle: {
      color: 'gray.900',
    }
  },
}

const fonts = {
  heading: "'Inter', sans-serif",
  body: "'Inter', sans-serif",
}

const colors = {
  gray: {
    900: '#101828'
  }
}

const theme = extendTheme({
  fonts,
  colors,
  components
})

export default theme