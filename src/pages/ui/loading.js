import React from 'react'
import './ui.less'
import {Card, Button, Spin, Icon, Alert } from 'antd'
export default class Loading extends React.Component{
  render () {
    const icon = <Icon type="loading" style={{fontSize: 24}}></Icon>
    return (
      <div>
         <Card title="spin用法" className="card-wrapper">
          <Spin style={{margin: '0 10px'}} size="small"/>
          <Spin style={{margin: '0 10px'}}/>
          <Spin style={{margin: '0 10px'}} size="large"/>
          <Spin style={{margin: '0 10px'}} indicator={icon}/>
        </Card>
        <Card title="内容遮罩" className="card-wrapper">
          <Alert
            message="React"
            description="welcome to Anhui"
          ></Alert>
          <Alert
            type="warning"
            message="React"
            description="welcome to Anhui"
          ></Alert>
          <Spin>
            <Alert
              type="warning"
              message="React"
              description="welcome to Anhui"
            ></Alert>
          </Spin>
          <Spin tip="加载中...">
            <Alert
              type="warning"
              message="React"
              description="welcome to Anhui"
            ></Alert>
          </Spin>
        </Card>
     </div>
    )
  }
}