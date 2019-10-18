const path = require('path');

// 文件名名称 路径
console.log(path.basename(__filename));

// 文件夹名称 路径
console.log(path.dirname(__filename));

// 文件拓展名
console.log(path.extname(__filename));

// 路径对象
console.log(path.parse(__filename));

// 连接路径
console.log(path.join(__dirname, 'test', 'hello.html'));