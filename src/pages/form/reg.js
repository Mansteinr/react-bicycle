import React from 'react'
import {
  Upload, Icon, InputNumber, Button, Card, Form, Input, Checkbox, Radio, Select, Switch, DatePicker, TimePicker

} from 'antd'
import moment from 'moment'
const FormItem = Form.Item, TextArea = Input.TextArea, url = 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
const formItemLayout = {
  labelCol: {
    xs: { span: 4 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
}
const offsetLayout = {
  wrapperCol:{
      xs:24,
      sm:{
          span:12,
          offset:4
      }
  }
}
class Reg extends React.Component{
  handleSubmit = () => {
    console.log(90)
  }
  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Card>
          <Form>
            <FormItem label="用户名" {...formItemLayout}>
              {
                getFieldDecorator('username', {
                  initialValue: '韩燚',
                  rules: [
                    { required: true, message: '用户名不能为空' },
                    { min: 5, max: 10, message: '长度不在范围内!' },
                    { pattern: /^\w+$/g, message: '用户名必须为英文字母' }
                  ]
                })(
                  <Input placeholder="请输入用户名"/>
                )
              }
            </FormItem>
            <FormItem label="密码"  {...formItemLayout}>
            {
                getFieldDecorator('password', {
                  initialValue: '11111',
                  rules: []
                })(
                  <Input  placeholder="请输入密码"/>
                )
              }
            </FormItem>
            <FormItem label="性别"  {...formItemLayout}>
            {
                getFieldDecorator('sex', {
                  initialValue: '2',
                  rules: []
                })(
                  
                  <Radio.Group>
                    <Radio value="1">男</Radio>
                    <Radio value="2">女</Radio>
                  </Radio.Group>
                )
              }
            </FormItem>
            <FormItem label="年龄"  {...formItemLayout}>
              {
                  getFieldDecorator('age', {
                    initialValue: 18,
                    rules: []
                  })(
                    
                    <InputNumber/>
                  )
                }
            </FormItem>
            <FormItem label="当前状态"  {...formItemLayout}>
              {
                  getFieldDecorator('state', {
                    initialValue: '2',
                    rules: []
                  })(
                    
                    <Select>
                      <Select.Option value="1">1</Select.Option>
                      <Select.Option value="2">2</Select.Option>
                      <Select.Option value="3">3</Select.Option>
                   </Select>
                  )
                }
            </FormItem>
            <FormItem label="爱好"  {...formItemLayout}>
              {
                  getFieldDecorator('hobby', {
                    initialValue: ['2', '3'],
                    rules: []
                  })(
                    
                    <Select mode="multiple">
                      <Select.Option value="1">1</Select.Option>
                      <Select.Option value="2">2</Select.Option>
                      <Select.Option value="3">3</Select.Option>
                   </Select>
                  )
                }
            </FormItem>
            <FormItem label="是否已婚"  {...formItemLayout}>
              {
                getFieldDecorator('marrige', {
                    valuePropName: 'checked',
                    initialValue: true,
                    rules: []
                  })(
                    <Switch/>
                  )
                }
            </FormItem>
            <FormItem label="生日"  {...formItemLayout}>
              {
                getFieldDecorator('birthday', {
                    initialValue: moment('2018-05-01')
                  })(
                    <DatePicker
                      showTime
                      format="YYYY-MM-DD HH:mm:ss"
                    />
                  )
                }
            </FormItem>
            <FormItem label="生日"  {...formItemLayout}>
              {
                getFieldDecorator('time', {
                    initialValue: moment('2018-05-01')
                  })(
                    <TimePicker
                      showTime
                      format="YYYY-MM-DD HH:mm:ss"
                    />
                  )
                }
            </FormItem>
            <FormItem label="留言"  {...formItemLayout}>
              {
                getFieldDecorator('address', {
                    initialValue: '南京市'
                  })(
                    <TextArea
                      autosize={{
                        minRows: 4,
                        maxRows: 8
                      }}
                    />
                  )
                }
            </FormItem>
            <FormItem label="头像"  {...formItemLayout}>
              {
                getFieldDecorator('avatar')(
                  <Upload
                    name="logo"
                    showUploadList={true}
                    action={url}
                    onChange={({ file, fileList }) => {
                      if (file.status !== 'uploading') {
                        console.log(file, fileList);
                      }
                    }}
                    listType="picture-card">
                    <Button>
                      <Icon type="upload" /> Click to upload
                    </Button>
                  </Upload>
                  )
                }
            </FormItem>
            <FormItem {...offsetLayout}>
              {
                  getFieldDecorator('userImg')(
                      <Checkbox>我已阅读过<a href="#">慕课协议</a></Checkbox>
                  )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
                <Button type="primary" onClick={this.handleSubmit}>注册</Button>
            </FormItem>
            
          </Form>
        </Card>
        
      </div>
    )
  }
}
export default Form.create()(Reg)