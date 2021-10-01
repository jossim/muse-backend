'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let artists = await queryInterface.bulkInsert("Artists", [
      { name: "The Beatles" },
      { name: "Rihanna" },
    ]);

    let songs = await queryInterface.bulkInsert("Songs", [
      { title: "Help!", artistId: 1 },
      { title: "Work", artistId: 2 },
    ]);

    let users = await queryInterface.bulkInsert("Users", [
      { name: "Marc" },
      { name: "Diesel" },
    ]);

    let userArtists = await queryInterface.bulkInsert("UserArtists", [
      { userId: 1, artistId: 1 },
      { userId: 2, artistId: 1 },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserArtists', null, {});
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Songs', null, {});
    await queryInterface.bulkDelete('Artists', null, {});
  }
};
