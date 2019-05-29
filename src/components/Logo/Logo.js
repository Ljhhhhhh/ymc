import React from 'react'
import logoImg from '../../static/images/logo.png'
import {LogoWrapper} from './style'

const Logo = () => {
  return (
    <LogoWrapper>
      <img src={logoImg} alt="logo"/>
    </LogoWrapper>
  )
}

export default Logo