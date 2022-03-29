const Sequelize = require('sequelize')
const MembersModel = require('./members')
const CharacteristicModel = require('./characteristics')
const MembersCharacteristicModel = require('./membersCharacteristic')
const allConfigs = require('../configs/sequelize')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Members = MembersModel(connection, Sequelize)
const Characteristics = CharacteristicModel(connection, Sequelize)
const MembersCharacteristic = MembersCharacteristicModel(connection, Sequelize, Characteristics, Members)

Members.belongsToMany(Characteristics, { through: MembersCharacteristic })
Characteristics.belongsToMany(Members, { through: MembersCharacteristic })


module.exports = {
  Members,
  Characteristics,
  MembersCharacteristic,
  Op: Sequelize.Op
}
