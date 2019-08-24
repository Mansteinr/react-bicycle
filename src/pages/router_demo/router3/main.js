import React from 'react'
import { Link } from 'react-router-dom'
export default class Main extends React.Component{
  render () {
    return (
      <div>
        this is Main
        <br/>
        <Link to='/main/test-id'>测试</Link>
        <br/>
        <Link to='/main/456'>测试</Link>
        <hr />
        {/* 路由里面套路由 */}
        {this.props.children}
      </div>
      
    )
  }
}