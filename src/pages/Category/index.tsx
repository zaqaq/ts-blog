import React, {useCallback, useEffect, useState} from 'react';
import ArticleList from "@/components/ArticleList";
import Pager from "@/components/Pager";
import {useParams, useLocation} from "react-router-dom";
import {IAricleListAll} from "@/types";
import axios from "@/api/axios";
import styled from 'styled-components'
import queryString from 'query-string'
import GobalLoading from "@/components/Loading/GobalLoading"
import CategoryDes from "@/components/CategoryDes/indedx";
import {useScrollToTop} from "@/useHooks";

const CategoryWrap = styled.div`
    margin-right: 25px;
`

const SignBoardWrap = styled.div`
    display: flex;
    justify-content: center;
`
const SignBoard = styled.div`
    position: relative;
    width: 800px;
    margin-top: 10px;
    margin-bottom: 20px;
    .sign {
      width: 100%;
      padding: 40px 25px 20px;
      background: #ececec;
      border-radius: 15px;
      font-size: 16px;
      color: saddlebrown;
      font-family: serif;
      font-weight: bold;
    }
    .strings {
      width: 5px;
      height: 70px;
      position: absolute;
      top: -50px;
      background-color: brown;
      &.left{
        left: 65px;
      }
      &.right{
        right: 65px;
      }
      &:after{
        content: '';
        position: absolute;
        left: -10px;
        bottom: -15px;
        width: 25px;
        height: 25px;
        background-color: brown;
        border-radius: 50%;
      }
    }
  
`

const Category = () => {
  useScrollToTop()
  const parmas = useParams<{navId: string}>()
  const location = useLocation()
  const navId = parmas.navId;
  const pageNum =  location.search ? Number(queryString.parse(location.search).pageNum) : 1
  const [loadingFlag, setLoadingFalg] = useState(true)
  const [resList, setResList] = useState<IAricleListAll>({
    totalNum: 0,
    articleList: []
  })

  const renderList = useCallback(async (pageNum: number) => {
    const res: IAricleListAll = await axios.post('/category-list',{
      navId,
      pageNum
    })
    setResList(res)
    setLoadingFalg(false)
    return true
  }, [navId])

  useEffect(() => {
    setLoadingFalg(true)
    renderList(pageNum)
  }, [pageNum, renderList])



  const handlePageNum = async (num: number) => {
    const status = await renderList(num)
    if(status){
      window.history.pushState({}, '', `?pageNum=${num}`);
    }
  }

  const {totalNum, articleList} = resList;
  return (
    <>
      {
        loadingFlag ? <GobalLoading/> : (
          <CategoryWrap>
            <SignBoardWrap>
              <SignBoard>
                <div className="sign">
                  <CategoryDes type={parmas.navId}/>
                </div>
                <div className="strings left"></div>
                <div className="strings right"></div>
              </SignBoard>
            </SignBoardWrap>
            <ArticleList articleList={articleList}/>
            <Pager total={totalNum} pageNum={pageNum} handlePageNum={handlePageNum}/>
          </CategoryWrap>
        )
      }
    </>
  );
};

export default Category;
