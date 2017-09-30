
import { NativeModules } from 'react-native';
import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity

} from 'react-native';
import LunDataJson from './ImageData.json'
var Dimensions = require('Dimensions');
var { widthss, height } = Dimensions.get('window');

//获取屏幕高度
var Dimensions = require('Dimensions');
var { widths, height } = Dimensions.get('window');
var pp = 1000;
export default class Lunbo extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 0 }

  }

  render() {
    return (
      <View style={{ marginTop: 20 }}>

        <ScrollView
          ref="scroll"
          horizontal={true}
          //隐藏水平滚动tiao
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}  // 自动 分页 支持两端
          //当一帧结束
          onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
          //开始拖拽
          onScrollBeginDrag={this.onScrollBeginDrag}
          // 停止拖
          onScrollEndDrag={this.onScrollEndDrag()}
        >
          {this._itemView()}
        </ScrollView>

        <View style={{ width: Dimensions.get('window').width, height: 60, backgroundColor: 'rgba(0,0,0,0.2)', position: 'absolute', bottom: 0, flexDirection: 'row', alignItems: 'center' }}>
          {this._indicator()}
        </View>
        <Text>{this.state.currentPage}</Text>
      </View>
    );
  }
  /**
   * 开始脱
   */
  onScrollBeginDrag() {
    // // 停止计时器
    // this.timer && clearInterval(this.timer);
  }
  onScrollEndDrag() {
    // this.timer = setInterval(() => {
    //   console.log('把一个定时器的引用挂在this上');
    //   // 设置起始点
    //   var startPage = 0;
    //   //判断  
    //   if ((this.state.currentPage + 1) >= LunDataJson.data.length) {
    //     startPage = 0;
    //   } else {
    //     startPage = this.state.currentPage + 1;
    //   }
    //   // 更新状态
    //   this.setState({ currentPage: startPage });
    //   // 滚动
    //   var offset = startPage * Dimensions.get('window').width;
    //   this.refs.scroll.scrollResponderScrollTo({ x: offset, y: 0, animated: true });


    // }, 500);
  }
  _itemView() {
    var reArr = [];
    var data = LunDataJson.data;
    for (let i = 0; i < data.length; i++) {
      reArr.push(
        <Image key={i} source={{ uri: data[i].img }} style={{ height: 200, width: Dimensions.get('window').width }}></Image>
      );
    }

    return reArr;
  }
  _indicator() {
    var arr = [];
    for (let j = 0; j < LunDataJson.data.length; j++) {
      // 判断颜色
      style = (j == this.state.currentPage) ? { color: 'red' } : { color: 'yellow' };

      arr.push(
        <Text key={j} style={[{ fontSize: 25, marginLeft: 10 }, style]}>&bull;</Text>
      );
    }
    return arr;
  }
  onAnimationEnd(e) {
    // 当前偏移量
    var offsets = e.nativeEvent.contentOffset.x;
    // 当前页数
    var page = Math.floor(offsets / Dimensions.get('window').width);
    // console.log(page);   
    this.setState({ currentPage: page });
  }

  componentDidMount() {
    var scrollView = this.refs.scroll;
    //添加定时器
    this.timer = setInterval(() => {
      console.log('把一个定时器的引用挂在this上');
      // 设置起始点
      var startPage = 0;
      //判断  
      if ((this.state.currentPage + 1) >= LunDataJson.data.length) {
        startPage = 0;
      } else {
        startPage = this.state.currentPage + 1;
      }
      // 更新状态
      this.setState({ currentPage: startPage });
      // 滚动
      var offset = startPage * Dimensions.get('window').width;
      scrollView.scrollResponderScrollTo({ x: offset, y: 0, animated: true });


    }, 1500);
    // this.timer = setTimeout(
    //   () => { console.log('把一个定时器的引用挂在this上'); },
    //   500
    // );



  }
  componentWillUnmount() {
    // 请注意Un"m"ount的m是小写

    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearInterval(this.timer);
    // clearTimeout
  }
}

const styles = StyleSheet.create({
  container: {
  },

});

module.exports = Lunbo;
