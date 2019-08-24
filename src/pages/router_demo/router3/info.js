import React from 'react'

export default class Info extends React.Component{
  render () {
    return (
      <div>
        this is info
        {/* mianId和父组件中的参数名一直 */}
        动态路由值：{this.props.match.params.mianId}
        </div>
    )
  }
}