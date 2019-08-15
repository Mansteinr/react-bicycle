import React from 'react'
import Child from './Child'

export default class Life extends React.Component{
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
      <Child name={this.state.count}/>
    </div>
  }
}