const Promise = require('bluebird');
Promise.promisifyAll(require("pg"));

const { pgUser, pgPass } = require('./env.js')

const initOptions = {
  promiseLib: Promise,
};

const pgp = require('pg-promise')(initOptions);

const connection = {
  user: `${pgUser}`,
  password: `${pgPass}`,
  host: 'localhost',
  database: 'SingleItemPage',
  port: 5432,
};

console.log('connected user', connection.user)

const db = pgp(connection);

const getItem = (itemId, cb) => {
  db.query(`SELECT * FROM "public"."data" WHERE "itemId" = ${itemId}`)
    .then((result) => {
      console.log('result', result)
      const item = {};
      item.altImages = [result[0].altImages];
      item.itemId = Number(itemId);
      console.log('item', item)
      return cb(null, item);
    });
};

const createItem = (req, res) => {
  let {
    altImages,
    itemId,
  } = req;

  db.query(`INSERT INTO "public"."data" (altImages, itemId)
            VALUES (${altImages}, ${itemId})`, req)
    .then(() => {
      res.status(200);
      res.end();
    })
    .catch((err) => {
      console.error('Error');
      res.status(500);
      res.end();
    });
};


module.exports = {
  getItem,
  createItem,
};