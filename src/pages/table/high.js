import React from 'react';
import { Card, Table, Modal, Button, message, Badge} from 'antd';
import axios from './../../axios/index'
import Utils from './../../utils'

export default class High extends React.Component{
  state={
    dataSource:[]
  }
  params = {
    page:1
  }
  componentDidMount () {
    this.request()
  }
  // 动态获取mock数据
  request = () => {
    let _this = this
    axios.ajax({
      url:'/table/high/list',
      data:{
        params:{
          page:this.params.page
        }
      }
    }).then((res) => {
      if(res.code === 0){
        res.result.list.map((item, index) => {
          return item.key = index;
        })
        this.setState({
          dataSource:res.result.list,
          pagination: Utils.pagination(res, (current) => {
            // 分页传参
            _this.params.page = current;
            this.request()
          }),
          // 清空数组
          selectedRowKeys:[],
          selectedRows:null
        })
      }
    })
  }
  handleChange = (pagination, filters, sorter) => {
    this.setState({
      sortOrder: sorter.order
    })
  }
  // 删除操作
  handleDelete = (item) => {
    let id = item.id, _this = this
    Modal.confirm({
      title: '确认',
      content: `确认删除${id}?`,
      onOk: () => {
        message.success('删除成')
        _this.request()
      }
    })
  }
  render () {
    const columns = [{
      title:'id',
      key: 'id',
      width: 80,
      dataIndex:'id'
    }, {
        title: '用户名',
        width: 80,
      key: 'userName',
      dataIndex: 'userName'
    }, {
      title: '性别',
        key: 'sex',
        width: 80,
      dataIndex: 'sex',
      render(sex){
        return sex ===1 ?'男':'女'
      }
    }, {
      title: '状态',
      key: 'state',
      width: 80,
      dataIndex: 'state',
      render(state){
        let config  = {
          '1':'咸鱼一条',
          '2':'风华浪子',
          '3':'北大才子',
          '4':'百度FE',
          '5':'创业者'
        }
        return config[state];
      }
    }, {
        title: '爱好',
        width: 80,
      key: 'interest',
      dataIndex: 'interest',
      render(abc) {
        let config = {
            '1': '游泳',
            '2': '打篮球',
            '3': '踢足球',
            '4': '跑步',
            '5': '爬山',
            '6': '骑行',
            '7': '桌球',
            '8': '麦霸'
        }
        return config[abc];
      }
    }, {
        title: '生日',
        width: 120,
      key: 'birthday',
      dataIndex: 'birthday'
    }, {
      title: '地址',
        key: 'address',
        width: 120,
        dataIndex: 'address'
    }, {
        title: '早起时间',
        key: 'time',
        width: 120,
        dataIndex: 'time'
      }]
    
    
    const columns2 = [{
      title:'id',
      key: 'id',
      width: 80,
      fixed: 'left',
      dataIndex:'id'
    }, {
        title: '用户名',
        fixed: 'left',
        width: 80,
      key: 'userName',
      dataIndex: 'userName'
    }, {
      title: '性别',
        key: 'sex',
        width: 80,
      dataIndex: 'sex',
      render(sex){
        return sex === 1 ?'男':'女'
      }
    }, {
      title: '状态',
      key: 'state',
      width: 80,
      dataIndex: 'state',
      render(state){
        let config  = {
          '1':'咸鱼一条',
          '2':'风华浪子',
          '3':'北大才子',
          '4':'百度FE',
          '5':'创业者'
        }
        return config[state];
      }
    }, {
        title: '爱好',
        width: 80,
        key: 'interest',
        dataIndex: 'interest',
      render(abc) {
        let config = {
            '1': '游泳',
            '2': '打篮球',
            '3': '踢足球',
            '4': '跑步',
            '5': '爬山',
            '6': '骑行',
            '7': '桌球',
            '8': '麦霸'
        }
        return config[abc];
      }
    }, {
        title: '生日',
        width: 120,
      key: 'birthday76',
      dataIndex: 'birthday'
    }, {
      title: '生日',
      width: 120,
    key: 'birthday887',
    dataIndex: 'birthday'
  }, {
    title: '生日',
    width: 120,
      key: 'birthday0',
      dataIndex: 'birthday'
    }, {
      title: '生日',
      width: 120,
    key: 'birthday3',
    dataIndex: 'birthday'
    }, {
      title: '生日',
      width: 120,
    key: 'birthday2',
    dataIndex: 'birthday'
    }, {
      title: '生日',
      width: 120,
    key: 'birthday1',
    dataIndex: 'birthday'
    }, {
      title: '生日',
      width: 120,
    key: 'birthday4',
    dataIndex: 'birthday'
    }, {
      title: '地址',
        key: 'address',
        width: 120,
      dataIndex: 'address'
    }, {
      title: '早起时间',
        key: 'time',
        width: 120,
      dataIndex: 'time'
      }]
    
  const columns3 = [{
    title:'id',
    key: 'id',
    width: 80,
    dataIndex:'id'
  }, {
    title: '用户名',
    width: 80,
    key: 'userName',
    dataIndex: 'userName'
  }, {
    title: '年龄',
    key: 'age',
    width: 80,
    dataIndex: 'age',
    sorter: (a, b) => {
      return a.age - b.age
      },
    sortOrder: this.state.sortOrder
  }, {
    title: '性别',
    key: 'sex',
    width: 80,
    dataIndex: 'sex',
    render(sex){
      return sex ===1 ?'男':'女'
    }
  }, {
    title: '状态',
    key: 'state',
    width: 80,
    dataIndex: 'state',
    render(state){
      let config  = {
        '1':'咸鱼一条',
        '2':'风华浪子',
        '3':'北大才子',
        '4':'百度FE',
        '5':'创业者'
      }
      return config[state];
    }
  }, {
    title: '爱好',
    width: 80,
    key: 'interest',
    dataIndex: 'interest',
    render(abc) {
      let config = {
          '1': '游泳',
          '2': '打篮球',
          '3': '踢足球',
          '4': '跑步',
          '5': '爬山',
          '6': '骑行',
          '7': '桌球',
          '8': '麦霸'
      }
      return config[abc];
    }
  }, {
    title: '生日',
    width: 120,
    key: 'birthday',
    dataIndex: 'birthday'
  }, {
    title: '地址',
    key: 'address',
    width: 120,
    dataIndex: 'address'
  }, {
    title: '早起时间',
    key: 'time',
    width: 120,
    dataIndex: 'time'
      }]
    
    const columns4 = [{
      title:'id',
      width: 80,
      dataIndex:'id'
    }, {
      title: '用户名',
      dataIndex: 'userName'
    }, {
      title: '年龄',
      width: 80,
      dataIndex: 'age'
    }, {
      title: '性别',
      width: 80,
      dataIndex: 'sex',
      render(sex){
        return sex === 1 ?'男':'女'
      }
    }, {
      title: '状态',
      width: 80,
      dataIndex: 'state',
      render(state){
        let config = {
          '1': '怎么会有',
          '2':'风华浪子',
          '3':'北大才子',
          '4':'百度FE',
          '5':'创业者'
        }
        return config[state];
      }
    }, {
      title: '爱好',
      width: 80,
      dataIndex: 'interest',
      render(abc) {
        let config = {
            '1': <Badge status="success" text="成功"/>,
            '2': <Badge status="error" text="错误"/>,
            '3': <Badge status="default" text="正常"/>,
            '4': <Badge status="processing" text="进行中"/>,
            '5': <Badge status="warning" text="警告"/>
        }
        return config[abc];
      }
    }, {
      title: '生日',
      width: 120,
      dataIndex: 'birthday'
    }, {
      title: '地址',
      width: 120,
      dataIndex: 'address'
    }, {
      title: '操作',
      render: (text, item) => {
        return <Button size="small" onClick={(item) => { this.handleDelete(item) }}>删除</Button>
      }
    }]
    return (
      <div>
        <Card title="头部固定">
          <Table 
            bordered
            columns={ columns }
            dataSource={ this.state.dataSource }
            pagination={ false }
            scroll={{y:240}}
          />
        </Card>
        <Card title="左侧固定" style={{margin:'10px 0'}}>
          <Table
            bordered
            columns={ columns2 }
            dataSource={ this.state.dataSource }
            pagination={true}
            scroll={{x:2700}}
          />
        </Card>
        <Card title="排序" style={{margin:'10px 0'}}>
          <Table
            bordered
            columns={ columns3 }
            dataSource={ this.state.dataSource }
            pagination={true}
            onChange = {this.handleChange}
          />
        </Card>
        <Card title="操作按钮" style={{margin:'10px 0'}}>
          <Table
            bordered
            columns={ columns4 }
            dataSource={ this.state.dataSource }
            pagination={ true }
          />
        </Card>
     </div>
    )
  }
}