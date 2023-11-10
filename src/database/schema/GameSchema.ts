import {tableSchema} from '@nozbe/watermelondb';

const GameSchema = tableSchema({
  name: 'games',
  columns: [
    {name: 'title', type: 'string'},
    {name: 'created_at', type: 'number'},
    {name: 'updated_at', type: 'number'},
  ],
});

export default GameSchema;
