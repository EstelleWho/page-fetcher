const request = require('request');
const fs = require('fs');

const filePath = process.argv[3];
const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  }


  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  });

});