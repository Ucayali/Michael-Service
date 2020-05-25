/* eslint-disable linebreak-style */

const fs = require('fs');
const csvWriter = require('csv-write-stream');

var writer = csvWriter({sendHeaders: false})

writer.pipe(fs.createWriteStream('data.csv'));

const data = [];
let arr = [];

const run = function run() {
  for (let i = 1; i <= 1001; i += 1) {
    if (arr.length !== 5) {
      arr.push(`https://michaelsdcimages.s3.us-east-2.amazonaws.com/img${i}.jpg`);
    } else {
      const obj = {
        altImages: arr,
      };
      data.push(obj);
      for(var j = 0; j < 50000; j += 1) {
        writer.write(obj);
      }
      arr = [];
      arr.push(`https://michaelsdcimages.s3.us-east-2.amazonaws.com/img${i}.jpg`);
    }
  }
  arr = [];
  writer.end();
};

run();
// run();
// run();
// run();
// run();

module.exports = data;
