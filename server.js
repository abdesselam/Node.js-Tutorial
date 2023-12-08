const http = require('node:http');
const fs = require('node:fs')

const server = http.createServer((req,res)=>{
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.end(JSON.stringify({
        //   data: 'Hello World!',
        // }));
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // fs.createReadStream(__dirname+"/index.html").pipe(res);  
    // const name = 'Abdesselam'  
    // let html = fs.readFileSync('./index.html','utf-8');
    // html = html.replace('{{name}}',name)
    // res.end(html);
    if (req.url === '/'){
            res.writeHead(200,{'content-type':'text/plain'})
            res.end('Home page')
    }else if (req.url ==='/about'){
        res.writeHead(200,{'content-type':'text/plain'})
        res.end('About page')
    }else if (req.url ==='/api'){
        res.writeHead(200,{'content-type':'text/json'})
        res.end(JSON.stringify({
            name: 'api',
            data: 'data api'
        }))
    } else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.end('Page not found')
    }
})
server.listen(3000,()=>{
    console.log('server runnig on port 3000')
})