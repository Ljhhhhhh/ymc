import React, {useState, useCallback} from 'react'
import {NavBar, Icon} from 'antd-mobile'
import {Link} from 'react-router-dom'
import GoBack from "../../components/GoBack";
import PngIcon from "../../components/PngIcon";
import {Container, AddCard, SelectTicket, TicketItem} from './style'

const Recharge = () => {
  const [ticket, setTicket] = useState(0)

  return (
    <Container>
      <NavBar
        mode="light"
        icon={<GoBack color='#333' />}
        rightContent={<Link to='/home'><PngIcon icon='question' width='20px' height='20px' /></Link>}
      >即时充值</NavBar>
      <AddCard className="ratina-bd bd-t">
        <div className="title">充值油卡</div>
        <div className="add-btn">
          <div><span>+请添加加油卡</span><PngIcon icon='recharge/oil_station' width="14px" height="14px" /></div>
        </div>
      </AddCard>
      <TicketList/>
    </Container>
  )
}

const TicketList = props => {
  const list = [
    {
      face: 100,
      pay: 99.5
    },
    {
      face: 200,
      pay: 199
    },
    {
      face: 500,
      pay: 497.5
    },
    {
      face: 800,
      pay: 796
    },
    {
      face: 1000,
      pay: 995
    }
  ]
  return (
    <SelectTicket>
      <div className="title">选择充值金额</div>
      <div className="content">
        {
          list.map(item => (
            <TicketItem>
              <div className="face">{item.face}</div>
              <div className="pay">{item.pay}</div>
            </TicketItem>
          ))
        }
      </div>
      
    </SelectTicket>
  )
}

export default Recharge