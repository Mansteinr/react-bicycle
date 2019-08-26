import React from 'react'
import './ui.less'
import {Card, Button, notification } from 'antd'
export default class Loading extends React.Component{
  handleOpen = (type, placement) => {
    if (placement) {
      notification.config({
        placement
      })
    }
    notification[type]({
      message: 'welcome to Anhui',
      descriptio: 'welcome to Anhui'
    })
  }
  render () {

    return (
      <div>
         <Card title="通知提醒框" className="card-wrapper">
          <Button type="primary" onClick={() => this.handleOpen('success')}>success</Button>
          <Button type="primary" onClick={() => this.handleOpen('info')}>info</Button>
          <Button type="primary" onClick={() => this.handleOpen('warning')}>warning</Button>
          <Button type="primary" onClick={() => this.handleOpen('error')}>error</Button>
        </Card>
         <Card title="通知提醒框" className="card-wrapper">
          <Button type="primary" onClick={() => this.handleOpen('success', 'topLeft')}>success</Button>
          <Button type="primary" onClick={() => this.handleOpen('info', 'topRight ')}>info</Button>
          <Button type="primary" onClick={() => this.handleOpen('warning', 'bottomLeft')}>warning</Button>
          <Button type="primary" onClick={() => this.handleOpen('error', 'bottomLeft')}>error</Button>
        </Card>
     </div>
    )
  }
}