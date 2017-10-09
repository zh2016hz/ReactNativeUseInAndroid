
import { NativeModules } from 'react-native';
import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import {
  AppRegistry,;
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity

} from 'react-native';
import ListViewData from './NaviBar.js';

// // 引入标题
// import {
//   StackNavigator,
// } from 'react-navigation';

import  JiuGongge  from './ListView_JiugongGe';

//获取屏幕高度
var Dimensions = require('Dimensions');
var { widths, height } = Dimensions.get('window');

class PathDemo extends Component {
  static navigationOptions = {
    title: 'Welcome',
     //标题
     drawerLabel:'购物车',
     //图标
     drawerIcon:({tintColor}) => {
         return (
             <Image
                 source={require('../react_native/pic/aa.jpg')}
                 style={[{width:24,height:24},{tintColor:tintColor}]}
             />
         );
        }
  };
  render() {
    const { navigate } = this.props.navigation;

    return <View>
      <Text>Hello, Navigation!</Text>
      <Button
        onPress={() => navigate('Profile', { user: 'Lucy' })}
        title="Chat with Lucy"
      />
    </View>;
  }

}


class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    
    return (
      <View>
        <Text>Chat with {params.user}</Text>
        <Button onPress={()=>navigate('JiuGongge',{haha:'耗子'})}
          title= "九宫格"
          />
      </View>
    );
  }
}

const App = StackNavigator({
  Main: { screen: PathDemo },
  Profile: { screen: ChatScreen },
  JiuGongge:{screen : JiuGongge},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',

  },

});

AppRegistry.registerComponent('GAGA', () => App);
