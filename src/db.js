const sequelize = require('sequelize')
const database = new sequelize('novoteste','teste', '1234', 
{
  server: 'SQLEXPRESS01',
  dialect: 'mssql',
  host: 'localhost',
  port: '1433'
})

  database.sync()
  module.exports = database