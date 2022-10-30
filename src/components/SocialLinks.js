import React from 'react';
import { Flex } from '@chakra-ui/react';
import GithubLogo from '../assets/logo/github-logo.png';
import SlackLogo from '../assets/logo/slack-logo.png';

const SocialLinks = () => {
  return (
    <Flex justifyContent={"center"} gap="24px" py="24px" mb="32px">
      <img src={GithubLogo} alt="Github logo"/>
      <img src={SlackLogo} alt="Slack logo" />
    </Flex>
  )
}

export default SocialLinks