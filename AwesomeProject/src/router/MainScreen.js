/**
 * Created by lenovo on 2017/12/26.
 */
import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, FlatList,Button } from 'react-native';

export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}