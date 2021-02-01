import React, { KeyboardEvent, useRef} from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'


const SearchWrap = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
`
const Container = styled.div`
    //flex-grow: 1;
    width: 300px;
    height: 37px;
    margin-left: 20px;
`
const Tool = styled.div`
    height: 100%;
`
const Bar = styled.div`
    position: relative;
    height: 100%;
    i{
        position: absolute;
        top: 1px;
        right: 1px;
        z-index: 1;
        padding: 0 10px;
        height: 35px;
        line-height: 35px;
        font-size: 20px;
        border-radius: 0 16px 16px 0;
        cursor: pointer;
        transition: 0.2s;
    }
`
const Input = styled.input.attrs(() => ({
  type: 'text',
  placeholder: '请输入要搜索的内容',
  autoComplete: 'off'
}))`
  width: 100%;
  height: 100%;
  padding: 5px 50px 5px 16px;
  border: 1px solid #ebebeb;
  background-color: #f6f6f6;
  color: #121212;
  border-radius: 999px;
  &:focus{
    background-color: #fff;
    border-color: #8590a6;
    ~ .icon-sousuo{
        color: #fff;
        background-color: #09f;
    }
  }
`
const Button = styled.button``


const Search = () => {
  const history = useHistory();
  const inputRef = useRef<HTMLInputElement>(null)

  const handlePush = (val: string) => {
    history.push({
      pathname: '/search',
      search: `s=${val}`
    });
  }

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.keyCode === 13) {
      handlePush(event.currentTarget.value)
    }
  }

  const handleClick = () => {
    const val = inputRef.current!.value.trim();
    handlePush(val)
  }

  return (
    <SearchWrap>
      <Container>
        <Tool>
          <Bar>
            <Input onKeyUp={handleSearch} ref={inputRef}/>
            <i className='iconfont icon-sousuo' onClick={handleClick}></i>
          </Bar>
          <Button></Button>
        </Tool>
      </Container>
    </SearchWrap>
  );
};

export default Search;
