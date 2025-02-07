const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><textarea name="message"></textarea><button type="submit">Send It</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            console.log("this is the chunk hoe:", chunk)
            console.log("this is  from the string method", chunk.toString())
            body.push(chunk);
        });

        req.on('end', () => {
            console.log("data transmission ended")
            if(body.length === 0) {
                console.log("aint shit here")
            }

            const parsedBody = Buffer.concat(body).toString();
            console.log('Parsed body:', parsedBody); // Debugging line to check the received data

            // Ensure the body contains data before splitting
            const message = parsedBody.split('=')[1] ? decodeURIComponent(parsedBody.split('=')[1]) : 'No message provided';

            fs.writeFileSync('message.txt', message); // Saves the extracted message

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });

        return;
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node Page</title></head>');
    res.write('<body><h1>This is a stick up!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
