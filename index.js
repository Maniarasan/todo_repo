'use strict';

var express = require('express');
var mongoose = require('mongoose');
var Todo = require('./app/models/todo');
var config = require('./configurations');
mongoose.connect('mongodb://localhost:27017/todoDB');

var app = express();

// var sampleSaveData = {
//   title: 'Best todo title'
// };

app.get('/', function (req, res) {
  res.json(config.sample_data);
});

app.post(config.save_todo_url, function (req, res) {
  var data = req.data;
  var todo = new Todo(data);
  todo.save(function (err) {
    if (err) return;
    console.log('your information is saved');
  });
});

app.listen(3000);
