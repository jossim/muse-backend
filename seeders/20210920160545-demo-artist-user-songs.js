'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let artists = await queryInterface.bulkInsert("Artists", [
      { name: "The Beatles" },
      { name: "Rihanna" },
    ]);

    let songs = await queryInterface.bulkInsert("Songs", [
      { title: "Help!", artistId: 7 },
      { title: "Work", artistId: 8 },
    ]);

    let users = await queryInterface.bulkInsert("Users", [
      { name: "Marc" },
      { name: "Diesel" },
    ]);

    let userArtists = await queryInterface.bulkInsert("UserArtists", [
      { userId: 7, artistId: 7 },
      { userId: 8, artistId: 8 },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserArtists', null, {});
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Songs', null, {});
    await queryInterface.bulkDelete('Artists', null, {});
  }
};
