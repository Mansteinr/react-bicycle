import React from 'react'
import { Card, Button, Modal } from 'antd'

export default class Modals extends React.Component{
  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false
  }
  handleOpen = (type) => {
    this.setState({
      [type]: !this.state[type]
    })
  }
  handleConfirm = (type) => {
    Modal[type]({
      title: '确认',
      content: 'welcome to Anhui',
      onOk () {
        console.log('确认')
      },
      onCancel () {
        console.log('onCancel')
      }
    })
  }
  handleClose = (type) => {
    this.setState({
      [type]: !this.state[type]
    })
  }
  render () {
    return (
      <div>
        <Card title="基础模态框">
          {/* 不传参 可以这样写  这样写一开始就执行了 */}
          {/* <Button type="primary" onClick={this.handleOpen('showModal1')}>o45pen</Button> */}
          <Button type="primary" onClick={() => this.handleOpen('showModal1')}>open</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px弹框</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
        </Card>
        <Card title="信息确认框">
          {/* 不传参 可以这样写  这样写一开始就执行了 */}
          {/* <Button type="primary" onClick={this.handleOpen('showModal1')}>o45pen</Button> */}
          <Button type="primary" onClick={() => this.handleConfirm('confirm')}>confirm</Button>
          <Button type="primary" onClick={() => this.handleConfirm('info')}>info</Button>
          <Button type="primary" onClick={() => this.handleConfirm('success')}>success</Button>
          <Button type="primary" onClick={() => this.handleConfirm('warning')}>warning</Button>
        </Card>
        <Modal
          title="React"
          visible={this.state.showModal1}
          onCancel={() => this.handleClose('showModal1')}
          onOk={() => this.handleClose('showModal1')}
        >
          <p>welcome to Anhui</p>
        </Modal>
        <Modal
          title="React"
          visible={this.state.showModal2}
          okText="下一步"
          cancelText="取消"
          onCancel={() => this.handleClose('showModal2')}
          onOk={() => this.handleClose('showModal2')}
        >
          <p>welcome to Anhui</p>
        </Modal>
        <Modal
          style={{top:20}}
          title="React"
          visible={this.state.showModal3}
          okText="下一步"
          cancelText="取消"
          onCancel={() => this.handleClose('showModal3')}
          onOk={() => this.handleClose('showModal3')}
        >
          <p>welcome to Anhui</p>
        </Modal>
        <Modal
          warapClassName="vertical-center-modal"
          title="React"
          visible={this.state.showModal4}
          okText="下一步"
          cancelText="取消"
          onCancel={() => this.handleClose('showModal4')}
          onOk={() => this.handleClose('showModal4')}
        >
          <p>welcome to Anhui</p>
        </Modal>
        <Modal
          warapClassName="vertical-center-modal"
          title=""
          visible={this.state.showModal4}
          okText="下一步"
          cancelText="取消"
          onCancel={() => this.handleClose('showModal4')}
          onOk={() => this.handleClose('showModal4')}
        >
          <p>welcome to Anhui</p>
        </Modal>
      </div>
    )
  }
}