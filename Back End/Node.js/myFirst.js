
const http = require('http')

http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end("You are a great programmer!!!")
}).listen(2024)
