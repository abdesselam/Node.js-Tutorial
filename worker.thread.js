const http = require('node:http');
const { Worker } = require('node:worker_threads');


const server = http.createServer((req,res)=>{
    if (req.url === '/'){
            res.writeHead(200,{'content-type':'text/plain'})
            res.end('Home page')
    }else if (req.url ==='/slow-page'){
        const worker = new Worker('./worker.js')
        worker.on('message',(j)=>{
            res.writeHead(200,{'content-type':'text/plain'})
            res.end('No-cluster page '+j)
        })

    } else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.end('Page not found')
    }
})
server.listen(3000,()=>{
    console.log('server runnig on port 3000')
})