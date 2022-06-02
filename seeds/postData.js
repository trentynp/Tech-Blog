const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Games",
    "postContent": "Xbox is awesome!",
    "userId": 1
  },
  {
    "postTitle": "Animals",
    "postContent": "Horses love hay.",
    "userId": 2
  },
  {
    "postTitle": "Listen",
    "postContent": "Music is a great way to pass time.",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
© 2022 GitHub, Inc.
Terms
Privacy
Security
