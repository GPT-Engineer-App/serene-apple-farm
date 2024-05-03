import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const AboutUs = () => (
  <Box p={4}>
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">About Us</Heading>
      <Text fontSize="lg">
        Nestled in the heart of Norway's pristine natural landscapes, our apple farm has been a family-run
        establishment for over a century. With a commitment to sustainable farming practices and a passion for
        quality, we cultivate a variety of apple species that thrive in the cool, northern climate.
      </Text>
      <Text fontSize="lg">
        Our farm is not just a place of business, but a piece of living history and a testament to the dedication
        of generations of farmers who have tended this land. We invite you to learn more about our methods,
        our heritage, and the unique qualities that make our apples truly special.
      </Text>
    </VStack>
  </Box>
);

export default AboutUs;