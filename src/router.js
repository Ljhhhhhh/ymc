import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
// import Storage from './utils/storage'
// import routerConfig from './config/routerConfig'
import App from './App'
import Register from './pages/user/register'
import Login from './pages/user/login'
import Forget from './pages/user/forget'
import Home from './pages/home/home'
import Gift from './pages/gift/gift'
import Notice from './pages/notice/notice'
import Recharge from './pages/recharge/recharge'
import useCoupon from './pages/recharge/coupon'
// import Layout from './layout/layout'
// import Home from './pages/home'
// import Category from './pages/product/category'
// import CategoryAdd from './pages/product/category/add'
// import Product from './pages/product/product'
// import ProductDetail from './pages/product/product/handle'
// import Order from './pages/order'
// import OrderDetail from './pages/order/detail'
// import User from './pages/user';

// import NoMatch from './pages/nomatch'

// const storage = new Storage()
export default class Router extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/forget' component={Forget} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/gift' component={Gift} />
            <Route exact path='/notice' component={Notice} />
            <Route exact path='/recharge' component={Recharge} />
            <Route exact path='/recharge/coupon' component={useCoupon} />
            <Redirect to='/home' />
          </Switch>
        </App>
      </HashRouter>
    )
  }
}

// class AuthorizedRoute extends Component{
//   render() {
//     const {component: Component, ...rest} = this.props
//     const userinfo = storage.getStorage('userinfo')
//     const userrole = userinfo.role;
//     const {routeRole} = {...rest}
//     console.log(routerConfig, 'routerConfig');
//     routerConfig.map(item => {
//       if (item.key === {...rest}.path) {
//         console.log(item);
//       }
//     })
//     // console.log({...rest}.path, 'rest')
//     return (
//       <Route {...rest} render={props => {
//         return routeRole.includes(userrole) ? 
//           <Component {...props} /> :
//           <div>暂未权限访问该页面</div>
//       }} />
//     )
//   }
// }