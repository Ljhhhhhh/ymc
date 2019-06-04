import React from 'react'
import styled from 'styled-px2rem'

const BuyView = props => {
  const {face, pay, id} = props.data
  return face && id !== -1 ? (
    <Balance>
      <div className="count">
        <div className="label">总计</div>
        <div className="price">¥{face}</div>
        <div className="sale">(省{(face - pay).toFixed(2)})</div>
      </div>
      <div className="btn">立即充值</div>
    </Balance>): null
}

const Balance = styled.div `
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;  
  background: #FFF;
  .count{
    margin-left: 20px;
    line-height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .label{
      font-size: 15px;
      color: #333;
      font-weight: 400;
      margin-right: 13px;
    }
    .price{
      font-size: 18px;
      color: #333;
      font-weight: 500;
    }
    .sale{
      font-size: 12px;
      color: #7486FC;
      font-weight: 400;
    }
  }
  .btn{
    width: 140px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #FFF;
    background: linear-gradient(to bottom, #7486FC, #4048F8);
  }
`

export default BuyView