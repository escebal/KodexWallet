import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AuthStack from './src/navigation/AuthStack.js';

function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default App;
