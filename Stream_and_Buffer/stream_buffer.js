const fs = require("fs");

const ourReadStream = fs.createReadStream(`${__dirname}/data.txt`);

// this file content is printed as Buffer. Thats why we use .toString() function to convert buffer to string.
ourReadStream.on('data', (chunk) => {
    console.log(chunk.toString());
});

//this line will be printed dirst because by default on() function works asynchronous methood.
console.log("\n\nI am printed first or last?\n\n")