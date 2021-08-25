const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('learn about us')
    }
    res.end(`
    <h1>Ooops</h1>
    <p> you're fucked</p>
    `)
})

server.listen(5000)