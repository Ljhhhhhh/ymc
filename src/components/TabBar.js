import React from "react";
import {connect} from 'dva'
import { TabBar } from "antd-mobile";
import homeIcon from '../assets/icons/global/home.png'
import giftIcon from '../assets/icons/global/gift.png'
import discoverIcon from '../assets/icons/global/discover.png'
import meIcon from '../assets/icons/global/me.png'
const TabBarItem = TabBar.Item;

const tabs = [
  {
    title: "首页",
    link: 'home',
    key: 'home',
    icon: homeIcon
  },
  {
    title: "福利",
    link: 'gift',
    key: 'gift',
    icon: giftIcon,
  },
  {
    title: "发现",
    link: 'discover',
    key: 'discover',
    icon: discoverIcon,
  },
  {
    title: "我的",
    link: 'me',
    key: 'me',
    icon: meIcon,
  },
]

const TabBottom = props => {
  console.log(props.currentTab);
  return (
    <TabBar
      unselectedTintColor="#999999"
      tintColor="#7486FC"
      barTintColor="white"
    >
    {
      tabs.map(tab => {
        return (
          <TabBarItem
        title={tab.title}
        key={tab.key}
        icon={<img src={tab.icon} width="20px" height="20px" alt="" />}
        selectedIcon={<img src={tab.icon} width="20px" height="20px" alt="" />}
        selected={props.currentTab === tab.key}
        onPress={() => {
          props.changeTab(tab.key)
        }}
      />
        )
      })
    }
    </TabBar>
  );
};

function mapStateToProps(state) {
  return {
    currentTab: state.global.currentTab,
  };
}

const mapDispatch = dispatch => {
  return {
    changeTab(tab) {
      dispatch({type: 'global/changeTab', tab});
    }
  };
};



export default connect(mapStateToProps, mapDispatch)(TabBottom);
