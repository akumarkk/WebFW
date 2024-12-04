import http from 'http'
import {Worker} from 'worker_threads'

const server = http.createServer((req, res) => {
    if(req.url == "/") {
        console.log("/ req")
        res.writeHead(200, "Content-Type:text/plain")
        res.end("Home page")
    } else if(req.url == "/slowpage") {
        console.log("slowpage req")
        let startTime = performance.now();
        let w = new Worker('./worker.mjs');
        

        w.on("message", (data) => {
            res.writeHead(200, "Content-Type:text/plain")
            res.end(`"HomeSlow page ${data.j}"`)
            console.log(`time ${performance.now() - startTime} ms`)
        })
    }
})

server.listen(8000, ()=> {console.log(`server listening on port 8000`)})