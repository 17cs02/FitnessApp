import React, {useEffect, useContext} from 'react';
import Splash from '../screens/splash/Splash';
import Login from '../screens/login/Login';
import ResetPassword from '../screens/ResetPassword/ResetPassword';

import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../screens/signup/Signup';
import CodeConfirm from '../screens/codeConfirm/CodeConfirm';
import CreateNewPassword from '../screens/CreateNewpass/CreateNewPassword';
import Home from '../screens/home/Home';
const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LogIn"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CodeConfirm"
        component={CodeConfirm}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateNewPassword"
        component={CreateNewPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
