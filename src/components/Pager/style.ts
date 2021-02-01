import styled from 'styled-components'

const Pagination = styled.div`
     display: flex;
     justify-content: center;
     padding: 20px;
     background-color: #fff;
     span {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ffffff;
        border: 1px solid #ced3d9;
        width: 39px;
        height: 39px;
        border-radius: 3px;
        margin-right: 3px;
        cursor: pointer;
        transition: all 0.1s ease-out;
        &.page-disabled {
            border-color: #E6ECF2;
            color: #999;
            cursor: not-allowed;
        }
        &.page-prev i, &.page-next i{
            margin-top: 1px;
            margin-right: 2px;
            font-size: 18px;
        }
        &.page-next{
            width: auto;
            padding: 0 15px;
        }
        &.page-current {
            transition: all 0.1s ease-in;
            background: #09f;
            border-color: #09f;
            color: #fff;
            &:hover {
                color: #fff;
            }
        }
        &:hover {
            color: #0099ff;
            border-color: #0099ff;
        }
        &:last-child{
            margin-right: 0;
        }
      }
      
     .omit {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 10px 0 7px;
     }
     .page-jump {
        display: flex;
        align-items: center;
        margin-left: 15px;
        .page-jump-txt2{
            margin: 0 8px;
        }
        .page-input {
            height: 33px;
            line-height: 33px;
            border: 1px solid #ced2d9;
            border-radius: 3px;
            color: #333;
            padding: 0 10px;
            width: 58px;
            &:hover {
                border-color: #b6babf;
            }
            &:focus {
                border-color: #0091f2;
            }
        }
        .page-jump-btn{
            cursor: pointer;
        }
    }
`

export {Pagination}
