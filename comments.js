// Create web server for handling comments
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json

var fs = require('fs');

// Load the comments from the file
var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));