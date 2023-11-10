import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '@screens/Home';
import PlayGame from '@screens/PlayGame';
import History from '@screens/History';
import Result from '@screens/Result';
type AuthNavigatorParams = {
  Home: undefined;
  PlayGame: undefined;
  History: undefined;
  Result: undefined;
};

const Stack = createNativeStackNavigator<AuthNavigatorParams>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'PlayGame'} component={PlayGame} />
      <Stack.Screen name={'History'} component={History} />
      <Stack.Screen name={'Result'} component={Result} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
