import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './pages/login'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loading from './pages/ui/loading'
import Notification from './pages/ui/notification'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
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
                  <Route path="/admin/ui/notification" component={Notification}></Route>
                  <Route path="/admin/ui/messages" component={Messages}></Route>
                  <Route path="/admin/ui/gallery" component={Gallery}></Route>
                  <Route path="/admin/ui/tabs" component={Tabs}></Route>
                  <Route component={NotMatch}></Route>
                </Switch>
            </Admin>
        }></Route>
        </App>
      </HashRouter>
    )
  }
}