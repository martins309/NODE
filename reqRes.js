const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {


    const url = req.url
    const method = req.method
    if(url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Message </title><head>')
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send It</button></form></body>')
        res.write("'</html>")
        return res.end()
    }



if(url === '/message' && method === 'POST'){
    
    const body = []
    req.on('data', (chunk) => {
        console.log(chunk)
        body.push(chunk)
    })
    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString()
        console.log(parsedBody)
    })

    fs.writeFileSync('message.txt', "Lookat me")
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
}
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Node Page </title><head>')
    res.write('<body><h1>This is a stick up!</h1></body>')
    res.write("'</html>")
})

server.listen(3000)