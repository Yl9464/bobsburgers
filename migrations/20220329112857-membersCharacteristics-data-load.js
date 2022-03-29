'use strict'

module.exports = {
  async up(queryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.bulkInsert('membersCharacteristics', [{
      memberId: 1,
      characteristicId: 12
    }, {
      memberId: 1,
      characteristicId: 14
    }, {
      memberId: 1,
      characteristicId: 24
    }, {
      memberId: 2,
      characteristicId: 9
    }, {
      memberId: 2,
      characteristicId: 15
    }, {
      memberId: 2,
      characteristicId: 18
    }, {
      memberId: 3,
      characteristicId: 2
    }, {
      memberId: 3,
      characteristicId: 3,
    }, {
      memberId: 3,
      characteristicId: 13
    }, {
      memberId: 4,
      characteristicId: 9
    }, {
      memberId: 4,
      characteristicId: 21
    }, {
      memberId: 4,
      characteristicId: 22
    }, {
      memberId: 5,
      characteristicId: 4
    }, {
      memberId: 5,
      characteristicId: 9
    }, {
      memberId: 5,
      characteristicId: 22
    }, {
      memberId: 6,
      characteristicId: 1
    }, {
      memberId: 6,
      characteristicId: 23
    }, {
      memberId: 6,
      characteristicId: 26
    }, {
      memberId: 7,
      characteristicId: 1
    }, {
      memberId: 7,
      characteristicId: 2
    }, {
      memberId: 7,
      characteristicId: 10
    }, {
      memberId: 8,
      characteristicId: 6
    }, {
      memberId: 8,
      characteristicId: 11
    }, {
      memberId: 8,
      characteristicId: 16
    }, {
      memberId: 9,
      characteristicId: 6
    }, {
      memberId: 9,
      characteristicId: 11
    }, {
      memberId: 9,
      characteristicId: 16
    }, {
      memberId: 10,
      characteristicId: 5
    }, {
      memberId: 10,
      characteristicId: 16
    }, {
      memberId: 10,
      characteristicId: 19
    }, {
      memberId: 11,
      characteristicId: 2
    }, {
      memberId: 11,
      characteristicId: 7
    }, {
      memberId: 11,
      characteristicId: 17
    }, {
      memberId: 11,
      characteristicId: 28
    }, {
      memberId: 12,
      characteristicId: 1
    }, {
      memberId: 12,
      characteristicId: 23
    }, {
      memberId: 12,
      characteristicId: 26
    }, {
      memberId: 13,
      characteristicId: 6
    }, {
      memberId: 13,
      characteristicId: 8
    }, {
      memberId: 13,
      characteristicId: 11
    }, {
      memberId: 14,
      characteristicId: 6
    }, {
      memberId: 14,
      characteristicId: 19
    }, {
      memberId: 14,
      characteristicId: 22
    }, {
      memberId: 15,
      characteristicId: 5
    }, {
      memberId: 15,
      characteristicId: 9
    }, {
      memberId: 15,
      characteristicId: 15
    }, {
      memberId: 16,
      characteristicId: 14
    }, {
      memberId: 16,
      characteristicId: 16
    }, {
      memberId: 16,
      characteristicId: 22
    }, {
      memberId: 17,
      characteristicId: 14
    }, {
      memberId: 17,
      characteristicId: 25
    }, {
      memberId: 17,
      characteristicId: 27
    }, {
      memberId: 18,
      characteristicId: 9
    }, {
      memberId: 18,
      characteristicId: 13
    }, {
      memberId: 18,
      characteristicId: 20
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
    return queryInterface.bulkDelete('membersCharacteristics')
  }
}
