const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

// Import Controllers

const controller = require('./controller.js');
const sessionController = require('./sessionController.js');
const snippetController = require('./snippetController.js');

// Blanket Calls

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

// GET Endpoints

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./index.html'));
});

app.get('/build/bundle.js', (req, res) => {
  res.sendFile(path.resolve('./build/bundle.js'));
});

app.get('/gettags', snippetController.getAllUserTags);

app.get('/getsnippetsbytag', snippetController.getSnippetIdsByTag, snippetController.getSnippetsBySnippetIds);

app.get('/deletesnippetbyid', snippetController.deleteSnippet);

// POST Endpoints
// (req, res, next) => {
// return console.log('req.body before verifyUser is'

app.post('/login', controller.verifyUser, sessionController.setCookie, sessionController.startSession);

app.post('/signup', controller.createUser, sessionController.setCookie, sessionController.startSession);

app.post('/createsnippet', snippetController.createSnippet, snippetController.createTags);

// Server Port

app.listen(3000, () => console.log('Listening on Port: 3000 .-.'));