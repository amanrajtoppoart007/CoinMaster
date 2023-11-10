import React from 'react';
import Login from '@screens/Auth/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
type AuthNavigatorParams = {
  Login: undefined;
};

const Stack = createNativeStackNavigator<AuthNavigatorParams>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name={'Login'} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
