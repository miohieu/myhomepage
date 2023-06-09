import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#fff0db', '#2c2f33')(props)
    }
  })
}

const components = {
  Heading: {
    variant: {
      'section-title': {
        textDecoration: 'underline'
      },
      fontSize: 20,
      textUnderlineOffset: 6,
      textDecorationColor: '#525252',
      textDecorationThickness: 4,
      marginTop: 3,
      marginBottom: 4
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', 'ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}
const fonts = {
  heading: "'M PLUS Rounded 1c'"
}
const colors = {
  glassTeal: '#88ccca'
}
const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}
const theme = extendTheme({ config, fonts, styles, components, colors })

export default theme
