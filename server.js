
var express = require('express');
var pg = require('pg');
var app = express();
var fs = require('fs');

app.get('/video', function (req, res) {
  var time = new Date();
  var videoName = req.query.name;

  console.log("--------------------------------------------------")
  console.log(videoName)
  console.log("-------点击查询下载" + time.getFullYear() + "/" + time.getMonth() + "/" + time.getDate() + "/" + time.getHours() + "/" + time.getMinutes() + "/" + time.getSeconds() + "-------");
  res.writeHead(200, {'Content-Type': 'video/mp4'});
  var rs = fs.createReadStream('D:\\MYCODE\\video\\'+videoName + '.mp4');
  rs.pipe(res);

  rs.on('end', function () {
    res.end();
    console.log('end call');
  });
});

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);

});