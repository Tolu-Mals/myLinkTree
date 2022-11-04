import React from 'react';
import { 
  Container, 
  chakra, 
  Heading, 
  Text, 
  FormControl, 
  Input, 
  Textarea, 
  Button,
  FormLabel,
  Box,
  VStack,
  Flex
} from '@chakra-ui/react';
import Footer from '../components/Footer';
import Checkbox from '../components/Checkbox';

const WideBox = ({ children }) => (
  <Box w="100%">{children}</Box>
);

const Contact = () => {
  return (
    <Container maxWidth="720px" py="44px">
      <chakra.header>
        <Heading fontSize="36px" mb={4} color="gray.900">Contact Me</Heading>
        <Text fontSize="18px" color="gray.500" mb={12}>Hi there, contact me to ask me about anything you have in mind.</Text>

        <FormControl as="form">
          <VStack textAlign={"left"} spacing={6} mb={8}>

            <Flex w="100%" gap="24px" sx={{
              '@media screen and (max-width: 450px)': {
                flexDirection: 'column',
              }
            }}>
              <WideBox w="100%">
                <FormLabel htmlFor='first_name'>First name</FormLabel>
                <Input type="text" id="first_name" placeholder='Enter your first name' />
              </WideBox>

              <WideBox>
                <FormLabel htmlFor='last_name'>Last name</FormLabel>
                <Input type="text" id="last_name" placeholder='Enter your last name' />
              </WideBox>
            </Flex>

            <WideBox>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <Input type="email" id="email" placeholder='yourname@email.com' />
            </WideBox>

            <WideBox>
              <FormLabel htmlFor='message'>Message</FormLabel>
              <Textarea placeholder="Send me a message and I'll reply you as soon as possible..." id="message" py={3} px="14px" />
            </WideBox>

            <Checkbox spacing="8px" alignItems={"start"} w="100%">
              You agree to providing your data to Tolulope who may contact you.
            </Checkbox>
          </VStack>

          <Button id="btn__submit" width="100%" variant="action">Send Message</Button>
        </FormControl>
      </chakra.header>
      <Footer />
    </Container>
  )
}

export default Contact;