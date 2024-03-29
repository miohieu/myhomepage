import Logo from './logo.js'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
import { forwardRef } from 'react'
import ThemeToggleButton from './theme-toggle-button.js'
const LinkItem = ({ href, path, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            bg={active ? 'grassTeal' : undefined}
            color={active ? '#E5BEEC' : inactiveColor}
            {...props}
        >
            {children}
        </Link>
    )
}

const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
    const { path } = props
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{
                backdropFilter: 'blur(10px)',
                zIndex: 9999
            }
            } {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
                zIndex={999}
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}></Heading>
                    <Logo />
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={2}
                    mt={{ base: 5, md: 0 }}
                >
                    <LinkItem href="/post" path={path}>
                        Posts
                    </LinkItem>

                    <LinkItem href="/works" path={path}>
                        Works
                    </LinkItem>
                    <LinkItem
                        target="_blank"
                        href="https://github.com/miohieu"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                    >
                        <IoLogoGithub />
                        Source
                    </LinkItem>
                </Stack>
                <ThemeToggleButton />
                <Box flex={1} align="right">
                    <Box
                        ml={3}
                        display={{
                            base: 'block',
                            md: 'none'
                        }}
                    >
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <MenuItem as={MenuLink} href="/">
                                    About
                                </MenuItem>
                                <MenuItem as={MenuLink} href="/works">
                                    {' '}
                                    Works
                                </MenuItem>
                                <MenuItem as={MenuLink} href="/posts">
                                    {' '}
                                    Posts
                                </MenuItem>
                                <MenuItem
                                    as={MenuLink}
                                    href="https://github.com/miohieu/myhomepage"
                                >
                                    View Source
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default Navbar
