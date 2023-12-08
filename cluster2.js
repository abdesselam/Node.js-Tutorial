const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').availableParallelism();
const process = require('node:process');

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
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

  console.log(`Worker ${process.pid} started`);
}