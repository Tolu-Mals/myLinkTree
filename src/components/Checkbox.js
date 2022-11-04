import React, { useId, useState } from 'react';
import { chakra, Flex } from '@chakra-ui/react';
import checkIcon from '../assets/icons/check-icon.png';

const Checkbox = ({ children, spacing="16px", ...rest }) => {
  const id = useId();
  const [isChecked, setIsChecked] = useState(false);

  const checkboxStyle = {
    minWidth: '20px',
    minHeight: '20px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    border: isChecked ? '1px solid #1570EF' : '1px solid #D0D5DD',
    backgroundImage: isChecked ? `url(${checkIcon})` : '',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: '14px 14px',
    maxWidth: '20px',
    maxHeight: '20px',
    boxShadow: 'none',
    flex: 1,
    _dataFocusVisible: {
      outline: 'none',
      border: '1px solid #84CAFF',
      boxShadow: '0px 0px 0px 4px #D1E9FF',
    },
    _focusVisible: {
      outline: 'none',
      border: '1px solid #84CAFF',
      boxShadow: '0px 0px 0px 4px #D1E9FF',
      zIndex: 1,
    },
    _blur: {
      boxShadow: 'none',
    },
    _active: {
      outline: 'none',
      boxShadow: 'none',
      border: 'none'
    }
  };

  const handleClick = () => {
    setIsChecked(!isChecked);
  }

  return (
    <Flex {...rest}>
      <chakra.div role="checkbox" sx={checkboxStyle} id={`checkbox-${id}`} onClick={handleClick} mr={spacing} tabIndex={"0"}></chakra.div>
      <label>{ children }</label>
    </Flex>
  )
}

export default Checkbox;