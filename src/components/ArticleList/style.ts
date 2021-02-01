import styled from 'styled-components'


const ListContainer = styled.div`
    border-bottom: 1px solid #f5f7fa;
`

const ListItem = styled.div`
    padding: 20px;
    margin-bottom: 10px;
    color: #333;
    background-color: #fff;
`

const Col = styled.div`
    display: flex;
`
const Thumb = styled.div`
    margin-right: 30px;
    span {
      display: block;
      width: 230px;
      height: 155px;
      cursor: pointer;
      img{
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
`

const Inner = styled.div`
    
`;

const Title = styled.div`
    margin-bottom: 15px;
    .tags{
        display: inline-block;
        padding: 2px 6px 2px;
        font-size: 13px;
        color: #fff;
        white-space: nowrap;
        background-color: #09f;
        margin-right: 10px;
        position: relative;
        top: -2px;
    }
`
const LabelArrow = styled.span`
    position: absolute;
    width: 0;
    height: 0;
    vertical-align: top;
    content: "";
    top: 6px;
    right: -4px;
    border-left: 4px solid #09f;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
`
const Des = styled.h2`
    display: inline-block;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
    &:hover{
        color: #f90;
    }
`
const Text = styled.p`
    height: 82px;
    margin-bottom: 10px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 4;
`
const Meta = styled.div`
    display: flex;
    p{
        position:relative;
        font-size: 12px;
        margin-right: 20px;
        color: #999;
        &:after{
            content: '';
            position: absolute;
            top: 8px;
            right: -10px;
            width: 1px;
            height: 10px;
            background-color: #e6ecf2;
        }
        &:last-child{
            cursor: pointer;
            &:after{width: 0}
            &:hover{
                color: #f90;
            }
        }
    }
    i{
        vertical-align: -1px;
        margin-right: 3px;
    }
`
const EmptyList = styled.div`
    font-size: 16px;
    text-align: center;
`

export {
  ListContainer, ListItem, Col, Thumb, Inner, Title, LabelArrow, Des, Text, Meta, EmptyList
}
