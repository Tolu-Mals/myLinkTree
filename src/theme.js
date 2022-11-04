import { extendTheme } from "@chakra-ui/react";

const components = {
  Heading: {
    baseStyle: {
      color: 'gray.900',
    }
  },
  Button: {
      variants: {
        solid: {
          backgroundColor: 'gray.200',
          fontSize: '18px',
          fontWeight: 500,
          py: '24px',
          borderRadius: '8px',
          color: 'gray.900',
          _active: {
            backgroundColor: 'gray.300'
          }
        },
        action: {
          backgroundColor: 'primary.600',
          color: '#fff',
          fontWeight: 600,
          height: 12,
          borderRadius: '8px',
        }
      }
  },
  FormLabel: {
    baseStyle: {
      fontSize: "14px",
    }
  },
}

const fonts = {
  heading: "'Inter', sans-serif",
  body: "'Inter', sans-serif",
}

const colors = {
  gray: {
    900: '#101828',
    600: '#475467',
    300: '#D0D5DD',
    200: '#eaecf0',
  },
  primary: {
    600: '#1570EF',
  }
}

const theme = extendTheme({
  fonts,
  colors,
  components
})

export default theme