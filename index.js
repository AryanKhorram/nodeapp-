var express = require('express');
const friends = require('./friends.json');
var app = express();
const http = require('http');
const hostname = 'localhost';
const port = 3000;


app.get('/', function thisFunction(request, response){
    response.send('Hello baby');
});

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/html');
    response.write(
        '<!DOCTYPE html> \n' +
        '<html lang="en"> \n' +
        '        <head> \n' +
        '               <meta charset="utf-8"> \n' +
        '               <meta http-equiv="X-UA-Compatible" content="IE=edge"> \n' +
        '               <meta name="viewport" content="width=device-width, initial-scale=1"> \n' +
        '               <meta name="description" content="Home Page"> \n' +
        '               <meta name="author" content="Carlos Arias"> \n' +
        '               <title>Netcentric Computing Home Page</title> \n' +
        '               <!-- Bootstrap core CSS --> \n' +
        //'               <link href="http://leia.cs.spu.edu/bootstrap/css/bootstrap.min.css" rel="stylesheet"> \n' +
        '       </head> \n' +
        '        <body> \n' +
        '               <div class="container" style="text-align: center"> \n' +
        '               <h1>Another Example of Node</h1><br> \n')
    var currentDate = new Date();
    response.write(
        '               <p>Current time is: ' + currentDate + '</p>'
    );
    response.write(
        '               <table class="table table-bordered table-hover"> \n' +
        '                       <thead> \n' +
        '                               <tr> \n' +
        '                                       <th scope="col">First Name</th> \n' +
        '                                       <th scope="col">Last Name</th> \n' +
        '                                       <th scope="col">Gender</th> \n' +
        '                                       <th scope="col">Phone</th> \n' +
        '                               </tr> \n' +
        '                       </thead> \n' +
        '                       <tbody> \n'
    );
    for (var key in friends) {
        for (var f in friends[key])
            response.write(
                '                               <tr> \n' +
                '                                       <td>' + friends[key][f]["firstName"] + '</td> \n' +
                '                                       <td>' + friends[key][f]["lastName"] + '</td> \n' +
                '                                       <td>' + friends[key][f]["gender"] + '</td> \n' +
                '                                       <td>' + friends[key][f]["phone"] + '</td> \n' +
                '                               </tr> \n'
            );

        response.write(
            '                       </tbody> \n' +
            '               </table> \n'
        );
        response.write(
            '       </body> \n' +
            '</html> \n'
        );
        response.end();
    }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});