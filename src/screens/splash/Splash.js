import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Splash = props => {
  const isLoggedIn = () => {
    props.navigation.navigate('LogIn');

    // var session = await EncryptedStorage.getItem('user_session');
    // if (session == 'null' || session == null) {
    //   props.navigation.navigate('Login');
    // } else {
    //   props.navigation.navigate('Root');
    // }
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require('./assets/1.jpg')}>
      <View style={{top: 40}}>
        <Image source={require('./assets/logo.png')}></Image>
      </View>
      <View style={styles.jointext}>
        <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.text}>
          {' '}
          Join The Club
        </Text>
        <Text style={styles.text2}>Don't dream of it train for it. </Text>
      </View>
      <View style={styles.btnview}>
        <TouchableOpacity
          onPress={() => isLoggedIn()}
          style={styles.btnContainer}>
          <Text style={styles.btnstart}>GET START</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  jointext: {
    top: 80,
  },
  text2: {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    width: 350,
    lineHeight: 24,
    top: 10,
  },
  btnview: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 110,
  },
  btnstart: {
    color: 'white',
    fontSize: 18,
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    top: 30,
    height: 45,
    backgroundColor: '#8B0000',
    borderRadius: 5,
  },
});

export default Splash;
