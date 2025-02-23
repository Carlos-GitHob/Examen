const {Sequelize} =  require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.MYSQL_DB_NAME, process.env.MYSQL_USER, 
    process.env.MYSQL_PASS, {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_DB_PORT,
        dialect: "mysql",
        logging: false,
    }
);

module.exports = sequelize;