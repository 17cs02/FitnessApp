import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation';
import {View} from 'react-native';
import Edit from './src/screens/Edit/Edit';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    // <View>
    //   <Edit />
    // </View>
  );
};
export default App;
