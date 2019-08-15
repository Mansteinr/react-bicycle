import React from 'react'

export default class Child extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  componentDidMount () {
    console.log('componentDidMount')
  }
  static getDerivedStateFromProps (newProps) {
    console.log('static getDerivedStateFromProps ' + newProps.name)
    return newProps
  }
  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUnmount () {
    console.log('componentWillUnmount')
    return true
  }
  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', prevProps)
    return prevState
  }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  render () {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    )
  }
}