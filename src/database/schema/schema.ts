import {appSchema} from '@nozbe/watermelondb';
import UserSchema from '@database/schema/UserSchema';
import GameSchema from '@database/schema/GameSchema';
import GamePlaySchema from '@database/schema/GamePlaySchema';

const dbSchema = appSchema({
  version: 1,
  tables: [UserSchema, GameSchema, GamePlaySchema],
});

export default dbSchema;
