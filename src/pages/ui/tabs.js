import React from 'react'
import './ui.less'
import {Card, message, Tabs, Icon } from 'antd'
export default class Loading extends React.Component{
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes
    }
  }

  state = {
    activeKey: '1'
  }
  
  callback = (key) => {
    message.info('Hello World ' + key,)
  }

  handlePlus = (activeKey) => {
    this.setState({
      activeKey
    })
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey)
  }

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'New Tab Pane ' + activeKey, key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  }
  render () {
    const { TabPane } = Tabs 
    return (
      <div>
        <Card title="Tab标签页" className="card-wrapper">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Tab 1" key="1"> Content of Tab Pane 1 </TabPane>
            <TabPane tab="Tab 2" key="2"> Content of Tab Pane 2 </TabPane>
            <TabPane tab="Tab 3" key="3"> Content of Tab Pane 3 </TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带图的标签页" className="card-wrapper">
          <Tabs
            defaultActiveKey="1"
            onChange={this.callback}>
            <TabPane tab={ <span><Icon type="plus" />Tab1</span> } key="1"> Content of Tab Pane 1 </TabPane>
            <TabPane tab={ <span><Icon type="edit" />Tab2</span> } key="2"> Content of Tab Pane 2 </TabPane>
            <TabPane tab={ <span><Icon type="delete" />Tab4</span> } key="3"> Content of Tab Pane 3 </TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带图的标签页" className="card-wrapper">
          <Tabs
            onChange={this.handlePlus}
            onEdit={ this.onEdit }
            activeKey={this.state.activeKey}
            type="editable-card">
            {
              this.state.panes.map(v => {
                return <TabPane tab={v.title} key={v.key}> { v.content } </TabPane>
              })
              }
          </Tabs>
        </Card>

     </div>
    )
  }
}