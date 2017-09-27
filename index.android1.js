/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { NativeModules} from 'react-native';
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

var  Dimensions  =  require('Dimensions');

export default class PathDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ComponentSSS text="你好中国"></ComponentSSS>
        <Text  style={styles.welcome}  onPress={this.callPress.bind(this)}>
          傻大姐撒旦ssss1wwwqqw啊啊ajaj
        </Text>
        <Text style={styles.instructions} onPress={this.callNavigator.bind(this)}>
          To get started, edit index.android.js
        </Text>
        <TouchableOpacity onPress={this._onPressButton.bind(this)}>
        <Text style={styles.instructions} onPress={()=>this._dorequestNet()}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
        <Text style={{height:30,backgroundColor:'red',flex:1}}>第一个</Text>
       
        <Text style={{height:30,backgroundColor:'blue',flex:1}}>第二个</Text>
       
        <Text style={{height:30,backgroundColor:'yellow',flex:1}}>第三个{Dimensions.get('window').width}</Text>
        </View>
        <Image source={require('./react_native/pic/aa.jpg')} />
      </View>
    );
  }
  callPress(){
  NativeModules.MyNativeMoudle.rnCallNative("sas");
  }
  callNavigator(){

  }
  _onPressButton(){
    alert("sssssssssssss");
  }
  _dorequestNet(){
    NativeModules.MyNativeMoudle.getResult("sssss",(result,result1) => {alert(result1)}
     
    );
  }
}
class  ComponentSSS extends Component{
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
  render(){
    let display = this.state.showText ? this.props.text : ' ';
    return(
      <Text>
        {display}
      </Text>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: '#F5FCFF',
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
