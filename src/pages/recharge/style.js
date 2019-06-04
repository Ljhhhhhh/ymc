import styled from 'styled-px2rem'
import {List, Carousel} from 'antd-mobile'

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
  /* box-shadow: 0px -4px 5px 0px rgba(64,72,248,0.3); */
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
  min-height: 50px;
  margin: 10px 0;
  .am-list-body::before, .am-list-body::after{
    display: none!important;
  }
  .am-list-item{
    min-height:50px;
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
      /* line-height: 28px; */
    }
    .time{
      font-size: 12px;
      font-weight: 400;
      color: #EB3F45;
      /* line-height: 28px; */
    }
    .exp{
      font-size:12px;
      font-weight:400;
      color: #999999;
      /* line-height:28px; */
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