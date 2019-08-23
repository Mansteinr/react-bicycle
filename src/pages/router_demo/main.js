import React from 'react'
import { Link } from 'react-router-dom'
export default class Main extends React.Component{
  render () {
    return (
      <div>
        this is Main
        <Link to='/main/a'>fsfds</Link>
        <hr />
        {/* 路由里面套路由 */}
        {this.props.children}
      </div>
      
    )
  }
}