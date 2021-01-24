//// CREATING YOUR OWN NODE SERVER ////

const http = require('http');


const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        
    }
    res.setHeader('content-Type', 'text/html');
    res.write('</html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello World Nigeria</h1></body>')
    res.write('</html>');
    res.end();

});

server.listen(3000);
// http.createServer(rqListener); {

// };


