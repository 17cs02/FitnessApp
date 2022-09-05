import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  BackHandler,
} from 'react-native';
import {TextInput, Button, nput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'react-native-image-picker';
import EncryptedStorage from 'react-native-encrypted-storage';
import axios from 'axios';
import apiUrl from '../../includes/Api';

const screen = Dimensions.get('window');

export default class UploadingVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '', // to store text input
      textMessage: false, // text input message flag
      loading: false, // manage loader
      image: '', // store image
      video: '', // store video
    };
  }
  // selectImage = async () => {
  //   ImagePicker.launchImageLibrary(
  //     {
  //       mediaType: 'photo',
  //       includeBase64: true,
  //       maxHeight: 200,
  //       maxWidth: 200,
  //     },
  //     response => {
  //       console.log(response.assets[0].uri);
  //       this.setState({image: response.assets[0].uri});
  //     },
  //   );
  // };

  selectVideo = async () => {
    ImagePicker.launchImageLibrary(
      {mediaType: 'video', includeBase64: true},
      response => {
        console.log(response);
        if (!response?.didCancel)
          this.setState({video: response?.assets[0]?.uri});
      },
    );
  };

  createNewFeed = async () => {
    this.setState({loading: true});
    var session = await EncryptedStorage.getItem('user_session');
    session = JSON.parse(session);
    const {text, video} = this.state;
    let errorFlag = false;
    if (text) {
      errorFlag = true;
      this.setState({textMessage: false});
    } else {
      errorFlag = false;
      this.setState({textMessage: true});
    }
    if (errorFlag) {
      let formData = new FormData();
      if (video) {
        formData.append('video', {
          name: 'name.mp4',
          uri: Platform.OS === 'ios' ? video.replace('file://', '') : video,
          type: 'video/mp4',
        });
      }
      formData.append('video_desc', text);
      // var base_url = 'http://aba0-202-47-37-79.ngrok.io/upload/video';
      // fetch(base_url, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //     Authorization: 'Bearer ' + session.token.token,
      //   },
      //   body: formData,
      // })
      //   .then(response => {
      //     this.setState({loading: false});
      //     console.log(response);
      //   })
      //   .catch(error => {
      //     console.log(error);
      //     this.setState({loading: false});
      //   });
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + session.token.token,
        },
      };

      axios
        .post(apiUrl + '/upload/video', formData, config)
        .then(response => {
          if (response.data.status == true) {
            this.setState({loading: false});
            alert(response.data.message);
          }
        })
        .catch(error => {
          if (error.response.status == 502) {
            alert(
              'There might be your connection problem, Please try again later!',
            );
            return false;
          }
          if (error.response.data.errors) {
            alert(error.response.data.errors[0].message);
          } else {
            alert(error.response.data.message);
            return false;
          }
        });
    } else {
      this.setState({loading: false});
    }
  };
  render() {
    return (
      <View style={styles.SplashLayout}>
        <ScrollView>
          <View style={styles.inputLayout}>
            <TextInput
              theme={{
                colors: {
                  placeholder: '#8B0000',
                  text: '#8B0000',
                  primary: '#8B0000',
                  underlineColor: 'transparent',
                  background: 'white',
                },
              }}
              label="Description"
              value={this.state.text}
              multiline={true}
              numberOfLines={5}
              onChangeText={text => this.setState({text})}
            />
            {this.state.textMessage && (
              <Text style={styles.textDanger}>{'Text is required'}</Text>
            )}
          </View>
          <View style={styles.MediaLayout}>
            {/*<View
            style={[
              styles.Media,
              {
                marginRight: 10,
                backgroundColor: this.state.image ? '#6200ee' : '#ffffff',
              },
            ]}>
            <TouchableOpacity onPress={() => this.selectImage()}>
              <Icon
                name="image-outline"
                size={50}
                color={this.state.image ? '#fff' : '#6200ee'}
              />
            </TouchableOpacity>
          </View>*/}
            <View
              style={[
                styles.Media,
                {
                  alignItems: 'center',
                  left: 15,
                  backgroundColor: this.state.video ? '#8B0000' : '#ffffff',
                },
              ]}>
              <TouchableOpacity onPress={() => this.selectVideo()}>
                <Icon
                  name="videocam-outline"
                  size={50}
                  color={this.state.video ? '#ffffff' : '#8B0000'}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputLayout}>
            <Button
              style={{backgroundColor: '#8B0000'}}
              icon="plus"
              mode="contained"
              onPress={() => this.createNewFeed()}>
              Submit
            </Button>
          </View>
        </ScrollView>
        {/* loader */}
        {this.state.loading && <Text>Loading</Text>}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  SplashLayout: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#494949',
  },
  inputLayout: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    color: '#8B0000',
    // backgroundColor: '#8B0000',
  },
  textDanger: {
    color: '#8B0000',
  },
  MediaLayout: {
    paddingHorizontal: 20,
    width: screen.width - 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#8B0000',
  },
  Media: {
    width: (screen.width - 60) / 2,
    height: (screen.width - 60) / 2,
    backgroundColor: '#8B0000',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#8B0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
