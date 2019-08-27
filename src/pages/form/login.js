import React from 'react'
import { Card, Form, Input, Button, message } from 'antd'
const FormItem = Form.Item
class Login extends React.Component{
  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`${userInfo.username}通过校验`)
      }
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Card title="行内登录表单">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名"/>
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码"/>
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="水平登录表单">
          <Form style={{width: 300}}>
            <FormItem>
              {
                getFieldDecorator('username', {
                  initialValue: '韩燚',
                  rules: [
                    { required: true, message: 'Please input your Password!' },
                    { min: 5, max: 10, message: 'Ple your!' },
                    { pattern: /^\w+$/g, message: '用户名必须为英文字母' }
                  ]
                })(
                  <Input placeholder="请输入用户名"/>
                )
              }
            </FormItem>
            <FormItem>
            {
                getFieldDecorator('password', {
                  initialValue: '11111',
                  rules: []
                })(
                  <Input placeholder="请输入密码"/>
                )
              }
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>登录</Button>
            </FormItem>
          </Form>
        </Card>
        </div>
    )
  }
}

export default Form.create()(Login);