import {
  Container,
  Box,
  Heading,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from '../components/profileImage'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => (
  <Container>
    <Box
      borderRadius="lg"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      py={3}
      px={3}
      align="center"
    >
      Hello, I&apos;m aiming to be a Fullstack developer, based in Sai Gon!
    </Box>
    <Box display={{ md: 'flex' }}>
      <Box flexGrow={1}>
        <Heading as="h2" mt={3} variant="page-title">
          Vu Minh Hieu
        </Heading>
      </Box>
    </Box>

    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
      <Image alt={'profile'} />
    </Box>
    <Section delay={0.2}>
      <Heading as="h3" variant="section-title">
        Introduction
      </Heading>
      <Paragraph>
        Vu Minh Hieu is a dedicated and ambitious individual with a diverse
        background and a passion for continuous learning and growth. Born and
        raised in Ho Chi Minh City, Vietnam, Hieu Vu graduated with a degree in
        Food Technology.Driven by an innate curiosity and a desire to broaden
        his skill set, Vu Minh Hieu recently ventured into the world of
        programming. With a focus on becoming a full-stack developer, he has
        acquired a solid understanding of HTML, CSS, and JavaScript, enabling
        him to bring his creative ideas to life on the web. Additionally, he has
        dived into the realm of modern front-end frameworks, such as ReactJS,
        leveraging its powerful libraries like Next.js.Additionally, he is
        actively learning Node.js and TypeScript,mySQL expanding his toolkit to
        build robust and scalable back-end solutions.
          {' '}
        <NextLink href="https://hieuvu-linktree.vercel.app">
          Check my Links Tree
        </NextLink>
      </Paragraph>
    </Section>

    <Box align="center" justifyContent="center">
      <NextLink href="/works">
        <Button
          p={5}
          size="lg"
          variant="ghost"
          rightIcon={<ChevronRightIcon />}
          colorScheme="purple"
        >
          {' '}
          Go to my porfolio{' '}
        </Button>
      </NextLink>
    </Box>
  </Container>
)
export default Page
