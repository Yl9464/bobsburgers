const Members = (connection, Sequelize) => {
  return connection.define('members', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING },
    relation: { type: Sequelize.STRING },
    bestQuote: { type: Sequelize.STRING },
    characterGroup: { type: Sequelize.ENUM('The Belchers', 'The Pestos', 'Wagstaff Students', 'Minor Characters') }
  }, { paranoid: true })
}

module.exports = Members

