import React from 'react'
import { Container, ContainerPropsProvider, Flex } from '@chakra-ui/react'
import {Box, Image} from '@chakra-ui/react'

const AuthPage = () => {
    return (
        <Flex minH = {"100vh"}   justifyContent={"center"} alignItems={"center"} px = {4}>
            <Container maxW = {Container.md} padding = {0}>
                <Box dispaly = {{base :"none",md : "block"}}>
                    <Image src = ""/>

                </Box>

            </Container>

        </Flex>
    )
}







export default AuthPage
