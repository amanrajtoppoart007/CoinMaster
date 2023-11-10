import {Model} from '@nozbe/watermelondb';
import {date, field} from '@nozbe/watermelondb/decorators';

export default class GamePlay extends Model {
  static table = 'game_play';
  @field('game_id') gameId: any;
  @field('user_id') userId: any;
  @field('score') score: any;
  @date('created_at') createdAt: number | undefined;
  @date('updated_at') updatedAt: number | undefined;
}
