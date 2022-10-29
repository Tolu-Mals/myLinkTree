import React from 'react';
import { chakra, Button, Stack } from '@chakra-ui/react';

const linkConfigs = [
  {
    id: null,
    url: 'https://twitter.com/tolulopemalomo',
    text: 'Twitter Link',
    title: 'Connect with me on twitter',
  },
  {
    id: 'btn__zuri',
    url: 'https://training.zuri.team/',
    text: 'Zuri Team',
    title: 'Get trained by the Zuri Team',
  },
  {
    id: 'books',
    url: 'http://books.zuri.team/',
    text: 'Zuri Books',
    title: 'You can find great books about design and coding here'
  },
  {
    id: 'book__python',
    url: 'https://books.zuri.team/python-for-beginners?ref_id=tolumals',
    text: 'Master Python programming',
    title: 'Click to buy the book',
  },
  {
    id: 'pitch',
    url: 'https://background.zuri.team',
    text: 'Background check for coders',
    title: 'We\'ll help you do a background check on your coders ',
  },
  {
    id: 'book__design',
    url: 'https://books.zuri.team/design-rules',
    text: 'Get our FREE design book',
    title: 'Grow your design skills using our book',
  },
];

const buttonLinks = linkConfigs.map(config => {
  const { id, url, text, title } = config;

  return (
    <Button 
    id={ id ? id: null } 
    as="a" 
    title={ title ? title : null } 
    href={url}
    variant="solid"
    aria-label={text}
    key={id}
    >
      { text }
    </Button>
  )
});

const Links = () => {
  return (
    <chakra.main>
      <Stack spacing="24px" py="24px">
      { buttonLinks }
      </Stack>
    </chakra.main>
  )
}

export default Links