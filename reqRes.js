const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.headers, req.method)
    
    res.setHeader('Content-Type', 'text/html')
    res.write('<head><head>')
})

server.listen(3000)