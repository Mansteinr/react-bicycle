import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Common from './common'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loading from './pages/ui/loading'
import Notification from './pages/ui/notification'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
import Login from './pages/form/login'
import Reg from './pages/form/reg'
import BasicTable from './pages/table/basic'
import High from './pages/table/high'
import City from './pages/city'
import Order from './pages/order'
import OrderDetail from './pages/order/detail'
import NotMatch from './pages/notMatch'
export default class Router extends React.Component{
  render () {
    return (
      <HashRouter>
        {/* 子路由自能有一个根节点 故用div包裹
        菜单时嵌套路由  详情不是嵌套路由
         */}
        <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/common" render={() =>
                            <Common>
                                <Route path="/common/order/detail/:orderId" component={OrderDetail}/>
                            </Common>  
                        }
                        />
                        <Route path="/" render={()=>
                            <Admin>
                                <Switch>
                <Route path="/admin/ui/buttons" component={ Buttons }></Route>
                <Route path="/admin/ui/modals" component={ Modals }></Route>
                <Route path="/admin/ui/loadings" component={ Loading }></Route>
                <Route path="/admin/ui/notification" component={ Notification }></Route>
                <Route path="/admin/ui/messages" component={ Messages }></Route>
                <Route path="/admin/ui/gallery" component={ Gallery }></Route>
                <Route path="/admin/ui/tabs" component={ Tabs }></Route>
                <Route path="/admin/ui/carousel" component={ Carousel }></Route>
                <Route path="/admin/form/reg" component={ Reg }></Route>
                <Route path="/admin/form/login" component={ Login }></Route>
                <Route path="/admin/table/basic" component={ BasicTable }></Route>
                <Route path="/admin/table/high" component={ High }></Route>
                <Route path="/admin/city" component={ City }></Route>
                <Route path="/admin/order" component={ Order }></Route>
                <Route component={NotMatch}></Route>
                </Switch>
              </Admin>         
            } />
          </Switch>
        </App>
      </HashRouter>
    )
  }
}