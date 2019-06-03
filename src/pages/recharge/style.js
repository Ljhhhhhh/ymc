import styled from 'styled-px2rem'

export const Container = styled.div `
  width: 100%;
  height: 100%;
  background: #F5F5F5;
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
  width: auto;
  height: auto;
  padding: 20px;
  box-shadow:0px -4px 5px 0px rgba(64,72,248,0.3);
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
    justify-content: flex-start;    
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
  &:nth-child(2) {
    margin: 10px 18px;
  }
  .face{
    font-size: 16px;
    color: #333;
  }
  .pay{
    font-size: 12px;
    color: #333;
    font-weight:400;
  }
  &.selected{

  }
`