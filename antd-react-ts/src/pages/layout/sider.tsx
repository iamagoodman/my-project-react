import React from 'react';
import { useState } from 'react';
import { Layout,Menu } from 'antd';
import { IconFont } from "../../components";
import style from './index.module.less';
import { Iconprops } from "../../types";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SiderList = [
  {
    key: 'sub1',
    name: '发现音乐',
    iconName: 'iconMusicAcc',
    path: '/'
  },
  {
    key: 'sub2',
    name: '私人FM',
    iconName: 'iconguangbo',
    path: '/about'
  },
  {
    key: 'sub3',
    name: '视频',
    iconName: 'iconvideo2',
    path: '/'
  },
  {
    key: 'sub4',
    name: '朋友',
    iconName: 'iconfriend',
    path: '/'
  },
  {
    key: 'sub5',
    name: '下载管理',
    iconName: 'icondownload1',
    path: '/'
  },
  {
    key: 'sub6',
    name: '我喜欢的音乐',
    iconName: 'iconlike1',
    path: '/'
  }
];

function IconContainer(props:Iconprops) {
  return (
    <span className={style.icon_container}>
      <IconFont {...props} />
    </span>
  )
}
export default function () {
  const [defaultVal,setDefaultVal] = useState('sub1');

  return (
    <Sider width={200} className={style.my_layout_sider}>
      <Menu
        className={style.my_layout_sider_menu}
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        {/*<SubMenu className={style.my_layout_sider_menu_item_active} key="sub1" icon={<IconContainer name='iconMusicAcc' />} title="发现音乐">*/}
        {/*</SubMenu>*/}
        {/*<SubMenu key="sub2" icon={<IconContainer name='iconguangbo' />} title="私人FM">*/}
        {/*</SubMenu>*/}
        {/*<SubMenu key="sub3" icon={<IconContainer name='iconvideo2' />} title="视频">*/}
        {/*</SubMenu>*/}
        {/*<SubMenu key="sub4" icon={<IconContainer name='iconfriend' />} title="朋友">*/}
        {/*</SubMenu>*/}
        {/*<SubMenu key="sub5" icon={<IconContainer name='icondownload1' />} title="下载管理">*/}
        {/*</SubMenu>*/}
        {/*<SubMenu key="sub6" icon={<IconContainer name='iconlike1' />} title="我喜欢的音乐">*/}
        {/*</SubMenu>*/}
        {
          SiderList.map((sider) => (
            <SubMenu
              className={defaultVal === sider.key ? style.my_menu_item_active : ''}
              onTitleClick={() => {setDefaultVal(sider.key)}}
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