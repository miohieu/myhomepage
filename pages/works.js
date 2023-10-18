import { Box, Heading, Container, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import bootstrapthumb from "../public/bootstrap.png"
import cellphone from "../public/cellphone.png"
import movie from "../public/movie.png"
const Works = () => {
    return (
        <Container>
            <Heading
                as="h3"
                fontSize={20}
                mb={4}>
        Works
            </ Heading >
        <SimpleGrid column={[1,1,2]} gap={6}>
        <Section delay={0.3}>
        <WorkGridItem id="bootstrap" title="Bootstrap Webpage" thumbnail={bootstrapthumb}>
        Simple responsive website building with Boostrap HTML and CSS. 
            </WorkGridItem>
        </Section>

        <Section delay={0.3}>
        <WorkGridItem id="cellphone" title="Cellphone store" thumbnail={cellphone}>
        Cellphone Online Store with Client and Admin page (Axios, Boostrap, JS)
        </WorkGridItem>
        </Section>
        <Section delay={0.3}>
        <WorkGridItem id="movie" title="Movie booking" thumbnail={movie}>
         Movie booking app with login, register, update account services (NextJS, tailwind, typescript, Axios)
        </WorkGridItem>
        </Section>
        </SimpleGrid>
        </Container>
    )

}

export default Works
