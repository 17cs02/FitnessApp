import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Input} from 'react-native-elements';

const CreateNewPassword = props => {
  const [vInputs, setVInputs] = useState({
    password: '',
    conPass: '',
  });
  return (
    <ImageBackground
      source={require('./assets/2.jpg')}
      style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.backicon}
          onPress={() => props.navigation.goBack()}>
          {<Icon name="arrow-back" size={39} color="#8B0000"></Icon>}
        </TouchableOpacity>
        <View style={styles.resetPassView}>
          <View style={styles.heading}>
            <View>
              <Text
                style={{color: '#8B0000', fontSize: 18, fontWeight: 'bold'}}>
                Create
              </Text>
            </View>
            <View>
              <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                New Password
              </Text>
            </View>
          </View>
          <View style={{width: '90%'}}>
            <Text style={{color: 'white'}}>
              Your password must be different from the previous used password
            </Text>
          </View>
          <View style={{width: '90%', paddingTop: 20}}>
            <Input
              secureTextEntry={true}
              style={{color: 'white'}}
              placeholder="New password"
              onChangeText={text =>
                setVInputs({...vInputs, password: text})
              }></Input>
            <Input
              secureTextEntry={true}
              style={{color: 'white'}}
              placeholder="Confirm password"
              onChangeText={text =>
                setVInputs({...vInputs, conPass: text})
              }></Input>
          </View>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('LogIn')}
            style={styles.btnemailView}>
            <Text style={{color: 'white'}}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default CreateNewPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resetPassView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '60%',
  },
  heading: {
    // height: '40%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '90%',
    paddingVertical: 10,
  },
  btnemailView: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    backgroundColor: '#8B0000',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  btn: {
    backgroundColor: '#8B0000',
    width: '90%',
    borderRadius: 5,
    alignSelf: 'center',
  },
});
