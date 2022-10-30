import React from 'react';
import { chakra, Divider, Flex, Text, Image, Box } from '@chakra-ui/react';
import ZuriLogo from '../assets/logo/zuri-logo.png';
import IngressiveLogo from '../assets/logo/ingressive-logo.png';

const Footer = () => {
  return (
    <chakra.footer pt="32px">
      <Divider mb="24px" />
      <Flex flexDirection={{ base: "column", md: "row" }} justifyContent={{ base: "flex-start", md: "space-between" }}>

        <Box w={{ base: "140.69px", md: "185.03px" }} h={{ base: "24px", md: "24.74px" }} mb="16px">
          <Image src={ZuriLogo} alt="Zuri logo" />
        </Box>
        
        <Text color="gray.500" fontSize={{ base: "14px", md: "16px" }} mb="16px">HNG Internship 9 Frontend Task</Text>

        <Box w={{ base: "99.1px", md: "132.13px" }} h={{ base: "24px", md: "32px" }}>
          <Image src={IngressiveLogo} alt="Ingressive logo" />
        </Box>

      </Flex>
    </chakra.footer>
  )
}

export default Footer;