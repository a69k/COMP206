const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 420;

const server = http.createServer((req, res) => {
let path = '.'; 

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  console.log(req.url, req.method);

  switch (req.url) {
    case '/':
      path += '/index.html';
      break;
    case '/s1':
      path += '/s1.html';
      break;
    default:
      path += '/404.html';
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
