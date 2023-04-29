import { Container, Box, Heading } from '@chakra-ui/react'
import { Main } from 'next/document'

const Page = () => (
  <Container>
    <Box borderRadius="lg" bg="#a2d2ff" p={3} align="center">
      Hello, I&apos;m a Front-end developer based in VN!
    </Box>
    <Box display={{ md: 'flex' }}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
            Vu Minh Hieu
        </Heading>
        <p> Front-end artist (HTML /CSS/ JS)  </p>
      </Box>

    </Box>
   
  </Container>
)
export default Page