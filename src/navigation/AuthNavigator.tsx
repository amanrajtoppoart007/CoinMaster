import React from 'react';
import SetUp from '@screens/Auth/SetUp';
import Login from '@screens/Auth/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
type AuthNavigatorParams = {
  SetUp: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<AuthNavigatorParams>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
      initialRouteName={'SetUp'}>
      <Stack.Screen name={'SetUp'} component={SetUp} />
      <Stack.Screen name={'Login'} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
