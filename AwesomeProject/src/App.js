import React, {Component} from 'react';
import {SectionList, StyleSheet, Text, View, FlatList, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';
import MainScreen from './router/MainScreen';
import ProfileScreen from './router/Profile';

const App = StackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      gesturesEnabled: true

    },

  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerTitle: '详情',
      headerStyle: {
        backgroundColor: 'red'
      },
      headerRight: (
        <Text>
          返回
        </Text>
      ),

      gesturesEnabled: true,
      gestureResponseDistance: 'horizontal',
      headerTitleStyle: {
        alignSelf: 'center'
      }
      // headerBackTitle:null,
    }
  },
});


export default App;