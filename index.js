'use strict';

const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');

const port = 8000;

const options = {
    key: fs.readFileSync('./ssl/ssl-key.key'),
    cert: fs.readFileSync('./ssl/ssl-crt.crt'),
};

const app = express();

const server = https.createServer(options, app).listen(port, function(){
  console.log("Express server listening on port " + port);
});

app.get('/', function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
});