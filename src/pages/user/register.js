import React, {useState, useCallback} from "react";
import { NavBar, Icon, InputItem, Button } from "antd-mobile";
import { createForm } from "rc-form";
import { LogoBox, FormContent, BtnWrap } from "./style.js";
import PngIcon from '../../components/PngIcon'
import Eye from '../../components/Eye'
import Logo from "../../components/Logo/Logo";
import InviteBtn from "../../components/InviteBtn";


const Register = props => {
  const [passwordType, setPasswordType] = useState('password')
  const { getFieldProps } = props.form;

  const submit = useCallback(() => {
    const data = props.form.getFieldsValue();
    console.log(data);
  }, [props.form])

  const togglePasswordType = useCallback(() => {
    if (passwordType === 'password') {
      setPasswordType('text')
    } else {
      setPasswordType('password')
    }
  }, [passwordType])

  const sendVerify = useCallback(() => {
    console.log('发送验证码');
  }, [])

  return (
    <div>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        rightContent={<div>登录</div>}>
        注册
      </NavBar>
      <LogoBox>
        <Logo />
      </LogoBox>
      <FormContent>
        <InputItem
          {...getFieldProps("mobile")}
          placeholder="手机号码"
          clear>
          <PngIcon width="16px" height="18px" icon="mobile" />
        </InputItem>
        <InputItem
          {...getFieldProps("password")}
          placeholder="请设置一个最少6位的密码"
          type={passwordType}
          clear
          extra={
            <Eye type={passwordType} handleClick={() => togglePasswordType()}  />
          }>
          <PngIcon width="16px" height="18px" icon="password" />
        </InputItem>
        <InputItem
          {...getFieldProps("code")}
          placeholder="请输入验证码"
          clear
          extra={
            <InviteBtn content='发送验证码' handleClick={sendVerify}/>
            // <InviteBtn>发送验证码</InviteBtn>
          }>
          <PngIcon width="18px" height="16px" icon="vefiry" />
        </InputItem>
        <InputItem
          {...getFieldProps("invite")}
          placeholder="请输入邀请人手机号(选填)"
          clear>
          <PngIcon width="19px" height="18px" icon="invite" />
        </InputItem>
        <BtnWrap>
          <Button onClick={submit}>注册领取新人福利</Button>
        </BtnWrap>
        
      </FormContent>
    </div>
  );
};

export default createForm()(Register);
