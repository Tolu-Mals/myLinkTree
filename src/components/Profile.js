import React from 'react';
import { chakra, Image, Box, Heading, VisuallyHidden } from '@chakra-ui/react';
import OptionsIcon from '../assets/icons/options-icon.png';
import ProfileImg from '../assets/img/profile-img.png';

const OptionsButton = (
  <chakra.button aria-label="Options" ml="auto" display="block" w="40px" h="40px" mb="-20px">
    <img src={OptionsIcon} alt="Options icon"/>
  </chakra.button>
)

const Profile = () => {
  return (
    <chakra.header mb={{ base: "16px", md: "32px" }}>
      { OptionsButton }

      <Box boxSize="88px" mx="auto" mb={6}>
        <Image src={ProfileImg} alt='Profile Picture' id="profile__img" />
      </Box>

      <Heading id="twitter" fontSize="20px" textAlign="center">tolulopemalomo</Heading>
      <VisuallyHidden id="slack">tolumals</VisuallyHidden>
    </chakra.header>
  )
}

export default Profile;