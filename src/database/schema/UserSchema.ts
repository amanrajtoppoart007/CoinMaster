import {tableSchema} from '@nozbe/watermelondb';

const UserSchema = tableSchema({
  name: 'users',
  columns: [
    {name: 'name', type: 'string'},
    {name: 'username', type: 'string'},
    {name: 'password', type: 'string'},
    {name: 'created_at', type: 'number'},
    {name: 'updated_at', type: 'number'},
  ],
});

export default UserSchema;
