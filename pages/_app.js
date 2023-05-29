import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout/main'
import theme from '../libs/themes.js'
const Website = ({ Component, pageProps, router }) => (
  <ChakraProvider theme={theme}>
    <Layout router={router}>
      <Component {...pageProps} key={router.route} />
    </Layout>
  </ChakraProvider>
)

export default Website
