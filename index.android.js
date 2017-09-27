/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { NativeModules } from 'react-native';
import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity

} from 'react-native';
var data =
  [
    {
      icon: require("./react_native/pic/aa.jpg"),
      title: "sscac"
    },
    {
      icon: require("./react_native/pic/aa.jpg"),
      title: "ddwdwwd"
    }, {
      icon: require("./react_native/pic/aa.jpg"),
      title: "sscac"
    },
    {
      icon: require("./react_native/pic/aa.jpg"),
      title: "sscac"
    },
    {
      icon: require("./react_native/pic/aa.jpg"),
      title: "ddwdwwd"
    },

    {
      icon: require("./react_native/pic/aa.jpg"),
      title: "ddssswdwwd"
    }
  ]

  //获取屏幕高度
var Dimensions = require('Dimensions');
var  {width,height}  =   Dimensions.get('window');

var  col  =   3;
var  itemWidth = 100;
var  marginData = (width - itemWidth * col)/(col+1);
var dataJson = require('./PakageJson.json');
export default class PathDemo extends Component {
  render() {
    return (
      <View style={styles.container}>

        {this._showPakageView()}
        {/* <Text>ssssssss</Text> */}
      </View>
    );
  }
  callPress() {
    NativeModules.MyNativeMoudle.rnCallNative("sas");
  }
  callNavigator() {

  }
  _showPakageView() {
    var allImage = [];
    for (var i = 0; i < data.length; i++) {
      var icons = data[i].icon;
      var titles = data[i].title;
      allImage.push(
        <View  key={i} style={{alignItems:'center',width:itemWidth,marginLeft:marginData,marginTop:marginData}}>

          {/* <Image source = {require('./react_native/pic/aa.jpg')} style={{height:80,width:80} }></Image>   */}
          <Image source={icons} style={{ height: 80, width: itemWidth }}></Image>

          {/* <Image source={{uri: 'b'}} style={{width: 40, height: 40}} /> */}
          {/* <Image source = {require({icons})} style={{height:80,width:80} }></Image> */}

          {/* <Image source={require('./react_native/pic/k.jpg')} style={{height:80,width:80}}></Image> */}
          <Text>{titles}</Text>
        </View>);
    }
    return allImage;
  }
  _onPressButton() {
    alert("sssssssssssss");
  }
  _dorequestNet() {
    NativeModules.MyNativeMoudle.getResult("sssss", (result, result1) => { alert(result1) }

    );
  }
}
class ComponentSSS extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }
  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>
        {display}
      </Text>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#F5FCFF',
    flexWrap:'wrap',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('GAGA', () => PathDemo);
