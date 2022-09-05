// import React from 'react'
import React, {Component} from 'react';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backicon}
          onPress={() => this.props.navigation.navigate.goBack(null)}>
          {<Icon name="arrow-back" size={39} color="white"></Icon>}
        </TouchableOpacity>
        <View style={styles.dpview}>
          <Image
            style={styles.dpimage}
            source={require('./assets/dp.png')}></Image>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backicon: {
    width: '50%',
  },
  dpview: {
    width: '50%',

    right: 10,
    alignItems: 'flex-end',
  },
  dpimage: {
    width: 70,
    height: 70,
  },
});
