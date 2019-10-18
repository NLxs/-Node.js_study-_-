const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // 文件路径
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

  // 拓展文件
  let extname = path.extname(filePath);
  // 
  let contentType = 'text/html';

  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'application/json';
      break;
    case '.js':
      contentType = 'image/png';
      break;
    case '.js':
      contentType = 'image/jpg';
      break;
  }
  // 读取文件
  fs.readFile(filePath, (err, content) => {
    if(err) {
      if(err.code == 'ENOENT') {
        // 页面不存在
        fs.readFile(path.join(__dirname, 'public', '404.html'),
        (err, contetn) => {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(content, 'utf8');
        });
      } else {
        // server error
        res.writeHead(500);
        res.end(`服务器错误: ${err.code}`);
      }
    } else {
      res.writeHead(200, {'Content-Type': contentType});
      res.end(content, 'utf8');
    }
  })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// if(req.url === '/') {
//   fs.readFile(path.join(__dirname, 'public', 'index.html'), 
//   (err, content) => {
//     if(err) throw err;
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end(content);
//   })
// }

// if(req.url === '/about') {
//   fs.readFile(path.join(__dirname, 'public', 'about.html'), 
//   (err, content) => {
//     if(err) throw err;
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end(content);
//   })
// }

  // if(req.url === '/api/users') {
  //   const users = [
  //     { name: 'Niko', age: 23},
  //     { name: 'S1mple', age: 23 }
  //   ];
  //   res.writeHead(200, {'Content-type':'application/json'})
  //   res.end(JSON.stringify(users));
  // }