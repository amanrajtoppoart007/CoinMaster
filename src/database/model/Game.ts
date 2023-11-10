import {Model} from '@nozbe/watermelondb';
import {date, field} from '@nozbe/watermelondb/decorators';

export default class Game extends Model {
  static table = 'games';
  @field('title') title: any;
  @date('created_at') createdAt: number | undefined;
  @date('updated_at') updatedAt: number | undefined;
}
