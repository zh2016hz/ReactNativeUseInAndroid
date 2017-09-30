
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
  ListView,
  Button,
  TouchableHighlight,
  TouchableOpacity

} from 'react-native';
import WineData from './Wine.json';
//获取屏幕高度
var Dimensions = require('Dimensions');
var widths = Dimensions.get('window').width;

export default class ListViewJS extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(WineData),
    };
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this.rowDataView(rowData)}
      />
    );
  }
  _onclick() {
    console.log('ssssss');
  }
  rowDataView(data){
    return(
      <View style={{flexDirection:'row',width:widths,height:80,marginTop:5}}>
          <Image style={{height:80,width:80,borderWidth:0.5,borderColor:'green'}} source={{uri:data.image}}></Image>
          <View style={{marginLeft:5,marginTop:5}}>
             <Text>{data.name}</Text> 
             <Text style={{color: 'red',marginTop:5}}>价格：{data.money}元</Text> 
          </View>
          
      </View>
     
   );
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',

  },

});

module.exports = ListViewJS;
