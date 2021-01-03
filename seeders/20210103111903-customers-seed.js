'use strict';

const authors = [
{
 identityNumber: '24040112130058',
 fullName: 'Budi Muhamad A',
 address: 'Kabupaten Garut',
 birthDate: new Date,
 accountNumber: 3,
 gender: 'Male'
},
{
  identityNumber: '5431246678',
  fullName: 'Rizqia Fauzia',
  address: 'Kabupaten Garut',
  birthDate: new Date,
  accountNumber: 5,
  gender: 'Female'
}
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
