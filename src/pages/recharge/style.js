import styled from 'styled-px2rem'
import {List} from 'antd-mobile'
import telphoneBannerBg from '../../static/images/recharge/charge_bg.png'
import telCouponBg from '../../static/images/recharge/tel-coupon_bg.png'

export const Container = styled.div `
  width: 100%;
  height: 100%;
  background: #F5F5F5;
  position: relative;
  box-sizing: border-box;
  overflow: auto;
`

export const AddCard = styled.div `
  width: 100%;
  height: 125px;
  border-color: #B3B2B3;
  padding: 0 30px;
  box-sizing: border-box;
  .title{
    line-height: 12px;
    font-size: 12px;
    color: #999999;
    font-weight: 300;
    position: relative;
    left: -10px;
    margin: 12px 0 10px;
  }
  .add-btn{
    width: 315px;
    height: 92px;
    margin: 0 auto;
    background: linear-gradient(to bottom, #7486FC, #4048F8);
    box-shadow:0px 7px 14px 4px rgba(64,72,248,0.5);
    border-radius: 8px 8px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    >div{
      font-size: 15px;
      color: #FFF;
      font-weight: 300;
      display: inline-block;
      line-height: 30px;
      box-sizing: border-box;
      text-align: center;
      border: 1px dashed #FFF;
      padding: 0 15px;
      border-radius: 15px/50%;
      display: flex;
      align-items: center;
      span{
        margin-right: 5px;
      }
    }
  }
`

export const SelectTicket = styled.div `
  height: auto;
  padding: 20px;
  box-shadow: ${props => props.shadow};
  position: relative;
  margin-top: -10px;
  background: #FFF;
  .title{
    color: #999;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    margin-bottom: 20px;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;    
  }
`

export const TicketItem = styled.div `
  width: 100px;
  height: 60px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #C2C2C2;
  border-radius: 2px;
  margin-bottom: 10px;
  .face{
    font-size: 16px;
    color: #333;
    line-height: 30px;
  }
  .pay{
    font-size: 12px;
    color: #333;
    font-weight:400;
  }
  &.selected{
    background: #7486FC;
    border: none;
    .face, .pay{
      color: #FFF;
    }
  }
`

export const CouponWrap = styled(List) `
  min-height: 40px;
  margin: 10px 0;
  .am-list-body::before, .am-list-body::after{
    display: none!important;
  }
  .am-list-item{
    min-height:40px;
  }
`

export const CarouselWrap = styled.div `
  width: 100%;
  overflow-x: hidden;
  padding: 20px 0;
  box-sizing: border-box;
  .slider-list{
    margin: 0!important;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  .slider-slide > img{
    height: 150px;
    margin: 0 auto;
    position: relative;
    width: auto;
    max-width: 300px;
    vertical-align: top;
  }
`

export const UseLess = styled.span `
  color: #999999;
  font-size: 17px;
  font-weight: 500;
`

export const CouponList = styled.div `
  width: 100%;
  height: auto;
  padding: 10px;
  box-sizing: border-box;
  max-height: calc(100% - 45px);
  overflow: auto;
`

export const CouponItem = styled.div `
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFF;
  border-radius: 2px;
  margin-bottom: 10px;
  .head{
    width: 95px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
      font-size: 24px;
      color: #333;
      text-align: center;
      font-weight: 600;
      line-height: 35px;
    }
    p{
      font-size: 12px;
      color: #666;
      text-align: center;
      font-weight: 400;
    }
  }
  .desc {
    line-height: 21px;
    .name {
      font-size: 15px;
      font-weight: 400;
      color: #333;
    }
    .time{
      font-size: 12px;
      font-weight: 400;
      color: #EB3F45;
    }
    .exp{
      font-size:12px;
      font-weight:400;
      color: #999999;
    }
  }
  .btn{
    width: 64px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #FFF;
    font-size: 14px;
    background: #EB3F45;
    margin-right:13px;
  }
`

