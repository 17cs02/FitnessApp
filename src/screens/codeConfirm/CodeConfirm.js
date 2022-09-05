import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import React, {Component, useState} from 'react';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {BackgroundImage} from 'react-native-elements/dist/config';

const CodeConfirm = props => {
  const [code, setCode] = useState({
    code: '',
  });
  return (
    <BackgroundImage
      style={{width: '100%', height: '100%', backgroundColor: '#000'}}>
      <SafeAreaView>
        <TouchableOpacity
          style={styles.backicon}
          onPress={() => props.navigation.goBack()}>
          <Icon name="arrow-back" size={39} color="#8B0000"></Icon>
        </TouchableOpacity>

        <View style={styles.container}>
          <View>
            <Image source={require('./assets/e.png')} style={styles.image} />
          </View>
          <View>
            <Text style={styles.text}>
              Check {''}
              <Text style={{color: '#8B0000'}}>{''}Your Email</Text>
            </Text>
          </View>
          <View>
            <Text style={{color: '#fff'}}>
              We have send a password recouver instruction to
            </Text>
          </View>
          <View>
            <Text style={{color: '#fff'}}>your email.</Text>
          </View>
          <View style={styles.inpView}>
            <Input
              style={{color: 'white'}}
              placeholder="Confirmation Code"
              onChangeText={text =>
                setLogin({...logininfo, email: text})
              }></Input>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('CreateNewPassword')}
              style={styles.btnemailView}>
              <Text style={{color: 'white'}}>Confirm</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.resCode}>
            <TouchableOpacity>
              <Text style={{color: '#fff'}}>
                Resend <Text style={{color: '#8B0000'}}>{''}Code</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </BackgroundImage>
  );
};

export default CodeConfirm;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignItems: 'center',
    marginTop: '10%',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 15,
  },
  inpView: {
    width: '100%',
    paddingVertical: 20,
  },
  btnemailView: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#8B0000',
    width: '100%',
    borderRadius: 5,
  },
  resCode: {
    marginTop: 20,
  },
});
