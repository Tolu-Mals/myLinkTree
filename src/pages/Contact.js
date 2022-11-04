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
} from '@chakra-ui/react';
import Footer from '../components/Footer';
import Checkbox from '../components/Checkbox';

const Contact = () => {
  return (
    <Container maxWidth="1216px" py="44px">
      <chakra.header>
        <Heading>Contact Me</Heading>
        <Text>Hi there, contact me to ask me about anything you have in mind.</Text>

        <FormControl as="form">
          <FormLabel htmlFor='first_name'>First name</FormLabel>
          <Input type="text" id="first_name" placeholder='Enter your first name' />

          <FormLabel htmlFor='last_name'>Last name</FormLabel>
          <Input type="text" id="last_name" placeholder='Enter your last name' />

          <FormLabel htmlFor='email'>Email</FormLabel>
          <Input type="email" id="email" placeholder='yourname@email.com' />

          <FormLabel htmlFor='message'>Message</FormLabel>
          <Textarea placeholder="Send me a message and I'll reply you as soon as possible..." id="message" py={3} px="14px" />

          <Checkbox>I agree to all terms</Checkbox>
          <Button id="btn__submit" width="100%">Send Message</Button>
        </FormControl>
      </chakra.header>
      <Footer />
    </Container>
  )
}

export default Contact;