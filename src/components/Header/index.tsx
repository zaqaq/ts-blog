import React from 'react';
import {
  HeaderWrap,
  HeaderCon
} from './style'
import Title from "./chunks/Title";
import Menu from "./chunks/Menu";
import Search from "./chunks/Search";
import UserInfo from "./chunks/UserInfo";

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderCon>
        <Title/>
        <Menu/>
        <Search/>
        <UserInfo/>
      </HeaderCon>
    </HeaderWrap>
  );
};

export default Header;
