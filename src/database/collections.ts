import database from '@database/database';
import User from '@database/model/User';

const UserCollection = database.collections.get<User>('users');

export {UserCollection};
