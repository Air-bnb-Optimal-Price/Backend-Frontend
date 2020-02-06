const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

// various middleware
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// user made imports
const { register, login, changePassword, deleteAccount, changeUserName } = require('./libs/user/controllers')
const { ensureAuthenticated } = require('./libs/user/middleware')
const { postListing } = require('./libs/listing/controllers')

// routes 
app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));
app.get('/', function (req, res) {
  return res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
});
app.get('/ping', function (req, res, next) {
  res.json({ pong: "pong" })
})
// user routes
app.post('/user/register', register);
app.post('/user/login', login)
app.put('/user/changePass', ensureAuthenticated, changePassword)
app.delete('/user/deleteAccount', ensureAuthenticated, deleteAccount)
app.put('/user/chaneName', ensureAuthenticated, changeUserName)

const db = {
  title: "AirBNB Bestest Price",
  subTitle: "Bestest Prices Gah-Ron-Teed"
}

const getTitle = (req, res, next) => {
  return res.json({ title: db.title })
}

const getSubTitle = (req, res, next) => {
  return res.json({ subTitle: db.subTitle })
}

const putSubTitle = (req, res, next) => {
  db.subTitle = req.body.subTitle
  return res.json({ subTitle: db.subTitle })
}

const postSubTitle = (req, res, next) => {
  db.subTitle = req.body.subTitle
  return res.json({ subTitle: db.subTitle })
}

const deleteSubTitle = (req, res, next) => {
  db.subTitle = ""
  return res.json({ subTitle: db.subTitle })
}

app.get('/title', getTitle)
app.get('./subTitle', getSubTitle)
app.put('./subTitle', putSubTitle)
app.post('./postSubTitle', postSubTitle)
app.delete('./deleteSubTitle', deleteSubTitle)


// listing routes
app.post('/listing', postListing)

// catch all
app.get('/*', function (req, res) {
  return res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
});

// error handling
app.use((err, req, res, next) => {
  res.status(err.httpStatusCode || 500).json({
    msg: err.message,
  });
});

module.exports = app;