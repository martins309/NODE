const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.headers, req.method)
    
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>This is a page that i wrote in node</title><head>')
    res.write('<body></body>')
    res.write("'</html>")
})

server.listen(3000)