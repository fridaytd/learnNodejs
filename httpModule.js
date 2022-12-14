const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`Welcome to my home page`)
    }
    else if (req.url === '/about') {
        res.end(`This is my page's short history`)
    }
    else {
        res.end(`
    <h1>Oops!!!</h1>
    <p>There are something wrong about the page that you are looking for</p>
    <p><a href="/">back home</a></p>
    `);
    }
})

server.listen(5000)