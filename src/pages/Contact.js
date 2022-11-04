import React from 'react';
import { Container } from '@chakra-ui/react';

import Footer from '../components/Footer';
import ContactHeader from '../components/ContactHeader';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <Container maxWidth="720px" py="44px">
      <ContactHeader />
      <ContactForm />
      <Footer />
    </Container>
  )
}

export default Contact;