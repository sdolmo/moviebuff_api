var mysql = require('mysql');
var connection = mysql.createPool({
  host: 'us-cdbr-iron-east-03.cleardb.net',
  user: 'be1425ce243e0a',
  password: '25debf5a',
  database: 'heroku_d399dc57a8d6b87'
});

module.exports = connection;
