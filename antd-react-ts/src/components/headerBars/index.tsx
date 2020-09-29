import React from 'react';
import style from "./index.module.less";
import { createSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/stores/reducers";
import { Headerbarprops } from "../../types";
import { doChangeHomeTab } from "../../stores/actions";
import { homeTabs } from "../../constans/coreConstans";

function HomeBar() {
  const mapState = createSelector(
    (state:RootState) => state.home,
    ({tab_key}) => ({tab_key})
  );
  const { tab_key } = useSelector(mapState);
  const dispatch = useDispatch();
  return (
    <div className={style.my_menu_container}>
      {
        homeTabs.map((tab)=>(
          <div key={tab.key} className={tab_key === tab.key ? style.my_menu_item_active : style.my_menu_item} onClick={() => {dispatch(doChangeHomeTab(tab.key))}}>{tab.text}</div>
        ))
      }
    </div>
  )
}
export const HeaderBars = function (props: Headerbarprops) {
  const mapState = createSelector(
    (state:RootState) => state.app,
    ({headerbar}) => ({headerbar})
  );
  const { headerbar } = useSelector(mapState);
  const dispatch = useDispatch();
  return (
    headerbar === 'home' ? <HomeBar /> : <div></div>
  )
}