import React from 'react'

import { Table, Card } from 'antd'
import '../../style/common.less'
import axios from './../../axios/index'
export default class Basic extends React.Component{
  state = {
    dataSource2 : []
  }
  request = () => {
    axios.ajax({
      url: 'table/list1',
      data: {
        params: {
          page: 1
        }
      }
    }).then(res => {
      this.setState({
        dataSource2: res.data.result.list
      })
    })
  }
  componentDidMount () {
    this.request()
  } 
  render () {
    const dataSource = [
      {
        key: '1',
        userName: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        userName: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      }, {
        key: '12',
        userName: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '22',
        userName: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      }, {
        key: '13',
        userName: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '24',
        userName: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      }, {
        key: '14',
        userName: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '25',
        userName: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      }, {
        key: '15',
        userName: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '26',
        userName: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      }, {
        key: '16',
        userName: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '27',
        userName: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ];
    const columns = [
      {
        title: '姓名',
        dataIndex: 'userName',
        key: 'userName',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ]
    return (
      <div>
        <Card title="基础表格">
          <Table
            dataSource={dataSource}
            columns={ columns }
          />
        </Card>
        <Card title="动态表格">
          <Table
            dataSource={this.state.dataSource2}
            columns={ columns }
          />
        </Card>
      </div>
    )
  }
}