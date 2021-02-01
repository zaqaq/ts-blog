import React, {memo, useCallback, useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {
  SidebarWrap, BlogIntro, BTitle, BDesc, Weight, WMoudle, WTitle, UpdateList, WListText, RankList, HotTags
} from './style'
import axios from "@/api/axios";

interface IBarList {
  updateList: [],
  rankList: [],
  hotsTagList: []
}

const SideBar = () => {
  const history = useHistory()
  const [barList, setBarList] = useState<IBarList>({
    updateList: [],
    rankList: [],
    hotsTagList: []
  })

  useEffect(() =>  {
    (async () => {
      const res: IBarList = await axios.post('/side-bar');
      setBarList(res);
    })()
  }, [])

  const toArticleDetails = useCallback(async(details_id: number) => {
    const resCode: {code: boolean} = await axios.post('/update-read',{details_id});
    if(resCode.code){
      history.push(`/article-detail${details_id}`)
    }
  } ,[history])

  const { updateList, rankList, hotsTagList } = barList
  return (
    <SidebarWrap>
      <BlogIntro>
        <BTitle>博主简介</BTitle>
        <BDesc>
          <p className='desc'>一个随"天气"变化而定的前端咸鱼，时倾盆大雨，时晴空万里，飞向远方 ~</p>
          <div className='telcn'>
            <span>公告:</span>
            <p className='desc'>本博客仅为单页面，暂不支持SEO，后期有时间会陆续实现包括登录系统、管理中台等！</p>
          </div>
          <div className='telcn'>
            <span>博客技术实现:</span>
            <ul>
              <li>
                <p>前端：React.js + Typescript +</p>
                <p>styled-components</p>
              </li>
              <li>后台：Node.js(Koa) + Sequelize</li>
              <li>数据库：Mysql</li>
            </ul>
          </div>
        </BDesc>
      </BlogIntro>
      {
        updateList.length > 0 && (
          <Weight>
            {
              updateList.length > 0 && (
                <WMoudle>
                  <WTitle>
                    <i className="iconfont iconzuijingengxin_huaban"></i>
                    最近更新
                  </WTitle>
                  <ul>
                    {
                      updateList.map((item: any, index: number) => (
                        <UpdateList key={index}>
                          <span onClick={() => toArticleDetails(item.details_id)}>
                            <img src="" alt=""/>
                          </span>
                          <WListText className="update-text">
                            <span onClick={() => toArticleDetails(item.details_id)}>
                              {item.title}
                            </span>
                            <div className='other'>
                              <p>{item.publish_date}</p>
                              <p>
                                <i className='iconfont icon-yueduliang'></i>
                                {item.read_count}
                              </p>
                            </div>
                          </WListText>
                        </UpdateList>
                      ))
                    }
                  </ul>
                </WMoudle>
              )
            }
            {
              rankList.length > 0 && (
                <WMoudle>
                  <WTitle>
                    <i className="iconfont iconpaihang"></i>
                    点击排行
                  </WTitle>
                  <ul>
                    {
                      rankList.map((item: any, index: number) => (
                        <RankList key={index}>
                          <span>{index + 1}</span>
                          <p  onClick={() => toArticleDetails(item.details_id)}>{item.title}</p>
                        </RankList>
                      ))
                    }
                  </ul>
                </WMoudle>
              )
            }
            {
              hotsTagList.length > 0 && (
                <WMoudle>
                  <WTitle>
                    <i className="iconfont iconlabeltag"></i>
                    热门标签
                  </WTitle>
                  <HotTags>
                    {
                      hotsTagList.map((item: any, index: number) => (
                        <Link key={index} to={`/category/${item.nav_id}`}>{item.tag}</Link>
                      ))
                    }
                  </HotTags>
                </WMoudle>
              )
            }
            {/*<div className="widght-list wonder-com">*/}
            {/*    <h3>*/}
            {/*        <i className="iconfont iconzhifeiji"></i>*/}
            {/*        精彩评论*/}
            {/*    </h3>*/}
            {/*    <ul className="clearboth">*/}
            {/*        <li className="clearboth">*/}
            {/*            <img src={require('../../../assets/images/logo.png')} alt="" />*/}
            {/*            <span>AI人工智能</span>*/}
            {/*            <span>(1天前)</span>*/}
            {/*            <p>等我把弟弟黑的蝴蝶反编译获取线上任何微信小程序</p>*/}
            {/*            <a href="#">评：反编译获取线上任何微信小程序</a>*/}
            {/*        </li>*/}
            {/*        <li className="clearboth">*/}
            {/*            <img src={require('../../../assets/images/logo.png')} alt="" />*/}
            {/*            <span>AI人工智能</span>*/}
            {/*            <span>(1天前)</span>*/}
            {/*            <p>等我把弟弟黑的蝴蝶反编译获取线上任何微信小程序</p>*/}
            {/*            <a href="#">评：反编译获取线上任何微信小程序</a>*/}
            {/*        </li>*/}
            {/*        <li className="clearboth">*/}
            {/*            <img src={require('../../../assets/images/logo.png')} alt="" />*/}
            {/*            <span>AI人工智能</span>*/}
            {/*            <span>(1天前)</span>*/}
            {/*            <p>等我把弟弟黑的蝴蝶反编译获取线上任何微信小程序</p>*/}
            {/*            <a href="#">评：反编译获取线上任何微信小程序</a>*/}
            {/*        </li>*/}
            {/*        <li className="clearboth">*/}
            {/*            <img src={require('../../../assets/images/logo.png')} alt="" />*/}
            {/*            <span>AI人工智能</span>*/}
            {/*            <span>(1天前)</span>*/}
            {/*            <p>等我把弟弟黑的蝴蝶反编译获取线上任何微信小程序</p>*/}
            {/*            <a href="#">评：反编译获取线上任何微信小程序</a>*/}
            {/*        </li>*/}
            {/*        <li className="clearboth">*/}
            {/*            <img src={require('../../../assets/images/logo.png')} alt="" />*/}
            {/*            <span>AI人工智能</span>*/}
            {/*            <span>(1天前)</span>*/}
            {/*            <p>等我把弟弟黑的蝴蝶反编译获取线上任何微信小程序</p>*/}
            {/*            <a href="#">评：反编译获取线上任何微信小程序</a>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            {/*<div className="widght-list web-count">*/}
            {/*    <h3>*/}
            {/*        <i className="iconfont iconzhifeiji"></i>*/}
            {/*        站点统计*/}
            {/*    </h3>*/}
            {/*    <ul className="clearboth">*/}
            {/*        <li>文章总数: 168篇</li>*/}
            {/*        <li>文章总数: 168篇</li>*/}
            {/*        <li>文章总数: 168篇</li>*/}
            {/*        <li>文章总数: 168篇</li>*/}
            {/*        <li>文章总数: 168篇</li>*/}
            {/*        <li>文章总数: 168篇</li>*/}
            {/*        <li>文章总数: 168篇</li>*/}
            {/*        <li>文章总数: 168篇</li>*/}
            {/*        <li>文章总数: 168篇</li>*/}
            {/*        <li>文章总数: 168篇</li>*/}
            {/*        <li>文章总数: 168篇</li>*/}
            {/*        <li>文章总数: 168篇</li>*/}
            {/*        <li>最近更新： 2019年3月12日</li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
          </Weight>
        )
      }
    </SidebarWrap>
  );
};

export default memo(SideBar);
