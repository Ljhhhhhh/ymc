import React from "react";
import { NavBar, Icon } from "antd-mobile";
import Logo from '../../components/Logo/Logo'

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
      <div className="content">hello</div>
    </div>
  );
};

export default Register;