export const CouponTelItem = styled.div `
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFF;
  border-radius: 2px;
  margin-bottom: 16px;
  .head{
    width: 105px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: url(${telCouponBg}) no-repeat;
    background-size: contain;
    background-position: center;
    color: #FFF;
    font-size: 18px;
  }
  .desc {
    line-height: 21px;
    position: relative;
    transform: translateX(-25px);
    .name {
      font-size: 12px;
      font-weight: 400;
      color: #333;
    }
    .more{
      font-size: 12px;
      font-weight: 400;
      color: #BBB;
    }
  }
  .btn{
    width: 70px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #FFF;
    font-size: 14px;
    background: linear-gradient(to right, #7486FC, #4048F8);
    margin-right:10px;
  }
`

export const HeadBanner = styled.div `
  width: 100%;
  height: 135px;
  background: url(${telphoneBannerBg}) no-repeat;
  background-size: cover;
  .content{
    width: 355px;
    height: 115px;
    box-sizing: border-box;
    padding: 0 10px;
    border-radius:4px;
    background: #FFF;
    margin: 0 auto;
    transform: translate(0,40px);
    box-shadow:0px 2px 4px 0px rgba(242,240,246,0.71);
    .am-tabs-default-bar{
      height: auto;
      .am-tabs-default-bar-content{
        display: flex;
        width: 100%;
      }
    }
    .am-list-line:after{
      display: none!important;
    }
    .am-list-item .am-input-label.am-input-label-5 {
      width: 25px;
      text-align: center;
    }
    .am-list-item .am-input-control input{
      font-size: 15px;
      color: #484848;
      font-weight: 400;
    }
    .am-tabs-default-bar-tab:after{
      top: 0!important;
      bottom: auto!important;
    }
    .am-tabs-default-bar-underline{
      top: 0!important;
      bottom: auto!important;
    }
  }
`

export const TabWrapper = styled.div `
  width: 100%;
  height:auto;
  margin-top: 30px;
  .am-tabs-tab-bar-wrap{
    display: none;
  }
`

export const ComboWrap = styled.div `
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 20px 0 10px;
  background: #FFF;
  overflow-x: hidden;
  .header{
    font-size:15px;
    line-height: 15px;
    color: #333;
    font-weight:400;
    margin-bottom: 15px;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .pre-recharge{
    padding: 0 20px;
    box-sizing: border-box;
    line-height: 17px;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size:15px;
    font-weight:500;
    .set-val{
      width: 180px;
      height: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .control{
        display: block;
        width: 23px;
        height: 23px;
        background: ${props => props.theme.primaryColor};
        text-align: center;
        line-height: 23px;
        color:#FFF;
        font-size: 18px;
        border-radius: 50%;
      }
      .val{
        font-size: 24px;
      }
    }
  }
  .am-slider-wrapper{
    padding: 30px 20px 45px;
    margin: 15px 20px 0;
  }
  .am-slider-handle{
    box-shadow: 0 0 0 2px #FFF, 0 0 0 3px #ddd;
    background: #7486fc;
    margin-left: -8px;
    margin-top: -8px;
    width: 17px;
    height: 17px;
  }
  .am-slider-dot{
    background: #ddd;
    top: -5px;
  }
  .am-slider-dot-active {
    background: #fff;
  }
  .am-slider-mark-text{
    color: #999;
    &.am-slider-mark-text-active{
      color: #666666;
    }
  }
  .result{
    line-height: 45px;
    padding: 0 20px;
    font-size: 13px;
    color: #333;
    text-align: center;
    span{
      padding: 0 8px;
      font-size: 18px;
      font-weight: 600;
      color: ${props => props.theme.primaryColor}
    }
  }
  .reminder{
    line-height: 30px;
    padding: 0 20px;
    font-size: 12px;
    color: #999;
    text-align: right;
    background: #F5F5F5;
    font-weight:400;
  }
` 