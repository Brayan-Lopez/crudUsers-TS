import { Sequelize } from "sequelize";

const sequelize = new Sequelize('sakila', 'root', 'rootmysql', {
  host: 'localhost',
  dialect:'mysql'
});

export default sequelize;