// ════════════════════════════════════════════════════
//  数据服务器 db/server.js · 端口 3004
//  从 db.json 读取 poems 数组，提供 /api/poems 接口
// ════════════════════════════════════════════════════
var express = require('express');
var app = express();
var wy_port = 3004;

// 允许跨域（CORS）：页面即使用 file:// 直接打开，也能请求本服务器
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// 服务器只在启动时读一次 db.json，改数据后需要 Ctrl+C 重启才生效
var qfy_poems = require('./db.json').poems;

// 接口：返回 db.json 里 poems 这个数组
app.get('/api/poems', function (req, res) {
  res.json(qfy_poems);
});

app.listen(wy_port, function () {
  console.log('数据服务器已启动：http://localhost:' + wy_port + '/api/poems');
});
