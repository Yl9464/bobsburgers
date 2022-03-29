/* eslint-disable max-len */
'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('members', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING },
      relation: { type: Sequelize.STRING },
      bestQuote: { type: Sequelize.STRING },
      characterGroup: { type: Sequelize.ENUM('The Belchers', 'The Pestos', 'Wagstaff Students', 'Minor Characters') },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })
    await queryInterface.createTable('characteristics', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      trait: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })

    await queryInterface.createTable('membersCharacteristics', {
      memberId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: 'members', key: 'id' } },
      characteristicId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: 'characteristics', key: 'id' } },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })
  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('members', 'characteristics', 'membersCharacteristics')
  }
}

