import { Container, Box, Heading } from '@chakra-ui/react'
import Image from '../components/layout/profileImage.js'
import profilePicture from '../public/profile.JPG'

const Page = () => (
  <Container>
    <Box borderRadius="lg" bg="#a2d2ff" p={2} align="center">
      Hello, I&apos;m aiming to be a Fullstack developer, based in Sai Gon!
    </Box>
    <Box display={{ md: 'flex' }}>
      <Box flexGrow={1}>
        <Heading as="h2" mt={3} variant="page-title">
          Vu Minh Hieu
        </Heading>
        <p> Fullstack journey, currently working with JS </p>
      </Box>
    </Box>

    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
      <Image/>
    </Box>
  </Container>
)
export default Page
