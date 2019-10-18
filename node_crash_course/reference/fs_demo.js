const fs = require('fs');
const path = require('path');

// 创建 目录
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if(err) throw err;
//   console.log('目录创建成功');
// })

// 创建文件并写入内容
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 
//   'Hello Node.js', 
//   err => {
//   if(err) throw err;
//   console.log('文件写入成功');
//   // 添加新内容
//   fs.appendFile(
//     path.join(__dirname, '/test', 'hello.txt'),
//     'I love Node.js',
//     err => {
//       if(err) throw err;
//       console.log('文件添加新内容');
//     }
//   )
// })

// 读取文件内容
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//   if(err) throw err;
//   console.log(data);
// })

// 修改文件名
fs.rename(
  path.join(__dirname, '/test', 'helloworld.txt'),
  path.join(__dirname, '/test', 'hello.txt'),
  err => {
    if(err) throw err;
    console.log('文件名修改成功');
  }
);
