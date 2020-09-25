var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');

var db = mongo.connect('mongodb://localhost/Test', function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to ' + db, ' + ', response);
  }
});

var app = express();
app.use(bodyParser());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

var Schema = mongo.Schema;

var UsersSchema = new Schema(
  {
    name: { type: String },
    dob: { type: String },
    country: { type: String },
  },
  { versionKey: false }
);
var MobileEntrySchema = new Schema({
  countryCode: { type: String },
  mobile: { type: String },
});

var model = mongo.model('users', UsersSchema, 'users');
var mobileEntryModel = mongo.model(
  'mobileentry',
  MobileEntrySchema,
  'mobileentry'
);

app.post('/api/SaveUser', function (req, res) {
  var mod = new model(req.body);
  mod.save(function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send({ data: 'Record has been Inserted..!!' });
    }
  });
});

app.post('/api/MobileEntry', function (req, res) {
  console.log(req.body);
  var mod = new mobileEntryModel(req.body);
  console.log(mod);
  mod.save(function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send({ data: 'Record has been Inserted..!!' });
    }
  });
});

app.get('/api/getUsers', function (req, res) {
  console.log('hi');
  model.find({}, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
app.get('/api/getMobiles', function (req, res) {
  mobileEntryModel.find({}, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
