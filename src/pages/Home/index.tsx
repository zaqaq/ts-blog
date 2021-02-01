import React, {useCallback, useEffect, useState} from 'react';
import {connect} from 'react-redux'
import {addNUM, rmNUM} from '../../store/count/action'
import {RootState} from '../../store'
import { IAricleListAll } from '@/types'
import styled from 'styled-components'
import GobalLoading from "@/components/Loading/GobalLoading"
import ArticleList from "@/components/ArticleList"
import axios from "@/api/axios"
import {useParams} from "react-router-dom"
import Pager from "@/components/Pager"

// interface IProps {
//   data: number;
//   addNUM: (count: number) => void;
//   rmNUM: (count: number) => void;
// }

const HomeWrap = styled.div`
   margin-right: 20px;
`

const Home = () => {

  const parmas = useParams<{id: string}>()
  const pageNum = parmas.id ? Number(parmas.id) : 1
  const [loadingFlag, setLoadingFalg] = useState(true)
  const [resList, setResList] = useState<IAricleListAll>({
    totalNum: 0,
    articleList: []
  })

  const renderList = useCallback(async (pageNum: number) => {
    const res: IAricleListAll = await axios.post('/article-list',{
      pageNum
    })
    setResList(res)
    setLoadingFalg(false)
    return true
  }, [])

  useEffect(() => {
    renderList(pageNum)
  }, [pageNum, renderList])



  const handlePageNum = async (num: number) => {
    const status = await renderList(num)
    if(status){
      window.history.pushState({}, '', `/page${num}`);
    }
  }

  const {totalNum, articleList} = resList;
  return (
    <>
      {
        loadingFlag ? <GobalLoading/> : (
          <HomeWrap>
            567
            <ArticleList articleList={articleList}/>
            <Pager total={totalNum} pageNum={pageNum} handlePageNum={handlePageNum}/>
          </HomeWrap>
        )
      }
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  const {count} = state;
  return {data: count}
}

const mapDispatchToProps = {addNUM, rmNUM}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
