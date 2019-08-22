import React from 'react'
import { HashRouter, Link,  Route, Switch} from 'react-router-dom'
import Main from '../main'
import About from '../about'
import Topic from '../topic'
export default class Home extends React.Component{
  render () {
    return (
      // 路由哦根节点 里面不能直接写Router 否则会报错 用div包裹
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home1</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <hr />
          {/* 匹配/about时 也可以匹配到/   这个可以加exact*/}
          {/* <Route path="/" component={ Main }></Route>
          <Route path="/about" component={ About }></Route>
          <Route path="/topics" component={ Topic }></Route> */}


          {/* 添加exact* */}
          {/* <Route path="/" exact component={ Main }></Route>
          <Route path="/about" exact component={ About }></Route>
          <Route path="/topics" exact component={Topic}></Route>  */}
          

          {/* 也可使用switch 
            switch匹配到第一个路由之后 就不会往下在进行匹配了 只能匹配一个
            所以 / 路由要添加exact
          */}
          <Switch>
            <Route path="/" exact component={ Main }></Route>
            <Route path="/about" component={ About }></Route>
            <Route path="/topics" component={Topic}></Route> 
          </Switch>
        </div>
      </HashRouter>
    )
  }
}