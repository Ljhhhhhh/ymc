import React, { Component } from "react";
import {NavBar, Icon} from 'antd-mobile'

class Register extends Component {
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          rightContent={<div>登录</div>}>
          注册
        </NavBar>
        <div className="hh">hello</div>
      </div>
    );
  }
}

export default Register;
