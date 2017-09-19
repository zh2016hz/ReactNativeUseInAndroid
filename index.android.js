/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { NativeModules} from 'react-native';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class PathDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ComponentSSS text="你好中国"></ComponentSSS>
        <Text  style={styles.welcome}  onPress={this.callPress.bind(this)}>
          傻大姐撒旦ssss1wwwqqw啊啊所多sss
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <View style={{height:30,width:50,backgroundColor:'red'}}></View>

        <View style={{height:30,width:50,backgroundColor:'blue'}}></View>

        <View style={{height:30,width:50,backgroundColor:'yellow'}}></View>
      </View>
    );
  }
  callPress(){
  NativeModules.MyNativeMoudle.rnCallNative("sas");
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
    justifyContent: 'center',
    alignItems: 'center',
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
