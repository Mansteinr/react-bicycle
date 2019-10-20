import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Utils from '../../utils'
import axios from '../../axios/index'

// 百度天气API接口
//http://api.map.baidu.com/telematics/v3/weather?location=beijing&output=json&ak=3p49MVra6urFRGOT9s8UBWr2
let url = 'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent('南京')+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
export default class Header extends Component{
  // 必须先声明state才能setState
  state = {
    userName: 'world'
  }
  getWeatherAPIData () {
    axios.jsonp({
      url
    }).then(res => {
      let data = res.results[0].weather_data[0]
      this.setState({
        dayPictureUrl: data.dayPictureUrl,
        weather: data.weather
      })
    })
  }
  componentDidMount() {
    setTimeout(() => {
      let sysTime = Utils.formatterTime(+new Date())
      return this.setState({
        sysTime
      })
    }, 1000)
    this.getWeatherAPIData()
  }
  render () {
    const menuType = this.props.menuType
    return (
      <div className="header">
        <Row className="header-top">
          {
            menuType ? <Col span={6}>
              <img src="/assets/logo-antd.svg" alt="" />
              <span>管理系统</span>
              </Col> : ''
          }
          
          <Col span={menuType? 18 : 24}>
            <span>欢迎，{this.state.userName}</span>
            {/* <a href="#">退出</a> */}
          </Col>
        </Row>
        {
          menuType ? '' : <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">首页</Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.sysTime} </span>
            <span className="weather-img">
              <img src={this.state.dayPictureUrl} alt="" />
             
            </span>
            <span className="weather-detail">
              { this.state.weather }
            </span>
          </Col>
        </Row>
        }
        
      </div>
    )
  }
}