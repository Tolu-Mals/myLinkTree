import React from 'react';
import { Container } from '@chakra-ui/react';
import Profile from './components/Profile';
import Links from './components/Links';

function App() {
  return (
    <Container maxWidth="1216px" py="44px">
      <Profile />
      <Links />
    </Container>
  );
}

export default App;
