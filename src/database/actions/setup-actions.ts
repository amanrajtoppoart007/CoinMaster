import database from '@database/database';
import {UserCollection} from '@database/collections';

const setupActions = {
  init: async () => {
    await database.write(async () => {
      const params = [
        {
          name: 'Admin',
          username: 'admin',
          password: 'admin1234',
        },
        {
          name: 'Guest',
          username: 'guest',
          password: 'guest1234',
        },
      ];

      const createActions = [];
      for (const item of params) {
        createActions.push(
          UserCollection.prepareCreate(record => {
            Object.assign(record, item);
          }),
        );
      }
      await database.batch(createActions);
    });
  },
};

export default setupActions;
