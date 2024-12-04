import http from 'http'

const server = http.createServer((req, res) => {
    if(req.url == "/") {
        console.log("/ req")
        res.writeHead(200, "Content-Type:text/plain")
        res.end("Home page")
    } else if(req.url == "/slowpage") {
        console.log("slowpage req")
        let startTime = performance.now();
        let j =0;
        for(let i=0; i<6000000; i++) {
            j++;
        }
        res.writeHead(200, "Content-Type:text/plain")
        res.end(`"HomeSlow page ${j}"`)
        console.log(`time ${performance.now() - startTime}`)

    }
})

server.listen(8000, ()=> {console.log(`server listening on port 8000`)})