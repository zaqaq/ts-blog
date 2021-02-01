import styled from 'styled-components'

const SidebarWrap = styled.div`
    flex-shrink: 0;
    width: 275px;
    margin-left: auto;
`
const BlogIntro = styled.div`
    padding: 0 15px 10px;
    margin-bottom: 18px;
    background-color: #ffff;
    border-radius: 5px;
    box-shadow: 0 1px 2px #c5c5c5;
`
const BTitle = styled.h3`
    color: #fff;
    display: inline-block;
    padding: 4px 15px;
    font-size: 14px;
    font-weight: 700;
    background-color: #09f;
`
const BDesc = styled.div`
    margin-top: 10px;
    line-height: 24px;
    .desc{
        padding-bottom: 5px;
        color: #666;
        border-bottom: 1px dotted #e6ecf2;
    }
    .telcn{
        padding-top: 5px;
        ul{
            list-style-type: disc;
            padding-left: 30px;
            color: #666;
        }
    }
`
const Weight = styled.div``
const WMoudle = styled.div`
    margin-bottom: 18px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 2px #c5c5c5;
    ul{
        padding: 8px 15px;
    }
`
const WTitle = styled.h3`
    position: relative;
    padding-left: 15px;
    font-size: 16px;
    line-height: 40px;
    cursor: default;
    border-bottom: 1px solid #f1f1ef;
    i{
        margin-right: 5px;
        &.iconzuijingengxin_huaban{
            color: #4dd820;
        }
        &.iconpaihang{
            color: #ffa500;
        }
        &.iconlabeltag{
            color: #f92e2e;
        }
    }
    &::after{
        content: "";
        position: absolute;
        width: 108px;
        height: 2px;
        background: #09f;
        left: 0;
        bottom: -1px;
    }
`
const UpdateList = styled.li`
    display: flex;
    padding: 5px 0;
    border-bottom: solid 1px #eee;
    &:first-child{
        padding-top: 0;
    }
    &:last-child{
        padding-bottom: 0;
        border-bottom-width: 0;
    }
    > span{
        display: block;
        width: 80px;
        height: 80px;
        background-color: brown;
        cursor: pointer;
    }
`
const WListText = styled.div`
    flex: 1;
    margin-left: 10px;
    span{
        display: -webkit-box;
        margin-bottom: 5px;
        color: #666;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        cursor: pointer;
        overflow: hidden;
        &:hover{
            color: #f90;
        }
    }
    .other{
        display: flex;
        p {
            position: relative;
            display: flex;
            margin-right: 20px;
            font-size: 12px;
            color: #666;
            &:after{
              content: '';
              position: absolute;
              top: 5px;
              right: -10px;
              width: 1px;
              height: 10px;
              background-color: #e6ecf2;
            }
            &:last-child{
                margin-right: 0;
                &:after{
                    width: 0;
                }
            }
            i{
                margin-top: -3px;
                margin-right: 3px;
            }
        }
    }
`

const RankList = styled.li`
    position: relative;
    margin-bottom: 5px;
    &:nth-child(1) span {
        background-color: #fd8c84;
    }
    
    &:nth-child(2) span {
        background-color: #7fd75a;
    }
    
    &:nth-child(3) span {
        background-color: #09f;
    }
    &:last-child{
        margin-bottom: 0;
    }
    span {
        position: absolute;
        top: 6px;
        left: 0;
        width: 20px;
        height: 20px;
        text-align: center;
        color: #fff;
        background: #ccc;
        line-height: 18px;
        font-style: italic;
        font-size: 13px;
        border-radius: 3px;
    }
    p {
        padding-left: 25px;
        height: 30px;
        line-height: 30px;
        color: #666;
        cursor: pointer;
        &:hover{
            color: #f90;
        }
    }
`
const HotTags = styled.div`
    padding: 8px 15px 0;
    a {
        display: inline-block;
        margin: 0 2px 8px 0;
        padding: 5px 15px;
        border: 1px solid #f0f0f0;
        color: #666;
        line-height: 19px;
        font-size: 13px;
    }
`
export {
  SidebarWrap, BlogIntro, BTitle, BDesc, Weight, WMoudle, WTitle, UpdateList, WListText, RankList, HotTags
}
