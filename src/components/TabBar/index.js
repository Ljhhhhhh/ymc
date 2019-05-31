import React from 'react'
import HomePng from '../../static/images/tabbar/home.png'
import HomeSelectedPng from '../../static/images/tabbar/home_selected'
import MePng from '../../static/images/tabbar/me.png'
import MeSelectedPng from '../../static/images/tabbar/me_selected.png'
import GiftPng from '../../static/images/tabbar/gift.png'
import GiftSelectedPng from '../../static/images/tabbar/gift_selected.png'
import DiscoverPng from '../../static/images/tabbar/discover.png'
import DiscoverSelectedPng from '../../static/images/tabbar/discover_selected.png'
const TabBar = props => {
  return (
    <TabBar
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
      barTintColor="white"
    >
      <TabBar.Item
        title="Life"
        key="Life"
        icon={<div style={{
          width: '22px',
          height: '22px',
          background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
        />
        }
        selectedIcon={<div style={{
          width: '22px',
          height: '22px',
          background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
        />
        }
        selected={this.state.selectedTab === 'blueTab'}
        onPress={() => {
          this.setState({
            selectedTab: 'blueTab',
          });
        }}
        data-seed="logId"
      >
        {this.renderContent('Life')}
      </TabBar.Item>
    </TabBar>
  )
}