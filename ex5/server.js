var url = require("url") ;
var express = require('express');
var http = require("http");
var fs = require("fs");
const app = express();
http.createServer(function(request,response) {
    var pathName = url.parse(request.url).pathName ;
    console.log('Request for'+pathName+'received') ;
    fs.readFile(pathName.substr(1),function(err,data) {
        if(err)
        {
            console.log(error.stack) ;
            response.writeHead(404,{'content-Type':'text/html'}) ;
        }
        else
        {
            response.writeHead(200,{'content-Type':'text/html'}) ;
            response.write(data.toString()) ;
        }
        response.end() ;
    });
    app.post('/length', async(req, res) => {
    var count = req.body.box.split('').length;
    console.log(count);
    return res.send('Length : ' + req.body.box.split('').length);
  })
}).listen(8081) ;
console.log('Server running at 8081');