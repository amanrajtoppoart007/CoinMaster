import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthNavigator from '@navigation/AuthNavigator';
import AppNavigator from '@navigation/AppNavigator';
import useAuth from '@hooks/useAuth';

function App() {
  const {isLoggedIn} = useAuth();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
