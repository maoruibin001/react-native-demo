/**
 * Created by lenovo on 2017/12/26.
 */
import React, { Component } from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Image,
  ImageBackground,
  TouchableHighlight,
  TouchableNativeFeedback,
  Animated,

} from 'react-native';
export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aniStart: new Animated.Value(1),
    }
  }
  static navigationOptions = {
    title: 'Welcome22',
  };
  _onPress() {
    const { navigate } = this.props.navigation;
   navigate('Main', {
   })
  }
  fade() {
    if (JSON.stringify(this.state.aniStart) === '0') {
      Animated.timing(                            // 随时间变化而执行的动画类型
        this.state.aniStart,                      // 动画中的变量值
        {
          toValue: 1,                             // 透明度最终变为1，即完全不透明
          duration: 2000
        }
      ).start();
    } else {
      Animated.timing(                            // 随时间变化而执行的动画类型
        this.state.aniStart,                      // 动画中的变量值
        {
          toValue: 0,                             // 透明度最终变为1，即完全不透明
          duration: 2000
        }
      ).start();
    }

  }
  render() {
    return (
    <View>
      <Button title="hello world" onPress={this.fade.bind(this)}/>
      <Animated.View                            // 可动画化的视图组件
        style={{
          opacity: this.state.aniStart,          // 将透明度指定为动画变量值
        }}>
        <Text>hello world</Text>
      </Animated.View>
    </View>

    );
  }
}