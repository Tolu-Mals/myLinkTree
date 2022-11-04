import React from 'react';
import { chakra, Heading, Text } from '@chakra-ui/react';

const ContactHeader = () => {
  return (
    <chakra.header>
      <Heading fontSize="36px" mb={4} color="gray.900">Contact Me</Heading>
      <Text fontSize="18px" color="gray.500" mb={12}>Hi there, contact me to ask me about anything you have in mind.</Text>
    </chakra.header>
  )
}

export default ContactHeader;