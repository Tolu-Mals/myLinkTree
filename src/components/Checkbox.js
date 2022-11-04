import React, { useId, useState } from 'react';
import { chakra, Flex } from '@chakra-ui/react';

const Checkbox = ({ children, spacing="16px" }) => {
  const id = useId();
  const [isChecked, setIsChecked] = useState(false);

  const checkboxStyle = {
    width: '24px',
    height: '24px',
    backgroundColor: '#fff',
    border: '1px solid black',
  };

  const handleClick = () => {
    setIsChecked(!isChecked);
  }

  return (
    <Flex>
      <chakra.div role="checkbox" sx={checkboxStyle} id={`checkbox-${id}`} onClick={handleClick} mr={spacing}></chakra.div>
      <label>{ children }</label>
    </Flex>
  )
}

export default Checkbox;