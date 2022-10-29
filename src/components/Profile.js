import React from 'react';
import { chakra, Image, Box, Heading } from '@chakra-ui/react';
import OptionsIcon from '../assets/icons/options-icon.png';
import ProfileImg from '../assets/img/profile-img.png';

const OptionsButton = (
  <chakra.button aria-label="Options" ml="auto" display="block" w="40px" h="40px">
    <img src={OptionsIcon} alt="Options icon"/>
  </chakra.button>
)

const Profile = () => {
  return (
    <chakra.header>
      { OptionsButton }

      <Box boxSize="88px" mx="auto" mb={6}>
        <Image src={ProfileImg} alt='Profile Picture' id="profile__img" />
      </Box>

      <Heading id="twitter" fontSize="20px" textAlign="center">tolulopemalomo</Heading>
    </chakra.header>
  )
}

export default Profile;