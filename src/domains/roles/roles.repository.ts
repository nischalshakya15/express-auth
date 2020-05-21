import * as db from '../../utils/db';

const TABLE_NAME = 'users_roles';

export async function fetchById(id: number) {
  db.connection().select('*').where({ id });
}
