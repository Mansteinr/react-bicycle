import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import Main from '../main'
import About from '../about'
import Topic from '../topic'
import Home from './Home'

export default class IRoute extends React.Component{
  render () {
    return (
      <HashRouter>
        <Home>
          <Route path="/main" render={() => 
            <Main>
              {/* 子路由 */}
              <Route path="/main/a" component={ About }></Route>
            </Main>
          }></Route>
          <Route path="/about" component={ About }></Route>
          <Route path="/topics" component={Topic}></Route> 
        </Home>
      </HashRouter>
    )
  }
}