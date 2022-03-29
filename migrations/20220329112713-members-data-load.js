'use strict'

module.exports = {
  async up(queryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.bulkInsert('members', [{
      name: 'Bob Belcher',
      relation: 'Father',
      bestQuote: 'You are my family and I love you but you are all terrible...',
      characterGroup: 'The Belchers'
    },
    {
      name: 'Linda Belcher',
      relation: 'Mother',
      bestQuote: 'When I die I want you to cremate me and throw me in Tom Sellecks face.',
      characterGroup: 'The Belchers'
    },
    {
      name: 'Tina Belcher',
      relation: 'Eldest Daughter',
      bestQuote: 'Your ass is grass and I am going to mow it.',
      characterGroup: 'The Belchers'
    },
    {
      name: 'Gene Belcher',
      relation: 'Son',
      bestQuote: 'Would you rather have a lifetime of regret or an afternoon of mild disappointment?',
      characterGroup: 'The Belchers'
    },
    {
      name: 'Louise Belcher',
      relation: 'Younger Daughter',
      bestQuote: 'You could sell your soul. I did and look at me!',
      characterGroup: 'The Belchers'
    },
    {
      name: 'Jimmy Poplopovich',
      relation: 'Bobs nemisis',
      bestQuote: 'What are they writing? An article on guys with mustaches you wanna punch?',
      characterGroup: 'The Pestos'
    },
    {
      name: 'Jimmy Jr',
      relation: 'Tinas crush',
      bestQuote: 'I dont need speech therapy dad! You need dance therapy!',
      characterGroup: 'The Pestos'
    },
    {
      name: 'Ollie',
      relation: 'Pesto Twins',
      bestQuote: 'We switched underware!',
      characterGroup: 'The Pestos'
    },
    {
      name: 'Andy',
      relation: 'Pesto Twins',
      bestQuote: 'shhh Ollie, that was supposed to be a secret!',
      characterGroup: 'The Pestos'
    },
    {
      name: 'Regular Sized Rudy',
      relation: 'Asthmatic student',
      bestQuote: 'Fun hurts my lungs!',
      characterGroup: 'Wagstaff Students'
    },
    {
      name: 'Alex Papasian',
      relation: 'Genes BFF',
      bestQuote: 'It is a big plate of farts.',
      characterGroup: 'Wagstaff Students'
    },
    {
      name: 'Tammy Larsen',
      relation: 'Mean Girl',
      bestQuote: 'Dont be a boob punch.',
      characterGroup: 'Wagstaff Students'
    },
    {
      name: 'Jocelyn',
      relation: 'Tammys friend',
      bestQuote: 'They are just like Mario and Luigi. So in love.',
      characterGroup: 'Wagstaff Students'
    },
    {
      name: 'Zeke',
      relation: 'Jimmy Jrs BFF',
      bestQuote: 'This will always be remembered- until people forget.',
      characterGroup: 'Wagstaff Students'
    },
    {
      name: 'Nat Kinkle',
      relation: 'Limo Driver',
      bestQuote: 'I know the owner. I saved his life after I hit him with my car.',
      characterGroup: 'Minor Characters'
    },
    {
      name: 'Mort',
      relation: 'Town mortitian',
      bestQuote: 'Pretending to look it up... wishing I did not come in here today',
      characterGroup: 'Minor Characters'
    },
    {
      name: 'Mike Wobbles',
      relation: 'Mailman',
      bestQuote: 'Im not a billionaire but I am rich in mail.',
      characterGroup: 'Minor Characters'
    },
    {
      name: 'Gretchen',
      relation: 'Hair dresser',
      bestQuote: 'Do you have an MBA Linda? Because you are all up in my business!',
      characterGroup: 'Minor Characters'
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
    return queryInterface.bulkDelete('members')
  }
}
