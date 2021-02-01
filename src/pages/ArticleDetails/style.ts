import styled from "styled-components";

const ArticleWrap = styled.div`
    flex: 1;
    margin-right: 20px;
`
const ArticleCon = styled.div`
`
const ArticleTitle = styled.div`
    padding: 0 15px 15px;
    background-color: #fff;
    h1{
      padding-top: 15px;
      font-size: 30px;
      font-weight: 700;
      text-align: center;
    }
`
const ArticleNav = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 0;
    border-bottom: 1px solid #F3F3F3;
    overflow: hidden;
`

const ArticleNavP = styled.p`
      position: relative;
      margin-right: 25px;
      color: #999;
      &:after{
          content: '';
          position: absolute;
          top: 8px;
          right: -12px;
          width: 1px;
          height: 12px;
          background-color: #e6ecf2;
      }
      &:last-child{
          &:after{width: 0}
      }
      i {
          margin-right: 5px;
      }
`

const ArticleDetail = styled.div`
    padding-bottom: 15px;
    background-color: #fff;
    overflow: hidden;
`
const DetailDes = styled.div`
    padding: 10px;
    margin-left: 15px;
    margin-bottom: 15px;
    border-left: 8px solid rgba(102,128,153,0.075);
    background-color: rgba(102,128,153,0.05);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`
const DetailCon = styled.div`
    padding: 0 15px;
`

const ArticleReative = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 15px;
    background-color: #fff;
    border-top: 1px solid #ccc;
    overflow: hidden;
`

const NumPlay = styled.div`
    &.prev{
        margin-right: auto;
    }
    &.next{
        margin-left: auto;
    }
    span{
        margin-left: 5px;
        cursor: pointer;
    }
`

const Articlecomments = styled.div`
    margin-top: 20px;
`

const CommentsTitle = styled.div`
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    color: #fff;
    h3{
        padding: 0 10px;
        background-color: #81C269;
        text-align: center;
    }
    .lovely{
        position: relative;
        padding: 0 10px;
        text-align: center;
        background-color: rgb(233,120,102);
        border-radius: 5px;
        cursor: pointer;
        i{
            position: absolute;
            left: 10px;
            top: 0;
            font-size: 18px;
        }
        span{
            margin-left: 25px;
        }
    }
`

const CommentsText = styled.div`
    margin-top: 8px;
    textarea{
        width: 100%;
        background-color: #fff;
        height: 100px;
        padding: 5px 0;
        text-indent: 10px;
        resize: none;
        border-radius: 5px;
        outline: 0;
        border: 0;
        &::-webkit-scrollbar {
            width: 7px;
        }
        
        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: #c0c0c0;
        }
       
        &::-webkit-scrollbar-track {
            display: none;
        }
    }
    .coments-params{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .name{
            padding: 10px;
            input{
                width: 130px;
                height: 35px;
                text-indent: 10px;
            }
        }
        .coments-btn{
            display: table; 
            padding: 7px 15px;
            background-color: #1890ff;
            font-size: 14px;
            color: #fff;
            border-radius: 3px;
            cursor: pointer;
      }
    }
`

const CommentsList = styled.div`
    margin-top: 10px;
    padding: 10px 15px;
    background: #ffff;
`

const CommentsNum = styled.div`
    padding: 5px 0;
    border-bottom: 1px dotted #ddd;
`

const CommentsItem = styled.li`
    display: flex;
    position: relative;
    margin-top: 10px;
`

const MediaLeft = styled.div`
    position: absolute;
    margin-left: 10px;
    width: 40px;
    height: 40px;
    background-color: #fd8c84;
`

const MediaRight = styled.div`
    width: 100%;
    margin-top: 10px;
    margin-left: 30px;
    padding: 5px 10px 5px 30px;
    color: #666;
    background-color: #f9f9f1;
    .author-name{
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }
`

const EmptyItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    height: 200px;
    p{
        height: 200px;
        padding: 0 30px;
        text-align: center;
        line-height: 200px;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        background-color: #fd8c84;
        text-rendering: geometricPrecision;
        -webkit-font-smoothing: antialiased;
        border-radius: 50%;
    }
`

export {
  ArticleWrap, ArticleCon, ArticleTitle, ArticleNav, ArticleNavP, ArticleDetail, DetailDes, DetailCon, ArticleReative, NumPlay,Articlecomments, CommentsTitle, CommentsText, CommentsList, CommentsNum, CommentsItem, MediaLeft, MediaRight, EmptyItem
}
