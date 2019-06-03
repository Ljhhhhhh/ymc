import React, { useState } from "react";
import { Carousel, NoticeBar } from "antd-mobile";
import { Link } from "react-router-dom";
import { Container, NotiveWrap, MenuWrap, CardWrap, CardList, DisItem } from "./style";
import Bar from "../../components/TabBar";
import PngIcon from "../../components/PngIcon";
import banner from "../../static/images/home_banner.png";

const Home = props => {
  const [hig, setHig] = useState("auto");
  return (
    <Container>
      <Carousel autoplay={true} infinite>
        <a href="http://www.alipay.com" style={{ display: "inline-block" }}>
          <img
            src={banner}
            alt=""
            style={{ width: "100%", verticalAlign: "top", height: hig }}
            onLoad={() => {
              window.dispatchEvent(new Event("resize"));
              setHig("auto");
            }}
          />
        </a>
        <a href="http://www.alipay.com" style={{ display: "inline-block" }}>
          <img
            src={banner}
            alt=""
            style={{ width: "100%", verticalAlign: "top", height: hig }}
            onLoad={() => {
              window.dispatchEvent(new Event("resize"));
              setHig("auto");
            }}
          />
        </a>
        <a href="http://www.alipay.com" style={{ display: "inline-block" }}>
          <img
            src={banner}
            alt=""
            style={{ width: "100%", verticalAlign: "top", height: hig }}
            onLoad={() => {
              window.dispatchEvent(new Event("resize"));
              setHig("auto");
            }}
          />
        </a>
      </Carousel>
      <NotiveWrap>
        <NoticeBar
          icon={<PngIcon width="16px" height="16px" icon="oil_station" />}>
          中石油系统维护,油卡充值缺货通知 [2019.03.06]
        </NoticeBar>
      </NotiveWrap>
      <Menu/>
      <CardWrap>
        <Link className="card_big" to="/">
          <div className="title">油卡充值套餐</div>
          <div className="sub_title">按月充值,优惠折扣</div>
          <div className="btn">立即充值</div>
        </Link>
        <Card/>
      </CardWrap>
      
      <Bar />
    </Container>
  );
};

const Menu = () => {
  const menuList = [
    {
      name: "油卡充值",
      icon: "home_menu_1",
      path: "/1"
    },
    {
      name: "话费充值",
      icon: "home_menu_2",
      path: "/2"
    },
    {
      name: "领取油卡",
      icon: "home_menu_3",
      path: "/3"
    },
    {
      name: "小莫商城",
      icon: "home_menu_4",
      path: "/4"
    }
  ];
  return (
    <MenuWrap>
      {menuList.map(menu => (
        <Link to={menu.path} key={menu.path}>
          <PngIcon icon={menu.icon} width="45px" height="45px" />
          <div>{menu.name}</div>
        </Link>
      ))}
    </MenuWrap>
  );
};

const Card = () => {
  const list = [
    {
      price: '500',
      unit: '月',
      discountPrice: '7200',
      discount: '8.0',
      time: '18',
      theme: 'orange',
      bg: require('../../static/images/discount_bg_orange.png'),
      path: '/1',
      colors: {
        theme: '#D87530',
        assist: '#E6A277'
      }
    }
  ]
  return (
    <CardList>
      {
        // TODO:: 主题 试着通过计算值 字体大小？
        list.map(item => (
          <DisItem 
          key={item.path} 
          className="item" 
          to={item.path} 
          theme={item.colors}
          style={{backgroundImage: `url(${item.bg})`}}>
            <PngIcon icon={`discount/discount_icon_${item.theme}`} width="56px" height="51px" />
            <div className="desc">
              <p className="price">￥{item.price}元/{item.unit}</p>
              <p className="sub">折扣价:{item.discountPrice}</p>
              <p className="badge">{item.discount}折</p>
            </div>
            <div className="corner">{item.time}个{item.unit}</div>
          </DisItem>
        ))
      }
    </CardList>
  )
}

export default Home;
