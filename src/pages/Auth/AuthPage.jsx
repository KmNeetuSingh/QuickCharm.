import React from "react";
import { Container, Flex, VStack, Box, Image } from "@chakra-ui/react";
import AuthForm from "../../components/Auth/AuthForm";
const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={5}>
      <Container maxW={"container.md"} padding={0}>
        {/*left hand-side */}
        <Flex justifyContent={"center"} alignItems={"center"} gap={20}>
          <Box dispaly={{ base: "none", md: "block" }}>
            <Image src="auth.png" h={500} alt="Phone img" />
          </Box>

          {/* Right hand-side} */}
          <VStack spacing={4} align={"strech"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the app.</Box>
            <Flex gap={8} justifyContent={"center"}>
              <Image src="playstore.jpg" alt="App Store" h={10} />
              <Image src="microsoft.png" alt="Microsoft" h={10} />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
