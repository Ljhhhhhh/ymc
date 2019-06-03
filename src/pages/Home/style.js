// import styled from 'styled-components';
import styled from "styled-px2rem";
import { Link } from "react-router-dom";
import discountBg1 from "../../static/images/discount_big_bg.png";

export const Container = styled.div`
  max-height: calc(100vh - 50px);
  width: 100%;
  .am-carousel-wrap {
    margin-top: -50px;
  }
`;

export const NotiveWrap = styled.div`
  width: 345px;
  height: 50px;
  border-radius: 25px;
  line-height: 50px;
  background: #fff;
  position: relative;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-shadow: 0 1px 2px #c0c6f1;
  .am-notice-bar {
    line-height: 50px;
    height: 100%;
    background: transparent;
    color: #7486fc;
  }
`;

export const MenuWrap = styled.div`
  margin-top: 35px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  a {
    text-align: center;
    color: #333;
    div {
      margin-top: 5px;
    }
  }
`;

export const CardWrap = styled.div`
  width: 100%;
  height: auto;
  padding: 0 15px;
  box-sizing: border-box;
  .card_big {
    width: 100%;
    height: 105px;
    box-sizing: border-box;
    background-size: cover;
    background-image: url(${discountBg1});
    color: #fff;
    padding: 15px 20px;
    line-height: 23px;
    display: block;
    .title {
      font-size: 17px;
      font-weight: 500;
    }
    .sub_title {
      font-size: 12px;
      line-height: 20px;
      letter-spacing: 3px;
    }
    .btn {
      width: 90px;
      text-align: center;
      line-height: 23px;
      box-sizing: border-box;
      border: 1px solid #fff;
      border-radius: 13px;
      margin-top: 5px;
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

export const CardList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* .item{
    width: 48%;
    height: auto;
    display: flex;
    align-items: center;
    background-size: 100% 100%;
    padding: 14px 15px 8px;
    position: relative;
    .desc{
      text-align: center;
      margin-left: 5px;
      p{
        margin-block-start: 0;
        margin-block-end: 0;
      }
      .price{
        font-size: 15px;
        font-weight: 500;
        line-height: 23px;
      }
      .sub{
        font-size: 11px;
        line-height: 18px;
      }
      .badge{
        font-size: 6px;
        line-height: 12px;
        color: #FFF;
        background: #666;
        display: inline-block;
        border-radius: 10px;
        padding: 0 7px;
      }
    }
    .corner{
      position: absolute;
      top: 0;
      right: 0;
      color: #FFF;
      font-size: 6px;
      transform: rotate(45deg) translate(9px);
    }
  } */
`;

export const DisItem = styled(Link)`
  width: 48%;
  height: auto;
  display: flex;
  align-items: center;
  background-size: 100% 100%;
  padding: 14px 15px 8px;
  position: relative;
  .desc {
    text-align: center;
    margin-left: 5px;
    p {
      margin-block-start: 0;
      margin-block-end: 0;
    }
    .price {
      font-size: 15px;
      font-weight: 500;
      line-height: 23px;
      color: ${props => props.theme.theme};
    }
    .sub {
      font-size: 11px;
      line-height: 18px;
      color: ${props => props.theme.assist};
    }
    .badge {
      font-size: 6px;
      line-height: 12px;
      color: #fff;
      background: ${props => props.theme.theme};;
      display: inline-block;
      border-radius: 10px;
      padding: 0 7px;
    }
  }
  .corner {
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    font-size: 6px;
    transform: rotate(45deg) translate(9px);
  }
`;
