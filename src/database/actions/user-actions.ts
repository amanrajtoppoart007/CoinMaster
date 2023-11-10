import {UserCollection} from '@database/collections';
import {Q} from '@nozbe/watermelondb';
import {FormikValues} from 'formik';

const userActions = {
  login: async (params: FormikValues) => {
    const users = await UserCollection.query(
      Q.where('username', params.username),
      Q.where('password', params.password),
    ).unsafeFetchRaw();
    if (users.length > 0) {
      return users[0];
    } else {
      return false;
    }
  },
};

export default userActions;
