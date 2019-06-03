import styled from "styled-px2rem";

export const Container = styled.div `
  width: 100%;
  height: auto;
  .ratina-bd.am-navbar:before{
    border-color: #e6e6e6;
  }
  .title{
    font-size: 16px;
    font-weight:500;
    color: #000;
    text-align: center;
    margin: 30px auto 15px;
  }
  .time{
    font-size: 12px;
    color: #999;
    font-weight: 400;
    text-align: center;
  }
  .content{
    margin: 25px 20px;
    padding-top: 25px;
    color: #999;
    font-size: 14px;
    line-height: 28px;
  }
  .footer{
    text-align: right;
    margin: 15px 20px;
    p{
      color: #999;
      font-size: 14px;
      line-height: 28px;
    }
  }
`