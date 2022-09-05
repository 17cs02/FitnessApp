import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  BackHandler,
  Alert,
} from 'react-native';

import {Input} from 'react-native-elements';
// import EncryptedStorage from 'react-native-encrypted-storage';
// import {ActivityIndicator, Colors} from 'react-native-paper';
// import axios from 'axios';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
// import {setSession} from '../../includes/session';
// import SweetAlert from 'react-native-sweet-alert';
// import {FlatList} from 'react-native-gesture-handler';
// import {CommonActions} from '@react-navigation/routers';

const Login = props => {
  const initialState = {
    logInDetail: {
      email: '',
      password: '',
    },
    userInfo: '',
    isLoading: false,
    isButtonDisabled: false,
    isAppLoading: true,
    isGoogleSignInLoading: false,
  };
  // const signInGoogle = async () => {
  //   const {userInfo} = state;
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };
  // };

  // const [state, setState] = useState({
  //   email: '',
  //   password: '',
  //   userInfo: '',
  //   isLoading: false,
  //   isButtonDisabled: false,
  //   isAppLoading: true,
  //   isGoogleSignInLoading: false,
  // });

  const [state, setState] = useState(initialState);
  return (
    <ImageBackground style={styles.imgback} source={require('./assets/2.jpg')}>
      <SafeAreaView style={styles.container}>
        <View style={styles.welcome}>
          <Text style={styles.weltext}> WELCOME</Text>
          <Text style={{color: 'white'}}>Sign in to your Account</Text>
        </View>
        <View style={styles.inpstyle}>
          <Input
            style={{color: 'white'}}
            placeholder="Email"
            onChangeText={text => setState({...state.logInDetail, email: text})}
          />
          <Input
            style={{color: 'white'}}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text =>
              setState({...state.logInDetail, password: text})
            }
          />
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ResetPassword')}
          style={styles.forgettext}>
          <Text style={{color: '#8B0000'}}>Forget your Password ?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          //   disabled={thisstate.isButtonDisabled}
          style={[styles.loginbtnview, styles.btnlogin]}
          onPress={() => props.navigation.navigate('Home')}>
          {/* <Text  style={styles.btnlogin}> */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',

              alignSelf: 'center',
            }}>
            <Text style={{fontSize: 18, color: 'white', textAlign: 'center'}}>
              Login
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.socialbtnview}>
          <TouchableOpacity style={styles.slogin}>
            <Image source={require('./assets/f.png')}></Image>
          </TouchableOpacity>

          <View>
            <TouchableOpacity onPress={() => signIn()} style={styles.slogin}>
              <Image source={require('./assets/g.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.signuplink}
          onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={{color: 'white'}}>
            Don’t have any Account ?{' '}
            <Text style={{color: '#8B0000'}}>Signup</Text>
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  imgback: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {},
  weltext: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  inpstyle: {
    color: 'white',
    width: '90%',
  },
  forgettext: {
    width: '90%',
    alignItems: 'flex-end',
  },
  loginbtnview: {
    top: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnlogin: {
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 200,
    height: 45,
    backgroundColor: '#8B0000',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
    fontSize: 18,
  },
  socialbtnview: {
    top: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: 210,
    alignItems: 'center',
  },
  slogin: {
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 100,
    height: 45,
    backgroundColor: '#8B0000',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
    fontSize: 18,
  },
  signuplink: {
    // backgroundColor:'blue',
    alignItems: 'center',
    width: '90%',

    justifyContent: 'flex-end',
    top: 100,
  },
});
