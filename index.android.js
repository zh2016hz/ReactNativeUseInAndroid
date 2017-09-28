
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
import LunBotu from './Lunbotu.js';

//获取屏幕高度
var Dimensions = require('Dimensions');
var { widths, height } = Dimensions.get('window');

export default class PathDemo extends Component {
  render() {
    return (
     <LunBotu/>
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
