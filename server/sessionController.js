const serverConfig = require('./serverConfig');
const { Pool } = require("pg");
const pool = new Pool(serverConfig);

const sessionController = {};

// Middleware Methods

sessionController.setCookie = (req, res, next) => {
  // console.log('are we setting the right user_id?', res.locals.user_id);
  res.cookie('test_cookie', 'test');
  res.cookie('session_id', res.locals.session_id);
  res.cookie('user_id', res.locals.user_id);
  console.log('what are our cookies?', req.cookies);
  next();
};

sessionController.startSession = (req, res, next) => {
  //return console.log('res.locals.user_id is', res.locals.user_id);
  const query = {
    name: 'create-session',
    text: 'INSERT into sessions ("usersession") values ($1);',
    values: [res.locals.session_id]
  };

  pool.query(query)
    .then(result => {
      res.status(201).send(result);
    });
};

module.exports = sessionController;
