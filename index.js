/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {DatabaseProvider} from '@nozbe/watermelondb/DatabaseProvider';
import {store, persistor} from '@state/store';
import database from '@database/database';
const Main = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <DatabaseProvider database={database}>
          <App />
        </DatabaseProvider>
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
