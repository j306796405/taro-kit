import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"
import './index.scss'

class Index extends Component {
  
  config = {
    navigationBarTitleText: '列表页'
  }
  
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  
  componentWillUnmount () { }
  
  componentDidShow () { }
  
  componentDidHide () { }
  
  handleClick () {
    Taro.navigateTo({
      url: '/pages/detail/index'
    })
  }
  
  render () {
    return (
      <View>
        <AtList>
          <AtListItem title='标题文字' onClick={this.handleClick} />
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' extraText='详细信息' />
          <AtListItem title='禁用状态' disabled extraText='详细信息' />
        </AtList>
      </View>
    )
  }
}

export default Index
