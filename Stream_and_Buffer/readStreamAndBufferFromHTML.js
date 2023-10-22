const http = require('http');
const fs = require("fs");
const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(`${__dirname}/form.html`, (err, html) => {
            res.write(html);
            res.end();
        });
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('stream finished');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.write('Thank you for submitting');
            res.end();
        });
    } else {
        res.write('404 Not found');
        res.end();
    }
});

server.listen(PORT);

console.log(`server is created on: http://localhost:${PORT}`);