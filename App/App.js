/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Text, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import IntroScreen from './Containers/Pages/IntroScreen';
import SignUp from './Containers/Pages/SignUp'
import SignIn from './Containers/Pages/SignIn'
import Dashboard from './Containers/Pages/Dashboard'

import ForgotPassword from './Containers/Pages/forgotPassword'
const Stack = createStackNavigator();
function MyStack() {
    return (
      <Stack.Navigator
       initialRouteName="IntroScreen"
      headerMode="none"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
      >
         <Stack.Screen
          name="IntroScreen"
          component={IntroScreen}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
        />
         <Stack.Screen
          name="forgotPassword"
          component={ForgotPassword}
        />
        

        
      </Stack.Navigator>
    );
  }
function App(props){
    return(
      <NavigationContainer><MyStack /></NavigationContainer>


    );
}





export default App;