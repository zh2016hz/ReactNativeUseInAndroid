
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
  TouchableHighlight,
  TouchableOpacity

} from 'react-native';


//获取屏幕高度
var Dimensions = require('Dimensions');
var { widths, height } = Dimensions.get('window');

export default class PathDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          height: 200, width: widths, justifyContent: 'center',alignItems: 'center',
        }}>
          <Image source={{ uri: 'icon' }} style={{ height: 80, width: 80 ,borderRadius:40}}></Image>
        </View>
        <TextInput style={{width:widths,height:40,borderWidth:1,borderColor:'#89d020',margin:5,} } placeholder={"请输入账号"}/>   
        <TextInput style={{width:widths,height:40,borderWidth:1,borderColor:'#89d020',margin:5,} } placeholder={"请输入密码"}/>  
        {/* <Button style={{width:200,height:40,alignItems:'center'}} title={'登录'} onPress={this._onclick}></Button>  */}
        <Button style={{width:200,height:40,alignItems:'center'}} title={'登录'} onPress={()=>this._onclick}></Button> 
        <View style= {{flexDirection: 'row',justifyContent:'space-between'} }>
          <TouchableOpacity activeOpacity ={0.2}>
          <Text style={{color:'green',marginLeft:5,marginTop:10}}>无法登录</Text>
          </TouchableOpacity>
          <Text style={{color:'green',marginLeft:5,marginTop:10}}>注册新用户</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',position:'absolute',bottom:10}}>
        <Text style={{fontSize:15}}>其他登录方式：</Text>
        <Image source={{uri:'icon3'}} style={{width:40,height:40,borderRadius:20}}/>
        <Image source={{uri:'icon7'}} style={{width:40,height:40,borderRadius:20}}/>
        <Image source={{uri:'icon8'}} style={{width:40,height:40,borderRadius:20}}/>
        </View>
      </View>
    );
  }
  _onclick(){
    console.log('ssssss');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',

  },

});

AppRegistry.registerComponent('GAGA', () => PathDemo);
