import React from 'react'
import './ui.less'
import { Card, Button, Radio } from 'antd'
export default class Buttons extends React.Component{
  state = {
    loading: true,
    size: 'default'
  }
  handleCloseLoading = () => {
    this.setState({
      loading: !this.state.loading
    })
  }
  handleSize = (e) => {
    this.setState({
      size: e.target.value
    })
  }
  render () {
    return (
      <div>
        <Card title="基础按钮">
          <Button type="primary">韩燚</Button>
          <Button>韩燚</Button>
          <Button type="dashed">韩燚</Button>
          <Button type="danger">韩燚</Button>
          <Button type="disabled">韩燚</Button>
        </Card>
        <Card title="图形按钮">
          <Button type="primary" icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button type="dashed" icon="delete">删除</Button>
          <Button type="danger" icon="danger">韩燚</Button>
          <Button icon="download">下载</Button>
          <Button type="primary" shape="circle" icon="search"></Button>
        </Card>
        <Card title="Loading按钮">
          <Button type="primary" loading={this.state.loading}>确定</Button>
          <Button type="primary" shape="circle" loading={this.state.loading}></Button>
          <Button icon="edit" loading={this.state.loading}>点击加载</Button>
          <Button shape="circle" loading={this.state.loading}></Button>
          <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
        </Card>
        <Card title="按钮组">
          <Button.Group>
            <Button type="primary" icon="left" style={{marginRight: '0px'}}>
              前进
            </Button>
            <Button type="primary" icon="right">
              后退
            </Button>
          </Button.Group>
        </Card>
        <Card title="钮组尺寸">
          <Radio.Group value={this.state.size} onChange={this.handleSize}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>韩燚</Button>
          <Button size={this.state.size}>韩燚</Button>
          <Button type="dashed" size={this.state.size}>韩燚</Button>
          <Button type="danger" size={this.state.size}>韩燚</Button>
          <Button type="disabled" size={this.state.size}>韩燚</Button>
        </Card>
      </div>
    )
  }
}