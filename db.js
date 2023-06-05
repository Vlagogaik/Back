const pgp = require("pg-promise")();

const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,

    {
        dialect: "postgres",
        dialectModule: require("pg"),
        host: process.env.HOST,
        port: process.env.DB_PORT,
        ssl: true,
        dialectOptions: {
            ssl: {
                require: true,
            },
        },
    }
);

//
// const cn = {
//     host: process.env.HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DATABASE,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     allowExitOnIdle: true,
// };
//
// const db = pgp(cn);

// module.exports = db;