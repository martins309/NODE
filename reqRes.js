const http = require('http')
const fs = require('fs')
const { PassThrough } = require('stream')


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

    //streams are ongoing process and the requests are read in chunks
    //you can work on the individual chunks without waiting for the entire request to load
    //buffers is how you organize the chunks
    //constructs that allow you to hold chunks to work with them before they are released 



if(url === '/message' && method === 'POST'){
    
    //req.on allows you to listen to events
    //push chunks to the end array (req body)
    const body = []
    req.on('data', (chunk) => {
        body.push(chunk)
        console.log(chunk)
    })
    //fired once done parsing the incoming request
    //the chunks are read and stored in the body
    // this is how the chunk is read


    req.on('end', () => {
        //creates new buffer and adds all the chunks from inside the body to it
        //converted the data to string because we know that the output is a string


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