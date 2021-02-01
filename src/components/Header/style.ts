import styled from "styled-components";

const HeaderWrap = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1001;
    width: 100%;
    transition: 0.2s;
    background-color:#fff;
    box-shadow: 0 1px 3px rgba(18,18,18,.1);
`

const HeaderCon = styled.div`
    display: flex;
    align-items: center;
    width: 1305px;
    height: 54px;
    background-color:#fff;
    margin: 0 auto;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    img{
        height: 35px;
    }
`

const MenuList = styled.ul`
    display: flex;
    flex-shrink: 0;
    margin-left: 25px;
`
const MenuItem = styled.li`
    position: relative;
    overflow: hidden;
    &:hover{
        overflow: visible;
        .icon-jiantouxia{
            transform: rotate(180deg);
            transform-origin: 50% 57%;  
        }
        > ul {
          top: 51px;
          opacity: 1;
        }
    }
    > span{
      display: flex;
      align-items: center;
      padding: 15px 10px;
      font-size: 15px;
      cursor: pointer;
      &:hover{
        color: #09f;
      }
      .ficon{
        margin-right: 3px;
      }
      .icon-jiantouxia{
        margin-left: 3px;
        transition: .2s ease-in;
      }
    }
`

const SubMenu = styled.ul`
    position: absolute;
    top: 65px;
    left: 50%;
    z-index: 999;
    transform: translateX(-50%);
    min-width: 100%;
    padding-bottom: 3px;
    background-color: rgb(255, 255, 255);
    border-top: 3px solid #09f;
    opacity: 0;
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    transition: .2s ease-in;
    &:before{
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -19px;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-bottom-color: #09f;
    }
`
const SubMenuItem = styled.li`
    &:hover{
        background-color: rgba(0,153,255,.07);
        color: #f60;
    }
    span{
        display: flex;
        padding: 7px 10px 7px 10px;
        cursor: pointer;
        i{
           margin-top: -1px;
           margin-right: 3px;
        }
    }
`
export {
  HeaderWrap, HeaderCon, Logo, MenuList, MenuItem, SubMenu, SubMenuItem
}
