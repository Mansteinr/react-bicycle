import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './pages/login'
// import Detail from './pages/detail'
export default class Router extends React.Component{
  render () {
    return (
      <HashRouter>
        {/* 子路由自能有一个根节点 故用div包裹
        菜单时嵌套路由  详情不是嵌套路由
         */}
        <App>
         <Route path="/login" component={Login}></Route>
         <Route path="/admin" component={Admin}></Route>
         {/* <Route path="/order/detail" component={Detail}></Route> */}
        </App>
      </HashRouter>
    )
  }
}