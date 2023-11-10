import {tableSchema} from '@nozbe/watermelondb';

const GamePlaySchema = tableSchema({
  name: 'game_play',
  columns: [
    {name: 'game_id', type: 'string'},
    {name: 'user_id', type: 'string'},
    {name: 'score', type: 'number'},
    {name: 'created_at', type: 'number'},
    {name: 'updated_at', type: 'number'},
  ],
});

export default GamePlaySchema;
