const MembersCharacteristic = (connection, Sequelize, Characteristics, Members) => {
  return connection.define('membersCharacteristics', {
    memberId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: Members, key: 'id' } },
    characteristicId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: Characteristics, key: 'id' } }

  }, { paranoid: true })
}

module.exports = MembersCharacteristic

