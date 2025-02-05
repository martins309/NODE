const http = require('http')

//creating a web server that has a different response depending on the url
const server = http.createServer((req, res) => {


    //parsing the url
    const url = req.url

    //returns a response that gives the user an input form and a button that 
    // will send a new request and return 
    if(url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Message </title><head>')
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send It</button></form></body>')
        res.write("'</html>")
      }
    
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Node Page </title><head>')
    res.write('<body><h1>This is a stick up!</h1></body>')
    res.write("'</html>")
})

server.listen(3000)