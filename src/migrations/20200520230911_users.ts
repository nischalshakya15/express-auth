import * as Knex from 'knex';

const TABLE_NAME = 'user';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.specificType('id', 'bigint(10) not null primary key auto_increment');
    table.string('user_name').notNullable();
    table.string('password').notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(TABLE_NAME);
}
