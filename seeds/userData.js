const { User } = require('../models');

const userdata =
[
  {
    "username": "Trentyn",
    "password": "password"
  },
  {
    "username": "Skylar",
    "password": "password"
  },
  {
    "username": "Colby",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;