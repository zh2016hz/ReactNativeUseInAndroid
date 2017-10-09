
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
import ListViewData from './NaviBar.js';

// 引入标题
import {
  TabNavigator,
} from 'react-navigation';

import JiuGongge from './ListView_JiugongGe';
// 1. 先引入



//获取屏幕高度
var Dimensions = require('Dimensions');
var { widths, height } = Dimensions.get('window');

class PathDemo extends Component {
  static navigationOptions = {
    title: 'Welcome',
    headerBackTitle:'哈哈哈哈哈',
     //标题
     drawerLabel:'购物车',
     headerRight:(
      <View>
          <Text>right</Text>
      </View>
  ),
     //图标
     drawerIcon:({tintColor}) => {
         return (
             <Image
                 source={require('./react_native/pic/aa.jpg')}
                 style={[{width:24,height:24},{tintColor:tintColor}]}
             />
         );
        }
  };
  render() {
    const { navigate } = this.props.navigation;

    return <View>
      <Text>Hello, Navigationxxxx!</Text>
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
    headerBackTitle:'哈哈哈哈哈',
    headerTruncatedBackTitle:'你好',
  });
  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Chat with {params.user}</Text>
        <Button onPress={() => navigate('JiuGongge', { haha: '耗子' })}
          title="九宫格"
        />
      </View>
    );
  }
}
const App = StackNavigator({
  Main: { screen: PathDemo ,
    navigationOptions:({navigation}) => ({  
      tabBarLabel:'首页',  
      tabBarIcon:({focused,tintColor}) => (  
        <TabBarItem  
          tintColor={tintColor}  
          focused={focused}  
          normalImage={require('./react_native/pic/aa.jpg')}  
          selectedImage={require('./react_native/pic/aa.jpg')}  
        />  
      )  
    }),  
  },
  Profile: { screen: ChatScreen,
    navigationOptions:({navigation}) => ({  
      tabBarLabel:'我',  
      tabBarIcon:({focused,tintColor}) => (  
        <TabBarItem  
         tintColor={tintColor}  
          focused={focused}  
          normalImage={require('./react_native/pic/aa.jpg')}  
          selectedImage={require('./react_native/pic/aa.jpg')}  
        />  
      )  
    }),
  },
  JiuGongge: { screen: JiuGongge },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',

  },

});

AppRegistry.registerComponent('GAGA', () => App);
