import { Box, Button, FormControl, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react';

const ContactUs = () => (
  <Box p={4}>
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">Contact Us</Heading>
      <FormControl>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="name" type="text" />
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" type="email" />
        <FormLabel htmlFor="message">Message</FormLabel>
        <Textarea id="message" />
        <Button mt={4} colorScheme="blue">Send</Button>
      </FormControl>
    </VStack>
  </Box>
);

export default ContactUs;