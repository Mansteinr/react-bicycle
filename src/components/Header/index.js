import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './index.less'
export default class Header extends Component{
  state = {
    userName: 'world'
  }
  render () {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎，{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">首页</Col>
          <Col span={20} className="weather">
            <span className="date">2019-02-23</span>
            <span className="weather-detail">多云</span>
          </Col>
        </Row>
      </div>
    )
  }
}