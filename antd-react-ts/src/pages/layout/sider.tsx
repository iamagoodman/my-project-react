import React from 'react';
import { useState } from 'react';
import { Layout,Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { IconFont } from "../../components";
import style from './index.module.less';
import { Iconprops } from "../../types";
import { history } from "../../utils/util";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SiderList = [
  {
    key: 'sub1',
    name: '发现音乐',
    iconName: 'iconMusicAcc',
    path: '/',
    num: 1
  },
  {
    key: 'sub2',
    name: '私人FM',
    iconName: 'iconguangbo',
    path: '/about',
    num: 2
  },
  {
    key: 'sub3',
    name: '视频',
    iconName: 'iconvideo2',
    path: '/',
    num: 3
  },
  {
    key: 'sub4',
    name: '朋友',
    iconName: 'iconfriend',
    path: '/',
    num: 4
  },
  {
    key: 'sub5',
    name: '下载管理',
    iconName: 'icondownload1',
    path: '/',
    num: 5
  },
  {
    key: 'sub6',
    name: '我喜欢的音乐',
    iconName: 'iconlike1',
    path: '/',
    num: 6
  }
];

function IconContainer(props:Iconprops) {
  return (
    <span className={style.icon_container}>
      <IconFont {...props} />
    </span>
  )
}
function LinkB (){
  return (
    <Link to='/'>fdasfdsa</Link>
  )
}
export default function () {
  const [defaultVal,setDefaultVal] = useState('sub1');
  function setVal(val:any) {
    setDefaultVal(val.key);
    history.push(val.path);
    history.go(val.num);
    // window.location.href = val.path;
  }
  return (
    <Sider width={200} className={style.my_layout_sider}>
      <Menu
        className={style.my_layout_sider_menu}
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        {
          SiderList.map((sider) => (
            <SubMenu
              className={defaultVal === sider.key ? style.my_sider_menu_item_active : style.my_sider_menu_item}
              onTitleClick={() => {setVal(sider)}}
              key={sider.key}
              icon={<IconContainer name={sider.iconName} />}
              title={sider.name}
            />
          ))
        }
      </Menu>
    </Sider>
  );
}