import styled from "styled-px2rem";
import { Link } from "react-router-dom";
import discountBg1 from "../../static/images/discount_big_bg.png";

export const Container = styled.div`
  max-height: 100%;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 50px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  .am-carousel-wrap {
    margin-top: -50px;
  }
`;

export const NotiveWrap = styled.div`
  width: 345px;
  height: 40px;
  border-radius: 25px;
  line-height: 40px;
  background: #fff;
  left: 50%;
  position: relative;
  transform: translate(-50%, -50%);
  box-shadow: 0 1px 2px #c0c6f1;
  .am-notice-bar {
    line-height: 40px;
    height: 100%;
    background: transparent;
    color: #7486fc;
  }
  .am-notice-bar-marquee{
    font-size: 12px;
  }
`;

export const MenuWrap = styled.div`
  margin-top: -15px;
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
`;

export const DisItem = styled(Link)`
  width: 48%;
  height: auto;
  display: flex;
  align-items: center;
  background-size: 100% 100%;
  padding: 13px 10px 6px;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 10px;
  .desc {
    text-align: center;
    .price {
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
      color: ${props => props.theme.theme};
    }
    .sub {
      font-size: 12px;
      line-height: 14px;
      color: ${props => props.theme.assist};
    }
    .badge {
      font-size: 12px;
      line-height: 14px;
      height: 14px;
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
    font-size: 12px;
    transform: rotate(45deg) translate(8px, 5px);
  }
`;

export const ItemTitle = styled.div `
  width: auto;
  height: auto;
  margin: 25px 15px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: relative;
  color: #333;
  line-height: 17px;
  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 17px;
    background: ${props => props.color};
  }
  .bold{
    font-size: 17px;
    font-weight: 500;
    padding-left: 11px;
  }
  a{
    color: #333;
    font-size:15px;
    position: relative;
    padding-right: 15px;
    &:after{
      content: '';
      position: absolute;
      right: 0px;
      top: 0;
      width: 0;
      height: 0;
      border: 7px solid #333;
      border-top: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 4px solid transparent;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`

export const Featured = styled.div `
  width: auto;
  height: auto;
  margin: 0 15px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  a{
    display: block;
    font-size: 0;
    width: 167px;
    &:first-child{
      min-width: 100%;
      margin-bottom: 10px;
    }
    img{
      width: 100%;
    }
  }
`
export const ProductList = styled.div `
  width: auto;
  height: auto;
  margin: 0 15px;
`
export const Product = styled(Link) `
  display: block;
  width: auto;
  height: auto;
  margin-bottom: 15px;
  img{
    width: 100%;
    height: auto;
  }
  .p_title{
    width: 100%;
    line-height: 35px;
    color: #333;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .sub{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .price{
      color: #FF0009;
      font-size: 15px;
    }
    .sold{
      color: #999;
      font-size: 12px;
      font-weight: 200;
    }
  }
`