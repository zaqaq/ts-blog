import React from 'react';
import {Logo} from '../style'

const Title = () => {
  return (
    <Logo>
      <img src={require('@/assets/images/logo.png').default} alt=''/>
    </Logo>
  );
};

export default Title;
