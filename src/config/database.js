

const msql = require("mysql2/promise");

const banco  =  msql.createPool({

    host:"localhost",
    user:"root",
    password:"SUA_SENHA",
    database: "sistema_login",
})

module.exports = db;