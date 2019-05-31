import React from "react";
import { Carousel, WingBlank } from "antd-mobile";
// import TabBar from '../../components/TabBar'
import banner from '../../static/images/home_banner.png'

const Home = props => {
  return (
    <div>
      <Carousel autoplay={true} infinite>
        <a
          href="http://www.alipay.com"
          style={{ display: "inline-block" }}>
          <img
            src={banner}
            alt=""
            style={{ width: "100%", verticalAlign: "top"}}
          />
        </a>
      </Carousel>
      




      









    </div>
  );
};

export default Home;
