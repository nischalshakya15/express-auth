import knex from 'knex';

import { config } from './config';

const knexConfig = {
  ...config.database
};

export default knex(knexConfig);
