const http = require('http')
const fs = require('fs')


//creating a web server that has a different response depending on the url
const server = http.createServer((req, res) => {


    //parsing the url and the method.
    const url = req.url
    const method = req.method
    //returns a response that gives the user an input form and a button that 
    // will send a new request and return 
    //return will quit the function
    if(url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Message </title><head>')
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send It</button></form></body>')
        res.write("'</html>")
        return res.end()
    }
    //when the user submits their information "POST", it will write and file on the server
    //check out res.writeHead()
if(url === '/message' && method === 'POST'){
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