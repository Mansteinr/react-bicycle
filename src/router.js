import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './pages/login'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loading from './pages/ui/loading'
import NotMatch from './pages/notMatch'
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
              <Switch>
                  <Route path="/admin/ui/buttons" component={Buttons}></Route>
                  <Route path="/admin/ui/modals" component={Modals}></Route>
                  <Route path="/admin/ui/loadings" component={Loading}></Route>
                  <Route component={NotMatch}></Route>
                </Switch>
            </Admin>
        }></Route>
        </App>
      </HashRouter>
    )
  }
}