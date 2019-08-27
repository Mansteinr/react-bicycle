import React from 'react'
import './ui.less'
import {Card, Button, message } from 'antd'
export default class Loading extends React.Component{
  handleOpen = (type) => {
    message[type]('Hello World ' + type)
  }
  render () {

    return (
      <div>
         <Card title="全局提示框" className="card-wrapper">
          <Button type="primary" onClick={() => this.handleOpen('success')}>success</Button>
          <Button type="primary" onClick={() => this.handleOpen('info')}>info</Button>
          <Button type="primary" onClick={() => this.handleOpen('warning')}>warning</Button>
          <Button type="primary" onClick={() => this.handleOpen('error')}>error</Button>
          <Button type="primary" onClick={() => this.handleOpen('loading')}>Loading</Button>
        </Card>
     </div>
    )
  }
}