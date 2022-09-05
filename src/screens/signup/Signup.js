import {
  View,
  Text,
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  document,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Input} from 'react-native-elements';
import Modal from 'react-native-modal';

const Signup = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [logininfo, setLogin] = useState({
    fullname: '',
    email: '',
    password: '',
  });
  const [userInfo, setUserInfo] = useState(false);
  return (
    <ImageBackground style={styles.imgback} source={require('./assets/3.jpg')}>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.welcome}>
            <Image source={require('./assets/logo.png')}></Image>

            <Text style={styles.weltext}> Create your Account</Text>
          </View>
          <View style={styles.inpstyle}>
            <Input
              style={{color: 'white'}}
              placeholder="Full Name"
              name="fullname"
              //
            />

            <Input
              style={{color: 'white'}}
              placeholder="Email"
              name="email"
              onChangeText={text => setLogin({...logininfo, email: text})}
            />
            <Input
              style={{color: 'white'}}
              placeholder="Password"
              name="password"
              secureTextEntry={true}
              onChangeText={text => setLogin({...logininfo, password: text})}
            />
          </View>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.forgettext}>
            <Modal
              isVisible={modalVisible}
              hasBackdrop={true}
              // backdropTransitionInTiming={1000}
              // backdropTransitionOutTiming={1000}
              //   onBackdropPress={() => {
              //     this.setState({modalVisible: false});

              style={styles.modalview}>
              <SafeAreaView style={styles.modelcontainer}>
                <View style={{alignItems: 'center'}}>
                  <Text style={{fontSize: 24, fontWeight: 'bold'}}>
                    Terms & Conditions
                  </Text>
                  <Text style={{fontSize: 18, fontWeight: '800'}}>
                    Your Agreement
                  </Text>
                </View>
                <View style={{paddingVertical: 20, width: '90%'}}>
                  <Text style={{lineHeight: 24}}>
                    By making this booking you are agreeing in full to the
                    following terms and conditions. These terms and conditions
                    are designed in order to protect both the team and client at
                    the times of dispute. -By joining, the individual agrees and
                    understands we have a non-refundable policy once the payment
                    has been sent. Once your payment has been processed, we
                    cannot refund it.-For each additional exercise you desire to
                    incorporate into your program, you are supposed to make
                    separate payments each month.-We understand your need of
                    privacy and thus all your information will remain
                    confidential.
                  </Text>
                </View>
                <View style={styles.bothbtn}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={styles.btnaccept}>
                    <Text
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                      }}>
                      Accept
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={styles.btnrej}>
                    <Text
                      style={{alignItems: 'center', justifyContent: 'center'}}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </SafeAreaView>
            </Modal>
            <Text style={{color: '#8B0000'}}>-Terms and Conditions </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.signUp()}
            style={styles.signupbtnview}>
            <View
              style={{
                // backgroundColor: 'blue',
                // width: '100%',
                // height: '100%',
                width: 200,
                height: 45,
                backgroundColor: '#8B0000',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: 5,
              }}>
              <Text style={styles.btnsignup}> Sign Up</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.socialbtnview}>
            <TouchableOpacity style={styles.slogin}>
              <Image source={require('./assets/f.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.googleSign()}
              style={styles.slogin}>
              <Image source={require('./assets/g.png')}></Image>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.signuplink}
            onPress={() => props.navigation.navigate('LogIn')}>
            <Text style={{color: 'white'}}>
              Already have an Account ?{' '}
              <Text style={{color: '#8B0000'}}>Login </Text>
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};

export default Signup;

const styles = StyleSheet.create({
  imgback: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 40,
  },
  welcome: {
    marginTop: '15%',
    alignItems: 'center',
  },
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
  signupbtnview: {
    top: 10,
  },
  btnsignup: {
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',

    fontSize: 18,
  },
  socialbtnview: {
    top: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 210,
    alignItems: 'center',
    alignContent: 'center',
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
    width: '100%',
    // height:100,
    justifyContent: 'flex-end',
    top: 30,
  },
  CheckBox: {
    width: '20%',
  },
  modelcontainer: {
    // flex: 1,
    paddingVertical: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '90%',
    borderRadius: 15,
  },
  modalview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnaccept: {
    width: 120,
    height: 50,
    backgroundColor: '#8B0000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bothbtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  btnrej: {
    width: 120,
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
