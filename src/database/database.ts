import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from '@database/schema/schema';
import models from '@database/model/models';
import {Platform} from 'react-native';

const adapter = new SQLiteAdapter({
  schema,
  dbName: 'CoinMasterDB',
  jsi: Platform.OS === 'ios',
  onSetUpError: err => {
    console.error(err);
  },
});

// Then, make a Watermelon database from it!
const database = new Database({
  adapter,
  modelClasses: models,
});

export default database;
