import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {Component, useState} from 'react';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {BackgroundImage} from 'react-native-elements/dist/config';

const ResetPassword = props => {
  const [logininfo, setLogin] = useState({
    email: '',
  });
  return (
    <BackgroundImage
      source={require('./assets/2.jpg')}
      style={{width: '100%', height: '100%'}}>
      <SafeAreaView>
        <TouchableOpacity
          style={styles.backicon}
          onPress={() => props.navigation.goBack()}>
          <Icon name="arrow-back" size={39} color="#8B0000"></Icon>
        </TouchableOpacity>
        <View style={styles.resetmainView}>
          <View style={styles.resetHeading}>
            <View>
              <Text
                style={{color: '#8B0000', fontWeight: 'bold', fontSize: 20}}>
                Reset{''}
              </Text>
            </View>
            <View>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                {''} Password
              </Text>
            </View>
          </View>
          <View style={{width: '90%'}}>
            <Text style={{lineHeight: 18, color: 'white'}}>
              A password reset email is a message sent to a user that has
              problems logging into their customer portal account. The email
              contains their email or login information and a link that
              redirects them to a secure page where they can change their
              password A password reset email can be prompted by a user who has
              trouble logging in and chooses to “change your password”
            </Text>
          </View>
          <View style={styles.inpView}>
            <Input
              style={{color: 'white'}}
              placeholder="Your Email"
              onChangeText={text =>
                setLogin({...logininfo, email: text})
              }></Input>
          </View>
          <View style={styles.btnViewMain}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('CodeConfirm')}
              style={styles.btnemailView}>
              <Text style={{color: 'white'}}>Send Instruction</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </BackgroundImage>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resetmainView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  resetHeading: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '90%',
    paddingBottom: 10,
  },
  inpView: {
    width: '90%',
    paddingVertical: 20,
  },
  btnemailView: {
    width: 300,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#8B0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnViewMain: {
    paddingTop: 40,
  },
});
