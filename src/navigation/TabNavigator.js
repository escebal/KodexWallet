import React from 'react';
import Home from '../screens/Home/Home';
import Swap from '../screens/Swap/Swap';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Image} from 'react-native';
// create a component

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator

      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      tabBarOptions={{
        activeTintColor: '#fff',
        activeBackgroundColor: '#0b94ad',
        inactiveTintColor: '#fff',
        inactiveBackgroundColor: '#010814',
      }}>
      <Tab.Screen
        name="Home"
        component={gestureHandlerRootHOC(Home)}
        options={{
          headerTitle: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/icons/dogecoin.png')}
              style={{width: 14, height: 14}}
            />
          ),
        }}
      />
      <Tab.Screen name="Swap" component={Swap} />
    </Tab.Navigator>
  );
};

//make this component available to the app
export default TabNavigator;
