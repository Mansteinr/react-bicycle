import React from 'react'
import Child from './Child'
<<<<<<< HEAD
import { Button } from 'antd';
=======
import { Button, Radio, Icon } from 'antd';
>>>>>>> 7dc0d5137948b55e27a42caa539b4ed977fb8e11
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
<<<<<<< HEAD
      <Button type="primary">Primary</Button>
      <Child name={this.state.count}/>
=======
      <Child name={this.state.count} />
      <Button type="primary">
          Primary
        </Button>
>>>>>>> 7dc0d5137948b55e27a42caa539b4ed977fb8e11
    </div>
  }
}