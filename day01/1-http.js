//1-搭建http服务器

//引入http和fs核心模块
const http = require('http');
const fs = require('fs');

//使用 http.createServer() 方法创建一个 Web 服务器,返回一个 Server 实例
http.createServer((request, response) => {
  const {url, method} = request;
  if(url === '/' && method === 'GET'){
    fs.readFile('index.html',(err, data) => {
      if(err){
        // 设置响应头
        response.writeHead(500, {
          'Content-Type': 'text/plain;charset=utf-8'
        })
        // 设置响应数据
        // response.end：完事儿了哦，客户端可以把内容呈现给用户了
        response.end('500 啊哦～服务器挂了呢');
      }
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.end(data);
    })
  }else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/plain;charset=utf-8');
    response.end('404 找不到资源😯噢');
  }
}).listen(3000, () => {
  console.log('服务器启动成功了哦，可以通过 http://127.0.0.1:3000/ 访问');
})
