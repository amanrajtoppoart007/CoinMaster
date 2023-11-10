import {Model} from '@nozbe/watermelondb';
import {date, field} from '@nozbe/watermelondb/decorators';

export default class User extends Model {
  static table = 'users';
  @field('name') name: any;
  @field('username') username: any;
  @field('password') password: any;
  @date('created_at') createdAt: number | undefined;
  @date('updated_at') updatedAt: number | undefined;
}
