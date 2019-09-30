import React from 'react'
import { Card, Button, Table, Form, Select, Modal, message } from 'antd'
import axios from '../../axios/index'
import Utils from '../../utils'
import './index.less'

const FormItem = Form.Item
const { Option } = Select

export default class City extends React.Component{

  state = {
    list: [],
    isShow: false
  }
  params = {
    page: 1
  }
  handleOpencity = () => {
    this.setState({
      isShow: true
    })
  }
  componentDidMount () {
    this.requestList()
  }
  handleSubmit = () => {
    // 取到ref里面的值
    let cityInfo = this.cityForm.props.form.getFieldsValue()
    axios.ajax({
      url: '/city/open',
      data: {
        params: cityInfo
      }
    }).then(res => {
      message.success('开通成功')
      this.setState({
        isShow: false
      })
    })
  }
  requestList = () => {
    let _this = this
    axios.ajax({
      url: '/open_city',
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
    })
  }
  render () {
    const columns = [{
      title: '城市ID',
      dataIndex: 'id'
    },{
      title: '城市名称',
      dataIndex: 'name'
    },{
      title: '用车模式',
        dataIndex: 'mode',
        render: (mode) => {
          return mode === 1 ? '停车点' : '禁停区'
        }
    },{
      title: '运营模式',
      dataIndex: 'op_mode',
      render: (op_mode) => {
        return op_mode === 1 ? '加盟' : '自营'
      }
    },{
      title: '授权加盟商',
      dataIndex: 'franchisee_name'
    },{
      title: '城市管理员',
      dataIndex: 'city_admins',
      render (arr) {
        return arr.map(v => {
          return v.user_name
        }).join(' , ')
      }
    },{
      title: '城市开通时间',
      dataIndex: 'open_time'
    },{
      title: '操作时间',
        dataIndex: 'update_time',
      render: Utils.formatterTime
    },{
      title: '操作人',
      dataIndex: 'sys_user_name'
    }]
    return (
      <div className="city">
        <Card>
          <FilterForm/>
        </Card>
        <Card>
          <Button type="primary" onClick={this.handleOpencity}>开通城市</Button>
        </Card>
        <Card>
          <Table
            columns={columns}
            dataSource={this.state.list}
            pagination={this.state.pagination}
          />
        </Card>
        <Modal
          title="开通城市"
          visible={this.state.isShow}
          onCancel={() => {
            this.setState({
              isShow: false
            })
          }}
          onOk={this.handleSubmit}
        >
          {/* wrappedComponentRef是antd中的ref */}
          <OpenCityForm wrappedComponentRef={(inst) => {
            // 将值保存在cityForm， 然后通过cityForm取值
            this.cityForm = inst
          }}/>
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
          label="用车模式"
        >
          {
            getFieldDecorator('mode')(
              <Select
                placeholder="请选择"
                style={{ width: 180 }}
              >
                <Option value="1">指定停车点模式</Option>
                <Option value="2">禁停区模式</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem
          label="营运模式"
        >
          {
            getFieldDecorator('op_mode')(
              <Select
                placeholder="请选择"
                style={{width: 180 }}
              >
                <Option value="1">自营</Option>
                <Option value="2">加盟</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem
          label="加盟商授权模式"
        >
          {/* 通过getFieldDecorator实现数据双向绑定 */}
          {
            getFieldDecorator('auth_status')(
              <Select
                placeholder="请选择"
                style={{width: 110 }}
              >
                <Option value="1">已加盟</Option>
                <Option value="2">未授权</Option>
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

class OpenCityForm extends React.Component{
  render () {
    const formItemLayout = {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 12
      }
    }
    const { getFieldDecorator } = this.props.form
    return (
      <Form layout="horizontal">
        <FormItem label="选择城市" {...formItemLayout}>
          {
            getFieldDecorator('city_id', {
              initialValue: ""
            })(
              <Select>
                <Option value="">全部</Option>
                <Option value="1">北京市</Option>
                <Option value="2">上海市</Option>
                <Option value="3">合肥市</Option>
                <Option value="4">南京市</Option>
              </Select>
            )
         }
        </FormItem>
        <FormItem label="营运模式" {...formItemLayout}>
        {
            getFieldDecorator('op_mode', {
              initialValue: "1"
            })(
              <Select>
                <Option value="1">自营</Option>
                <Option value="2">加盟</Option>
              </Select>
            )
         }
        </FormItem>
        <FormItem label="用车模式" {...formItemLayout}>
          {
              getFieldDecorator('use_mode', {
                initialValue: "1"
              })(
              <Select>
                <Option value="1">指定停车点</Option>
                <Option value="2">禁停区</Option>
              </Select>
              )
          }
        </FormItem>
      </Form>
    )
  }
}

OpenCityForm = Form.create({})(OpenCityForm)