import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import MenuConfig from './../../config/menuConfig'
import { Menu } from 'antd'
import './index.less'

const { SubMenu } = Menu;

export default class NavLeft extends Component{
  state = {
    collapsed: false
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  
  // 菜单渲染
  renderMenu =(data)=>{
    return data.map((item)=>{
        if(item.children){
            return (
                <SubMenu title={item.title} key={item.key}>
                    { this.renderMenu(item.children)}
                </SubMenu>
            )
        }
        return <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>  
        </Menu.Item>
    })
  }
  componentDidMount () {
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode
    })
  }
  render () {
    return (
      <div>
        <div className="logo" onClick={this.toggleCollapsed}>
          {/* 一般会将图片等静态资源放在public文件下， /assets/这样写他会先找src下面的目录 src下面没有会自动在pulic下寻找 */}
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>韩周科技</h1>
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          { this.state.menuTreeNode }
        </Menu>
      </div>
    )
  }
}