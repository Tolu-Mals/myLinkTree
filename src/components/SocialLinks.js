import React from 'react';
import { Flex, Image, Box } from '@chakra-ui/react';
import GithubLogo from '../assets/logo/github-logo.png';
import SlackLogo from '../assets/logo/slack-logo.png';

const SocialLinks = () => {
  return (
    <Flex justifyContent={"center"} gap="24px" py="24px" mb="32px">
      <Box boxSize="24px">
        <Image src={GithubLogo} alt="Github logo"/>
      </Box>
      <Box boxSize="24px">
        <Image src={SlackLogo} alt="Slack logo" />
      </Box>
    </Flex>
  )
}

export default SocialLinks