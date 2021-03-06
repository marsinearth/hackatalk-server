import { Dialect, Sequelize } from 'sequelize';

import config from '../../config/config';

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    dialect: config.dialect as Dialect,
    define: config.define,
    dialectOptions: config.dialectOption,
    pool: config.pool,
    logging: false,
  },
);

if (process.env.NODE_ENV !== 'test') {
  sequelize.sync();
}

export default sequelize;
