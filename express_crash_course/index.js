const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();

// 初始化中间件
// app.use(logger);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 两个路由谁在前面先显示谁
// home
app.get('/', (req, res)=> res.render('index', {
  title: 'Member App',
  members
}));

// 静态资源
app.use(express.static(path.join(__dirname, 'public')));

// Members API 路由
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server started on port ${PORT}`));
