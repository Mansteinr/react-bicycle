import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Main from './main'
import About from '../about'
import Topic from '../topic'
import Home from './Home'
import Info from './info'
import notMatch from './notMatch'

export default class IRoute extends React.Component{
  render () {
    return (
      <HashRouter>
        <Home>
          <Switch>
            <Route path="/main" render={() => 
              <Main>
                {/* 子路由 */}
                <Route path="/main/:mianId" component={ Info }></Route>
              </Main>
            }></Route>
            <Route path="/about" component={ About }></Route>
            <Route path="/topics" component={Topic}></Route> 
            <Route component={notMatch}></Route>
          </Switch>
        </Home>
      </HashRouter>
    )
  }
}