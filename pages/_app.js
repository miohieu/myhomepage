import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout/main'
import Fonts from '../components/font'
import theme from '../libs/themes.js'
import { ReactDOM } from 'react'

const Website = ({ Component, pageProps, router }) => {
    console.log(router)
    return (


        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    )
}

export default Website
