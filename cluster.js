const cluster = require('cluster');
const os = require('os');
const http = require('node:http');



const cpus = os.cpus().length;
console.log('cpus--->',cpus) 
 if (cluster.isPrimary){
    cluster.fork();
    cluster.fork();
 }else{
    const server = http.createServer((req,res)=>{
        if (req.url === '/'){
                res.writeHead(200,{'content-type':'text/plain'})
                res.end('Home page')
        }else if (req.url ==='/slow-page'){
            for(let i = 1; i<=8000000000;i++){}
            res.writeHead(200,{'content-type':'text/plain'})
            res.end('No-cluster page')
        } else{
            res.writeHead(404,{'content-type':'text/plain'})
            res.end('Page not found')
        }
    })
    server.listen(3000,()=>{
        console.log('server runnig on port 3000')
    })
 }

