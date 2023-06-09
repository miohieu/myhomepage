import Link from 'next/link'
import MainLogo from './logo/66'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'


const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
height: 30px;
transition: all 0.5s;
line-height: 20px;
padding: 20px;
align-items: center;
border-radius: 10px;

  &:hover svg  {
    transform: rotate(90deg);
  }
`
const Logo = () => {
    return (
        <Link href="/">
            <LogoBox>
                <MainLogo />
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily="M PLUS Rounded 1c"
                    fontWeight="bold"
                    ml={3}
                >
                    Vu Minh Hieu
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo

