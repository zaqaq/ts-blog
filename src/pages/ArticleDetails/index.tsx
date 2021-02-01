import React, {FC, useCallback, useEffect, useState} from 'react'
import { ArticleWrap, ArticleCon, ArticleTitle, ArticleNav, ArticleNavP, ArticleDetail, DetailDes, DetailCon, ArticleReative, NumPlay, Articlecomments, CommentsTitle, CommentsText, CommentsList,
  CommentsNum, CommentsItem, MediaLeft, MediaRight, EmptyItem
} from './style'
import './markdown.css'
import ReactMarkdown from 'react-markdown'
import axios from "@/api/axios"
import gfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {RouteComponentProps, useParams} from 'react-router-dom'
import GobalLoading from "@/components/Loading/GobalLoading"
import {IAricleListWrap} from "@/types"
import {useScrollToTop} from '@/useHooks'

const ArticleDetails: FC<RouteComponentProps> = (props) => {
  useScrollToTop();
  const [loadingFlag, setLoadingFalg] = useState(true)
  const [articleList, setArticleList] = useState<IAricleListWrap>(Object)
  const params = useParams<{ id: string }>();

  useEffect(() => {
    (async () => {
      setLoadingFalg(true)
      const res: IAricleListWrap = await axios.post('/article-details', {
        id: params.id || 1
      })

      setArticleList(res)
      setLoadingFalg(false)
    })()
  }, [params.id])

  const toArticleDetails = useCallback(async(details_id: number) => {
    const resCode: {code: boolean} = await axios.post('/update-read',{details_id});
    if(resCode.code){
      props.history.push(`/article-detail${details_id}`)
    }
  } ,[])

  const {articleDetail, prev, next} = articleList
  return (
    <>
      {
        loadingFlag ?
          <GobalLoading/> :
          (
            <ArticleWrap>
              <ArticleCon>
                {/*<div className='bread-crumbs'></div>*/}
                <ArticleTitle>
                  <h1>{articleDetail.title}</h1>
                  <ArticleNav>
                    <ArticleNavP>
                      <i className="iconfont icon-riqi"></i>
                      {articleDetail.publish_date}
                    </ArticleNavP>
                    <ArticleNavP>
                      <i className="iconfont icon-pinglun"></i>
                      {articleDetail.comment_count}条评论
                    </ArticleNavP>
                    <ArticleNavP>
                      <i className="iconfont icon-yueduliang"></i>
                      {articleDetail.read_count}次阅读
                    </ArticleNavP>
                    <ArticleNavP>
                      <i className="iconfont icon-dianzan"></i>
                      {articleDetail.praise_count}人点赞
                    </ArticleNavP>
                  </ArticleNav>
                </ArticleTitle>
                <ArticleDetail className='markdowm-contents'>
                  <DetailDes>{articleDetail.des}</DetailDes>
                  <DetailCon>
                    <ReactMarkdown plugins={[gfm]} renderers={{
                      code: ({language, value}: any) => {
                        return <SyntaxHighlighter
                          showLineNumbers={true}
                          lineNumberStyle={
                            {minWidth: 0}
                          }
                          style={dracula}
                          language={language}
                          children={value}
                        />
                      }
                    }} children={articleDetail.content} escapeHtml={false}/>
                  </DetailCon>
                </ArticleDetail>

                <ArticleReative>
                  {
                    prev.flag &&
                    <NumPlay className='prev'>
                      上一篇: <span onClick={() => toArticleDetails(prev.details_id!)}>{prev.title}</span>
                    </NumPlay>
                  }
                  {
                    next.flag &&
                    <NumPlay className='next'>
                      下一篇: <span onClick={() => toArticleDetails(next.details_id!)}>{next.title}</span>
                    </NumPlay>
                  }
                </ArticleReative>
                {
                  0 ?
                    <Articlecomments>
                      <CommentsTitle>
                        <h3>文章评论</h3>
                        <div className='lovely'>
                          <i className='iconfont icon-dianzan'></i>
                          <span>赞(123)</span>
                        </div>
                      </CommentsTitle>
                      <CommentsText>
                        <textarea className='comments-txt'></textarea>
                        <div className='coments-params'>
                          <div className='name'>
                            昵称: <input type='text'/>
                          </div>
                          <p className='coments-btn'>发表评论</p>
                        </div>
                      </CommentsText>
                      {
                        0 ?
                          <CommentsList>
                            <CommentsNum>
                              共23条评论
                            </CommentsNum>
                            <ul>
                              <CommentsItem>
                                <MediaLeft>
                                  <img src='' alt=''/>
                                </MediaLeft>
                                <MediaRight>
                                  <p className='author-name'>
                                    <span>史蒂夫</span>
                                    <span>2021-4-25</span>
                                  </p>
                                  <p className='author-txt'>所发生的是的</p>
                                </MediaRight>
                              </CommentsItem>
                            </ul>
                          </CommentsList>
                          :
                          <EmptyItem>
                            <p>这篇文章还没有收到评论，赶紧来抢沙发吧 ~~~</p>
                          </EmptyItem>
                      }
                    </Articlecomments> :
                    <EmptyItem>
                      <p>评论点赞暂未开放, 敬请期待 ~~~</p>
                    </EmptyItem>
                }
              </ArticleCon>
            </ArticleWrap>
          )
      }
    </>
  );
};

export default ArticleDetails;
