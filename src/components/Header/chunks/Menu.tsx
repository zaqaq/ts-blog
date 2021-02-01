import React, { useEffect, useState } from 'react';
import {MenuList, MenuItem, SubMenu, SubMenuItem} from '../style'
import {useHistory} from 'react-router-dom'
import axios from "@/api/axios";

interface INav {
  nav_id: number,
  title: string,
}

interface FNav extends INav {
  sub_title: INav[]
}

const fNavIcon: {
  [props: string]: string
} = {
  0: 'iconqianduan',
  1: 'icongongcheng',
  2: 'icon8_4houduankaifa',
  3: 'iconicon-06',
  4: 'iconganwu',
  5: 'iconsend1179291easyiconnet'
}

const sNavIcon: {
  [props: string]: any
} = {
  101: {
    0: 'iconhtmlcss',
    1: 'iconjava-script',
    2: 'iconhtml5',
    3: 'iconreact',
    4: 'iconreact-native-2',
    5: 'iconvue'
  },
  102: {
    0: 'icongit1'
  },
  103: {
    0: 'iconnode'
  }
}

const Menu = () => {
  const history = useHistory()
  const [navList, setNavList] = useState<FNav[]>([])

  useEffect(() =>  {
    (async () => {
      const res: FNav[] = await axios.post('/header-nav')
      setNavList(res);
    })()
  }, [])

  const toHome = () => {
      window.location.href = '/'
  }

  const toLink = (navId: number) => {
    if(navId > 103) {
      history.push(`/category/${navId}`)
    }
  }
  const aLi =
    <>
      <MenuItem onClick={toHome}>
        <span>
          <i className={`iconfont iconshouye ficon`}></i>
          首页
        </span>
      </MenuItem>
      {
        navList.map((item: FNav, fIndex: number) => (
          <MenuItem key={fIndex}>
            <span onClick={() => toLink(item.nav_id)}>
              <i className={`iconfont ${fNavIcon[fIndex]} ficon`}></i>
              {item.title}
              {item.sub_title.length > 0 && <i className='iconfont icon-jiantouxia'></i>}
            </span>
            {
              item.sub_title.length > 0 && (
                <SubMenu>
                  {
                    item.sub_title.map((item_sub: INav, sIndex: number) => {
                      return (
                        <SubMenuItem key={sIndex}>
                          <span onClick={() => toLink(item_sub.nav_id)}>
                            <i className={`iconfont ${sNavIcon[item.nav_id] && sNavIcon[item.nav_id][sIndex]}`}></i>
                            {item_sub.title}
                          </span>
                        </SubMenuItem>
                      )
                    })
                  }
                </SubMenu>
              )
            }
          </MenuItem>
        ))
      }
    </>

  return (
    <MenuList>{aLi}</MenuList>
  );
};

export default Menu;
