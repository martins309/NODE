const http = require('http')

const server = http.createServer((req, res) => {
      const url = req.url
      if(url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Message </title><head>')
        res.write('<body><form action="/message"><input type="text"><button type="submit">Send It</button></form></body>')
        res.write("'</html>")
      }
    
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Node Page </title><head>')
    res.write('<body><h1>This is a stick up!</h1></body>')
    res.write("'</html>")
})

server.listen(3000)