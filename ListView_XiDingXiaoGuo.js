
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
import Car from './Car.json';
//获取屏幕高度
var Dimensions = require('Dimensions');
var widths = Dimensions.get('window').width;


export default class JGG extends Component {
 
  constructor(props) {
    super(props);

    var  getSectionData = (dataBlob, sectionID) => {
      return dataBlob[sectionID];
  };

  var  getRowData = (dataBlob, sectionID, rowID) => {
      return dataBlob[sectionID + ':' + rowID];
  };

   return{
       dataSource: new ListView.DataSource({
           getSectionData: getSectionData, // 获取组中数据
           getRowData: getRowData, // 获取行中的数据
           rowHasChanged: (r1, r2) => r1 !== r2,
           sectionHeaderHasChanged:(s1, s2) => s1 !== s2
       })
   }
  }
  render() {
    return (
      <View style={{  flex:1}}>
               {/*头部*/}
               <View style={{ height:64,
                backgroundColor:'orange',
                justifyContent:'center',
                alignItems:'center'}}>
                   <Text style={{color:'white', fontSize:25}}>SeeMyGo品牌</Text>
               </View>
               {/*ListView*/}
               <ListView
                   dataSource={this.state.dataSource}
                   renderRow={this.renderRow}
                   renderSectionHeader={this.renderSectionHeader}
               />
           </View>
    );
  }

  // 复杂的操作:数据请求 或者 异步操作(定时器)
  componentDidMount(){
       // 调用json数据
       this.loadDataFromJson();
   }


   loadDataFromJson(){
      // 拿到json数据
       var jsonData = Car.data;

      // 定义一些变量
       var dataBlob = {},
           sectionIDs = [],
           rowIDs = [],
           cars = [];

      // 遍历
       for(var i=0; i<jsonData.length; i++){
           // 1. 把组号放入sectionIDs数组中
           sectionIDs.push(i);

           // 2.把组中内容放入dataBlob对象中
           dataBlob[i] = jsonData[i].title

           // 3. 取出该组中所有的车
           cars = jsonData[i].cars;
           rowIDs[i] = [];

           // 4. 遍历所有的车数组
           for(var j=0; j<cars.length; j++){
               // 把行号放入rowIDs
               rowIDs[i].push(j);
               // 把每一行中的内容放入dataBlob对象中
               dataBlob[i+':'+j] = cars[j];
           }
       }
        // 更新状态
        this.setState({
          dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs)
      });
}

const styles = StyleSheet.create({
  outerViewStyle:{
    //占满窗口
      flex:1
  },

  headerViewStyle:{
      height:64,
      backgroundColor:'orange',

      justifyContent:'center',
      alignItems:'center'
  },

  rowStyle:{
      // 设置主轴的方向
      flexDirection:'row',
      // 侧轴方向居中
      alignItems:'center',
      padding:10,

      borderBottomColor:'#e8e8e8',
      borderBottomWidth:0.5
  },

  rowImageStyle:{
      width:70,
      height:70,
  },

  sectionHeaderViewStyle:{
      backgroundColor:'#e8e8e8',
      height:25,

      justifyContent:'center'
  }
});

module.exports = JGG;
