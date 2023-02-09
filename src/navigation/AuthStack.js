import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Login from '../screens/Login/Login';
import Home from '../screens/Home/Home';
import Swap from '../screens/Swap/Swap';
import TabNavigator from './TabNavigator';
// create a component

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tabs">{() => <TabNavigator />}</Stack.Screen>
    </Stack.Navigator>
  );
};

//make this component available to the app
export default AuthStack;
