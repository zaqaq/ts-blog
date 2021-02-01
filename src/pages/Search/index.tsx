import React, {useCallback, useEffect, useMemo, useState} from 'react';
import { IAricleListAll } from '@/types'
import styled from 'styled-components'
import GobalLoading from "@/components/Loading/GobalLoading"
import ArticleList from "@/components/ArticleList"
import axios from "@/api/axios"
import { useLocation } from "react-router-dom"
import Pager from "@/components/Pager"
import queryString from 'query-string'

const SearchWrap = styled.div`
   margin-right: 20px;
`

const Title = styled.div`
    padding: 15px;
    font-size: 16px;
    background-color: #fff;
    margin-bottom: 1px;
    span{
        color: #09f;
    }
`

const SearchNull = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 380px;
    margin-top: 100px;
`

const Search = () => {
  const location = useLocation()
  const search = queryString.parse(location.search);
  const pageNum = useMemo(() => {
    return search.pageNum ? Number(search.pageNum) : 1
  }, [search.pageNum])

  const [loadingFlag, setLoadingFalg] = useState(true)
  const [resList, setResList] = useState<IAricleListAll>({
    totalNum: 0,
    articleList: []
  })

  const renderList = useCallback(async (pageNum: number) => {
    const res: IAricleListAll = await axios.post('/search-list',{
      key: search.s,
      pageNum
    })

    setResList(res)
    setLoadingFalg(false)
    return true
  }, [search.s])

  useEffect(() => {
    setLoadingFalg(true)
    renderList(pageNum)
  }, [pageNum, renderList])



  const handlePageNum = async (num: number) => {
    const status = await renderList(num)
    if(status){
      window.history.pushState({}, '', `/search?s=${search.s}&pageNum=${num}`);
    }
  }
  const {totalNum, articleList} = resList;

  return (
    <>
      {
        loadingFlag ? <GobalLoading/> : (
          articleList.length > 0 ? (
            <SearchWrap>
              <Title>共<span> {totalNum} </span>条关于 "<span>{search.s}</span>" 的文章</Title>
              <ArticleList articleList={articleList}/>
              <Pager total={totalNum} pageNum={pageNum} handlePageNum={handlePageNum}/>
            </SearchWrap>
          ) : (
            <SearchNull>
              <img src={require('@/assets/images/search-null.png').default} width='150' height='150'/>
              <p>抱歉，没有找到符合条件的文章</p>
            </SearchNull>
          )
        )
      }
    </>
  );
};

export default Search
