const Characteristics = (connection, Sequelize) => {
  return connection.define('characteristics', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    trait: { type: Sequelize.STRING }
  }, { paranoid: true })
}

module.exports = Characteristics
