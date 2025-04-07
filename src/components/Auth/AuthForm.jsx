import { Box, Image, VStack, Text, Flex, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [islogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [input,setinput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleAuth = () => {
    if (!input.email ||!input.password) {
      alert("Please fill all the fields");
      return;
    }
    navigate("/");
  };

  return (
    <>

    <Box border={"1px solid gray"} borderRadius={"md"} padding={5}>
      <VStack spacing={4}>
        <Image src="./logo.png" alt="Logo" h={24} cursor={"pointer"} />
        
        <Input
          placeholder="Email"
          fontSize={14}
          type="email"
          value = {input.email}
          onChange = {(e) => setinput({...input,email:e.target.value})} 
        />
        
        <Input
          placeholder="Password"
          fontSize={14}
          type="password"
          value={input.password}
          onChange = {(e) => setinput({...input,password:e.target.value})}
        />
        
        {!islogin && (
          <Input
            placeholder="Confirm Password"
            fontSize={14}
            type="password"
            value={input.confirmPassword}
            onChange = {(e) => setinput({...input,confirmPassword:e.target.value})}
          />
        )}
        
        <Button w={"full"} colorScheme="blue" font-size ={14} onClick={handleAuth}>
          {islogin ? "Login" : "Signup"}
        </Button>

        {/* ....................OR..................... */}
        <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
          <Box flex={2} h={"2px"} bg={"gray.400"} />
          <Text mx={1} color={"white"}>OR</Text>
          <Box flex={2} h={"2px"} bg={"gray.400"} />
        </Flex>
      <Flex alignItems = {"center"} justifyContent={"center"} cursor = {"pointer"} >
       <Image src = './Google.jpg' w = {5} alt = 'G' />
       <Text  mx = "2" color = {"blue.500"} >
        Log in with Google 
       </Text>
      </Flex> 
      </VStack>
    </Box>
    <Box border = {"1px solid gray"} borderRadius = {"md"} padding = {5} >
    <Flex alignItems = {"center"} justifyContent = {"center"} cursor = {"pointer"} >
      <Box mx = {2} fontsize = {14}>
        {islogin ? "Don't have an account?" : "Already have an account?"}
      </Box>
      <Box onClick={() => setIsLogin(!islogin)} color = {"blue.500" } cursor = {"pointer"}>
        {islogin ? "Sign Up" : "Login"}
      </Box>
    </Flex>
    </Box>


  </>
  );
};

export default AuthForm ;
