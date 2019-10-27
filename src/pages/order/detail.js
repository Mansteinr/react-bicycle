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
        this.renderMap(res.result)
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
    // 添加控件 如放大缩小 量尺
    this.addMapControl()
    this.drawRouter(result.position_list)
    this.drawServiceArea(result.area)
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
    if (positionList.length) {
      let first = positionList[0], last = positionList[positionList.length - 1]
      // 起始点
      startPoint = new window.BMap.Point(first.lon,first.lat);
      let startIcon = new window.BMap.Icon('/assets/start_point.png',new window.BMap.Size(36,42),{
          imageSize:new window.BMap.Size(36,42),
          anchor: new window.BMap.Size(18, 42)
      }), startMarker = new window.BMap.Marker(startPoint, { icon: startIcon})
      map.addOverlay(startMarker)
      
      // 终点
      endPoint = new window.BMap.Point(last.lon, last.lat)
      let endIcon = new window.BMap.Icon('/assets/end_point.png', new window.BMap.Size(36, 42), {
          imageSize: new window.BMap.Size(36, 42),
          anchor: new window.BMap.Size(18, 42)
      }), endMarker = new window.BMap.Marker(endPoint, { icon: endIcon })
      map.addOverlay(endMarker)

      // 连接路线图
      let trackPoint = [];
      for(let i=0;i<positionList.length;i++){
          let point = positionList[i];
          trackPoint.push(new window.BMap.Point(point.lon, point.lat));
      }
      // 设置连线的属性
      let polyline = new window.BMap.Polyline(trackPoint,{
          strokeColor:'#1869AD',
          strokeWeight:3,
          strokeOpacity:1
      })
      this.map.addOverlay(polyline)
      // 设置显示地图中心 // 地图中心点
      this.map.centerAndZoom(endPoint, 11)
    }
  }
  // 绘制服务区
  drawServiceArea = (positionList) => {
    // 连接路线图
    let trackPoint = []
    for(let i=0;i<positionList.length;i++){
        let point = positionList[i];
        trackPoint.push(new window.BMap.Point(point.lon, point.lat));
    }
    let Polygon = new window.BMap.Polygon(trackPoint, {
      strokeColor:'#CE0000',
      strokeWeight:2,
      strokeOpacity: 1,
      fillColor: '#ff8605',
      fillOpacity: 0.3
    })
    this.map.addOverlay(Polygon)
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
                <div className="detail-form-content">{distance + ''}</div>
              </li>
            </ul>
          </div>
      </Card>
    </div>
    )
  }
}