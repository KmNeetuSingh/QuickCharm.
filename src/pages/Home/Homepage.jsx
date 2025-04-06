import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Homepage = () => {
  return (
    <Box className="homepage" p={8} textAlign="center">
      <Heading as="h1" size="xl" mb={4}>
        Welcome to the Homepage
      </Heading>
      <Text fontSize="lg">
        This is the homepage of our application.
      </Text>
    </Box>
  );
};

export default Homepage;
