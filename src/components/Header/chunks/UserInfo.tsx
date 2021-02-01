import React from 'react';
import styled from 'styled-components'
import Lofo from '@/assets/images/visitor.png'

const UserName = styled.div`
    display: flex;
    width: 160px;
    margin-left: 30px;
    
`
const Welcome = styled.p`
    font-size: 17px;
    font-weight: 500;
    line-height: 30px;
`
const UserLogo = styled.img.attrs(() => ({
  src: Lofo,
  width: 30,
  height: 30
}))`
  margin-left: 10px;
  border-radius: 50%;
`

const UserInfo = () => {
  return (
    <UserName>
      <Welcome>喵，欢迎来访</Welcome>
      <UserLogo></UserLogo>
    </UserName>
  );
};

export default UserInfo;
