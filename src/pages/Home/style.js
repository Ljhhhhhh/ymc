import styled from 'styled-components';
import discountBg1 from "../../static/images/discount_big_bg.png";

export const Container = styled.div `
  max-height: calc(100vh - 50px);
  width: 100%;
  .am-carousel-wrap{
    margin-top: -50px;
  }
`

export const NotiveWrap = styled.div `
  width: 345px;
  height: 50px;
  border-radius: 25px;
  line-height: 50px;
  background: #FFF;
  position: relative;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-shadow: 0 1px 2px #c0c6f1;
  .am-notice-bar{
    line-height: 50px;
    height: 100%;
    background: transparent;
    color: #7486FC;
  }
`

export const MenuWrap = styled.div `
  margin-top: 35px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  a{
    text-align: center;
    color: #333;
    div{
      margin-top: 5px;
    }
  }
`

export const CardWrap = styled.div `
  width: 100%;
  height: auto;
  padding: 0 15px;
  box-sizing: border-box;
  .card_big{
    width: 100%;
    height: 105px;
    box-sizing: border-box;
    background-size: cover;
    background-image: url(${discountBg1});
    color: #FFF;
    padding: 15px 20px;
    line-height: 23px;
    .title{
      font-size: 17px;
      font-weight: 500;
    }
    .sub_title{
      font-size: 12px;
      line-height: 20px;
      letter-spacing: 3px;
    }
    .btn{
      width: 90px;
      text-align: center;
      line-height: 23px;
      box-sizing: border-box;
      border: 1px solid #FFF;
      border-radius: 13px;
      margin-top: 5px;
      background: rgba(255, 255, 255, .2);
    }
  }
`