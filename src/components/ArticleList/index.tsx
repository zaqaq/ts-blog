import React, {FC, useCallback} from 'react';
import {
  ListContainer, ListItem, Col, Thumb, Inner, Title, LabelArrow, Des, Text, Meta, EmptyList
} from './style'
import {Link, useHistory, useLocation} from 'react-router-dom'
import axios from "@/api/axios"
import { IAricleList } from '@/types'
import {useReStoreScrollTop} from "@/useHooks";

interface IProps {
  articleList: IAricleList[]
}

const ArticleList: FC<IProps> = ({articleList}) => {
  const { pathname } = useLocation()
  useReStoreScrollTop(pathname)
  const history = useHistory()

  const toArticleDetails = useCallback(async(details_id: number) => {
    sessionStorage.setItem(pathname, `${window.scrollY}`)
    const resCode: {code: boolean} = await axios.post('/update-read',{details_id});
    if(resCode.code){
      history.push(`/article-detail${details_id}`)
    }
  } ,[history, pathname])

  return (
    <>
      {
        articleList.length > 0 ? (
          <>
            <ListContainer>
              {
                articleList.map((item: IAricleList, index: number) => (
                  <ListItem key={index}>
                    <Col>
                      <Thumb>
                        <span onClick={() => toArticleDetails(item.details_id)}>
                          <img src={require('@/assets/images/5.png').default} alt=""/>
                        </span>
                      </Thumb>
                      <Inner>
                        <Title>
                          <Link to='/' className='tags'>
                            {item.tag}
                            <LabelArrow></LabelArrow>
                          </Link>
                          <Des onClick={() => toArticleDetails(item.details_id)}>
                            {item.title}
                          </Des>
                        </Title>
                        <Text>{item.des}</Text>
                        <Meta>
                          <p>
                            <i className="iconfont icon-riqi"></i>
                            {item.publish_date}
                          </p>
                          <p>
                            <i className="iconfont icon-pinglun"></i>
                            {item.comment_count}条评论
                          </p>
                          <p>
                            <i className="iconfont icon-yueduliang"></i>
                            {item.read_count}次阅读
                          </p>
                          <p>
                            <i className="iconfont icon-dianzan"></i>
                            {item.praise_count}人点赞
                          </p>
                          <p onClick={() => toArticleDetails(item.details_id)}>
                            <i className="iconfont icon-yuedu"></i>
                            阅读全文
                          </p>
                        </Meta>
                      </Inner>
                    </Col>
                  </ListItem>
                ))
              }
            </ListContainer>
          </>
        ) : (
          <EmptyList>
            暂无相关列表信息
          </EmptyList>
        )
      }
    </>
  );
};

export default ArticleList;
