'use strict'

module.exports = {
  async up(queryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.bulkInsert('characteristics', [{
      trait: 'Annoying'
    }, {
      trait: 'Awkward'
    }, {
      trait: 'Boy crazy'
    }, {
      trait: 'Calculated'
    }, {
      trait: 'Caring'
    }, {
      trait: 'Clueless'
    }, {
      trait: 'Clumsy'
    }, {
      trait: 'Codependent'
    }, {
      trait: 'Confident'
    }, {
      trait: 'Dancer'
    }, {
      trait: 'Dim witted'
    }, {
      trait: 'Driven'
    }, {
      trait: 'Flirtatious'
    }, {
      trait: 'Hard Worker'
    }, {
      trait: 'Hilarious'
    }, {
      trait: 'Kind'
    }, {
      trait: 'Lazy'
    }, {
      trait: 'Loud'
    }, {
      trait: 'Loyal'
    }, {
      trait: 'Outspoken'
    }, {
      trait: 'Musical'
    }, {
      trait: 'Passionate'
    }, {
      trait: 'Punchable'
    }, {
      trait: 'Punny'
    }, {
      trait: 'Reserved'
    }, {
      trait: 'Rude'
    }, {
      trait: 'Sensible'
    }, {
      trait: 'Sweet'
    },
    ])
  },

  async down(queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.bulkDelete('characteristics')
  }
}
