import React from 'react'
import { Button } from 'antd'
export default class Admin extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handClick () {
    this.setState({
      count: this.state.count + 1
    })
  }
  render () {
    return <div>
      <p>React生命周期函数</p>
      <button onClick={this.handleAdd}>点击一些</button>
      <button onClick={this.handClick.bind(this)}>点击一些</button>
      <p>{this.state.count}</p>
      <Button type="primary"  onClick={this.handleAdd}>
        Primary
      </Button>
    </div>
  }
}