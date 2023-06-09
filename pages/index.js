import { Container, Box, Heading } from '@chakra-ui/react'
import Image from '../components/layout/profileImage'
import Section from '../components/layout/section'
import Paragraph from '../components/layout/paragraph'

const Page = () => (
  <Container>
    <Box borderRadius="lg" bg="#505353" py={3} px={3} align="center">
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
      <Image alt={'profile'} />
    </Box>
    <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        Work
      </Heading>
      <Paragraph> Hello my name VMH </Paragraph>
    </Section>
    <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        Socials
      </Heading>
      <Paragraph></Paragraph>
    </Section>
  </Container>
)
export default Page
