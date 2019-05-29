import React from "react";
import { NavBar, Icon } from "antd-mobile";
import Logo from '../../components/Logo/Logo'
import {HomeWrapper} from './style.js'

const Register = props => {
  return (
    <div>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        rightContent={<div>登录</div>}>
        注册
      </NavBar>
      <Logo/>
      <HomeWrapper>hello</HomeWrapper>
    </div>
  );
};

export default Register;
