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
      </View>
    );
  }
  callPress(){
  NativeModules.MyNativeMoudle.rnCallNative("sas");
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
