const fs = require("fs");

const ourReadStream = fs.createReadStream(`${__dirname}/data.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// ourReadStream.on("data", (chunk) => {
//     ourWriteStream.write(chunk);
// });
// this two methoods are same 
ourReadStream.pipe(ourWriteStream);
