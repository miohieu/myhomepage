import NextLink from "next/link"
import Image from "next/image"
import { Box,Heading, Text, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { Global } from "@emotion/react"


export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box
        w="100%"
        align="center" >
        <LinkBox cursor="pointer">
            <Image src={thumbnail}
                alt={title}
                placeholder="blur"
                loading="lazy"
                className="grid-item-thumbnail" />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>
                    {title}
                </Text>
            </LinkOverlay>
            <Text fontSize={15}>
                {children}
            </Text>
        </LinkBox>
    </Box >
)
export const WorkGridItem = ({ children, id, title, thumbnail }) => (
    <Box
        w="100%"
        align="center" >
        <NextLink href={`/works/${id}`}>
            <LinkBox cursor="pointer">
                <Image src={thumbnail}
                    alt={title}
                    placeholder="blur"
                    loading="lazy"
                    className="grid-item-thumbnail" />
                <LinkOverlay href={`/works/${id}`}>
                    <Heading as="h3" fontSize={20}>
                        {title}
                    </Heading>
                </LinkOverlay>
                <Text fontSize={14}>
                    {children}
                </Text>
            </LinkBox>
        </ NextLink>
    </Box >
)

export const GridItemStyle = () => (
    <Global styles={
        `
        .grid-item-thumbnail {
            border-radius:12px;
        }
        `
    } />
)
