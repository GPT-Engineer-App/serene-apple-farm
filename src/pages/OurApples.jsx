import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const OurApples = () => (
  <Box p={4}>
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">Our Apples</Heading>
      <Text fontSize="lg">
        We take pride in growing a wide range of apple varieties, each selected for its unique flavor profile and
        adaptability to our climate. From the crisp and tangy 'Gravenstein' to the sweet and aromatic 'Honeycrisp',
        our apples are carefully nurtured from blossom to harvest.
      </Text>
      <Text fontSize="lg">
        Each variety has its own season, and we celebrate the harvest with great care. Whether you are looking for
        apples for baking, juicing, or eating right off the tree, we have the perfect apple for you.
      </Text>
    </VStack>
  </Box>
);

export default OurApples;