import knex from 'knex';
import * as lodash from 'lodash';

const camelCase = require('camelize');

import { config } from './config';

const knexConfig = {
  ...config.database,
  postProcessResponse: (result: any) => {
    if (lodash.isArray(result)) {
      return result.map((row) => camelCase(row));
    }
    return camelCase(result);
  }
};

export default knex(knexConfig);
