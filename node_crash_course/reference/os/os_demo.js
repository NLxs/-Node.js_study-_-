const os = require('os');

// 平台
console.log(os.platform());

// CPU 架构
console.log(os.arch());

// CPU Core 信息
console.log(os.cpus());

// 剩余容量
console.log(os.freemem());

// 总内存
console.log(os.totalmem());

// 根目录
console.log(os.homedir());

// 更新时间
console.log(os.uptime());