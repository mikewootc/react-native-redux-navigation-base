import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ScreenLogin extends Component {
  static navigationOptions = {
      title: 'Login',
  };


  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

// vim: set ts=2 sw=2:
