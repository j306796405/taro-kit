import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Progress } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '@store/counter/action'

import './index.scss'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  
  config = {
    navigationBarTitleText: '首页'
  }
  
  state = {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello World!'
      }]
    }]
  }
  
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  
  componentWillUnmount () { }
  
  componentDidShow () { }
  
  componentDidHide () { }
  
  handleClick () {
    Taro.navigateTo({
      url: '/pages/list/index'
    })
  }
  
  render () {
    return (
      <View className='index-page'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
        <View onClick={this.handleClick}><Text>跳转新页面</Text></View>
        <View className='components-page'>
          <Progress percent={20} showInfo strokeWidth={2} />
          <Progress percent={80}  strokeWidth={2} active activeColor='blue' />
        </View>
      </View>
    )
  }
}

export default Index
