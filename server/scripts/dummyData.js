/* eslint-disable linebreak-style */

const fs = require('fs');
const csvWriter = require('csv-write-stream');

var writer = csvWriter()

writer.pipe(fs.createWriteStream('data.csv'));

const data = [];
let arr = [];
let counter = 0;

const run = function run() {
  // j < 50000 for 10mil
for (let j = 0; j < 5; j += 1) {
    for (let i = 1; i <= 1001; i += 1) {
      if (arr.length !== 5) {
        arr.push(`https://michaelsdcimages.s3.us-east-2.amazonaws.com/img${i}.jpg`);
      } else {
        const obj = {
          altImages: arr,
        };
        data.push(obj);

          counter += 1;
          writer.write({altImages: arr, itemId: counter});

        arr = [];
        arr.push(`https://michaelsdcimages.s3.us-east-2.amazonaws.com/img${i}.jpg`);
      }
    }
  arr = [];
  }
  writer.end();

};

run();
// run();
// run();
// run();
// run();

module.exports = data;
