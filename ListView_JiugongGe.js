
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
import shareData from './shareData.json';
//获取屏幕高度
var Dimensions = require('Dimensions');
var widths = Dimensions.get('window').width;
var  clunm  = 3;

marginSize =  (widths-(100*clunm))/(clunm+1);

export default class JGG extends Component {
 
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(shareData.data),
    };
  }
  static navigationOptions = {
    title:'九宫格'
  }
  render() {
    const { params } = this.props.navigation.state;
    return (
    <View>
      <Text>
        {params.haha};
      </Text>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this.rowDataView(rowData)}
        contentContainerStyle={
          styles.container
        }
      />
    </View>
     
    );
  }

  rowDataView(data){
    return(
      <View style={{width:100,height:110,marginTop:5,marginLeft:marginSize+5}}>
          <Image style={{height:80,width:80,borderWidth:0.5,borderColor:'green'}} source={{uri:data.icon}}></Image>
             <Text>{data.title}</Text> 
      </View>
     
   );
   
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    flexWrap: 'wrap',

  },

});

module.exports = JGG;
