import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const BottomTab = () => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        paddingVertical: 20,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        height: 30,
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
        backgroundColor: '#000000',
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          width: '80%',
          backgroundColor: 'blue',

          alignContent: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Signup')}
          style={{justifyContent: 'center', alignContent: 'center'}}>
          <Image
            style={{tintColor: 'white'}}
            source={require('./assets/home.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center', alignContent: 'center'}}>
          <Image source={require('./assets/noti.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center', alignContent: 'center'}}>
          <Image source={require('./assets/profile.png')}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// wo wala component kholo TABNAV wala

export default BottomTab;

const styles = StyleSheet.create({});
