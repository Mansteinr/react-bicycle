import React from 'react'
import { Card, Button, Table, Form, Select, Modal, message, DatePicker } from 'antd'
import axios from '../../axios/index'
import Utils from '../../utils'
const FormItem = Form.Item, Option = Select.Option

export default class Order extends React.Component{
  state = {
    list: [],
    orderInfo: {},
    orderComfirmOrder: false
  }
  params = {
    page: 1
  }
  componentDidMount () {
    this.requestList()
  }
  requestList = (url) => {
    let _this = this
    axios.ajax({
      url: url || '/order/list.json',
      data: {
        params: {
          page: this.params.page
        }
      }
    }).then(res => {
      this.setState({
        list: res.result.item_list.map((v, k) => {
          v.key = k
          return v
        }),
        pagination: Utils.pagination(res, (current) => {
          _this.params.page = current
          _this.requestList()
        })
      })
    }).catch(err => {
      Modal.info({
        content: err.message
      })
    })
  }
  // 结束订单
  handleOrderFinish = () => {
    let item = this.state.selectedItem
    if (!item || !item.id) {
      Modal.info({
        title: '信息',
        content: '请选择一条订单进行结束'
      })
      return
    } 
    axios.ajax({
      url: '/order/ebike_info',
      data: {
        params: 1
      }
    }).then(res => {
      this.setState({
        orderInfo: res.result,
        orderComfirmOrder: true
      })
    }).catch(err => {
      Modal.info({
        content: err.message
      })
    })
   
  }
  // 订单确认
  handleOk = () => {
    axios.ajax({
      url: '/order/finish',
      data: {
        params: 1
      }
    }).then(res => {
      message.success('订单结束')
      this.setState({
        orderComfirmOrder: false
      })
      this.requestList()
    }).catch(err => {
      Modal.info({
        content: err.message
      })
    })
  }
  onRowClick = (record, index) => {
    // 保存所选的按钮的索引
    let selectKey = [index]
  // 设置选中的key值
    this.setState({
      selectedRowKeys:selectKey,
      selectedItem: record
    })
  }
  // 订单详情
  openOrderDetail = () => {
    let item = this.state.selectedItem
    if (!item || !item.id) {
      Modal.info({
        title: '信息',
        content: '请选择一条订单'
      })
      return
    } 
    window.open(`/#/common/order/detail/${item.id}`, '_blank')
  }
  render () {
    const formItemLayout = {
      labelCol: {
        span: 5
      },
      wapperCol: {
        span: 19
      }
    }
    const columns = [{
      title: '订单编号',
      dataIndex: 'order_sn'
    },{
      title: '车辆编号',
      dataIndex: 'bike_sn'
    },{
      title: '用户名',
      dataIndex: 'user_name'
    },{
      title: '手机号码',
      dataIndex: 'moble'
    },{
      title: '里程',
      dataIndex: 'distance',
      render(distance){
        return distance/1000 + 'Km';
      }
    },{
      title: '行驶时长',
      dataIndex: 'total_time'
    },{
      title: '状态',
      dataIndex: 'status',
      render(status){
        return status === 1 ? '进行中' : '订单已结束'
      }
    },{
      title: '开始时间',
      dataIndex: 'start_time'
    },{
      title: '结束时间',
      dataIndex: 'end_time'
    },{
      title: '订单金额',
      dataIndex: 'total_fee'
    },{
      title: '实付金额',
      dataIndex: 'user_pay'
      }]
    const selectedRowKeys = this.state.selectedRowKeys
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    }
    return (
      <div>
        <Card>
          <FilterForm/>
        </Card>
        <Card>
          <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
          <Button type="primary" onClick={ this.handleOrderFinish }>结束订单</Button>
        </Card>
        <Card>
          <Table
            columns={columns}
            dataSource={this.state.list}
            pagination={this.state.pagination}
            rowSelection={rowSelection}
            // 点击一行时 单选有效
            onRow={(record,index) => {
              return {
                onClick:()=>{
                  this.onRowClick(record,index);
                }
              }
            }}
          />
        </Card>
        <Modal
          title="结束订单"
          visible={this.state.orderComfirmOrder}
          onCancel={() => {
            this.setState({
              orderComfirmOrder: false
            })
          }}
          onOk={this.handleOk}
          width={600}
        >
          <Form layout="horizontal">
            <FormItem label="车辆编号" {...formItemLayout}>
              {this.state.orderInfo.bike_sn}
            </FormItem>
            <FormItem label="剩余电量" {...formItemLayout}>
              {this.state.orderInfo.battery + '%'}
            </FormItem>
            <FormItem label="剩余电量" {...formItemLayout}>
              {this.state.orderInfo.battery + '%'}
            </FormItem>
            <FormItem label="行程开始时间" {...formItemLayout}>
              {this.state.orderInfo.start_time}
            </FormItem>
            <FormItem label="当前位置" {...formItemLayout}>
              {this.state.orderInfo.location}
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}

class FilterForm extends React.Component{
  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form layout="inline">
        <FormItem
          label="城市"
        >
          {
            getFieldDecorator('city_id')(
              <Select
                placeholder="请选择"
                style={{ width: 180 }}
              >
                <Option value="1">北京市</Option>
                <Option value="2">上海市</Option>
                <Option value="3">合肥市</Option>
                <Option value="4">南京市</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem
          label="订单时间"
        >
          {
            getFieldDecorator('start_time')(
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
            )
          }
          {
            getFieldDecorator('end_time')(
              <DatePicker style={{marginLeft: 5}} showTime format="YYYY-MM-DD HH:mm:ss"/>
            )
          }
        </FormItem>
        <FormItem
          label="订单状态"
        >
          {
            getFieldDecorator('order_status')(
              <Select
                placeholder="请选择"
                style={{width: 180 }}
              >
                <Option value="1">进行中</Option>
                <Option value="2">结束订单</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem>
          {/* 通过getFieldDecorator实现数据双向绑定 */}
          <Button type="primary" style={{ margin: '0 20px'}}>查询</Button>
          <Button>重置</Button>
        </FormItem>
      </Form>
    )
  }
}

FilterForm = Form.create({})(FilterForm)