import React from 'react'
import { Card } from 'antd'
import axios from '../../axios/index'
import './detail.less'

export default class Order extends React.Component {
  state = {}
  componentDidMount () {
    let orderId = this.props.match.params.orderId
    if (orderId) {
      this.getDetailInfo(orderId)
    }
  }
  getDetailInfo = (orderId) => {
    axios.ajax({
      url: '/order/detail.json',
      data: {
        params: {
          orderId
        }
      }
    }).then(res => {
      if (res.code === 0) {
        this.setState({
          orderInfo: res.result
        })
        this.renderMap(res.result.position_list)
      }
    }).catch(err => {
      console.log(err.message)
    })
  }
  renderMap = (result) => {
    // 创建实列  new BMap会报错 因为这是单页面程序 变量市通过import导入进来的
    // this.map = new BMap.Map('orderDetailMap', {
    // 通过new window.BMap可以的 因为引入的方式将BMap  挂在在window对象下
    this.map = new window.BMap.Map('orderDetailMap', {
      enableMapClick: false
    })
    // 地图中心点
    this.map.centerAndZoom('南京', 11)
    // 添加控件 如放大缩小 量尺
    this.addMapControl()
    this.drawRouter(result)
  }

  addMapControl = () => {
    let map = this.map
    map.addControl(new window.BMap.NavigationControl())
    map.addControl(new window.BMap.ScaleControl())
    map.addControl(new window.BMap.OverviewMapControl())
    map.addControl(new window.BMap.MapTypeControl())
  }

  // 绘制路线图

  drawRouter = (positionList) => {
    let map = this.map, startPoint = '', endPoint = ''
    if (positionList.lengt) {
      let arr = positionList[0]
      // 起始坐标点
      startPoint = new window.BMap.point(arr.lon, arr.lat)
      // 创建起始坐标的图标
      // new window.BMap.size(36, 42)设置空间大小
      let startIcon = new window.BMap.Icon('/assets/start.point.png', new window.BMap.size(36, 42), {
        imageSize: new window.BMap.size(36, 42),
        anchor: new window.BMap.size(36, 42)
      })
      let startMarker = new window.BMap.Marker(startPoint, startIcon)

      
    }
    

  }
  render () {
    const info = this.state.orderInfo || {}
    const distance = info.distance / 1000 
    return (
      <div>
      <Card>
          <div id="orderDetailMap" className="order-map"></div>
          <div className="detail-items">
            <div className="item-title">基础信息</div>
            <ul className="detail-form">
              <li>
                <div className="detail-form-left">用车模式</div>
                <div className="detail-form-content">{info.mode === 1 ? '服务区' : '停车点'}</div>
              </li>
              <li>
                <div className="detail-form-left">订单编号</div>
                <div className="detail-form-content">{info.order_sn}</div>
              </li>
              <li>
                <div className="detail-form-left">车辆编号</div>
                <div className="detail-form-content">{info.bike_sn}</div>
              </li>
              <li>
                <div className="detail-form-left">用户姓名</div>
                <div className="detail-form-content">{info.user_name}</div>
              </li>
              <li>
                <div className="detail-form-left">手机号码</div>
                <div className="detail-form-content">{info.moble}</div>
              </li>
            </ul>
          </div>
          <div className="detail-items">
            <div className="item-title">行驶轨迹</div>
            <ul className="detail-form">
              <li>
                <div className="detail-form-left">行驶起点</div>
                <div className="detail-form-content">{info.start_location}</div>
              </li>
              <li>
                <div className="detail-form-left">行驶终点</div>
                <div className="detail-form-content">{info.end_location}</div>
              </li>
              <li>
                <div className="detail-form-left">行驶里程</div>
                <div className="detail-form-content">{distance}</div>
              </li>
            </ul>
          </div>
      </Card>
    </div>
    )
  }
}