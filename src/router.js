import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './pages/login'
import Buttons from './pages/ui/buttons'
import NotMatch from './pages/notMatch'
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
          {/* admin里面嵌套子路由 */}
          <Route path="/admin" render={() => 
            <Admin>
              <Route path="/admin/ui/buttons" component={Buttons}></Route>
              <Route component={ NotMatch }></Route>
            </Admin>
        }></Route>
        </App>
      </HashRouter>
    )
  }
}