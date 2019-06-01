import React, {useCallback} from "react";
import { TabBar } from "antd-mobile";
import {withRouter} from 'react-router-dom'
import PngIcon from "../PngIcon";
import { TabWrap } from "./style";

const Bar = props => {
  const TabItem = TabBar.Item;
  const path = props.match.path

  const goPath = useCallback(path => {
    props.history.push(path)
  }, [props.history])

  const tabList = [
    {
      path: "/home",
      icon: "home",
      iconSelect: "home_selected",
      name: "首页"
    },
    {
      path: "/gift",
      icon: "gift",
      iconSelect: "gift_selected",
      name: "福利"
    },
    {
      path: "/discount",
      icon: "discount",
      iconSelect: "discount_selected",
      name: "发现"
    },
    {
      path: "/me",
      icon: "me",
      iconSelect: "me_selected",
      name: "我的"
    }
  ];
  return (
    <TabWrap>
      <TabBar
        unselectedTintColor="#BCBCBC"
        tintColor="#7486FC"
        barTintColor="white">
        {tabList.map(tab => (
          <TabItem
            title={tab.name}
            key={tab.path}
            icon={<PngIcon icon={tab.icon} width="20px" height="20px" />}
            selectedIcon={
              <PngIcon icon={tab.iconSelect} width="20px" height="20px" />
            }
            selected={path === tab.path}
            onPress={() => goPath(tab.path)}
          />
        ))}
      </TabBar>
    </TabWrap>
  );
};

export default withRouter(Bar);