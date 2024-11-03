var db = require('./db');
var passwordHash = require.main.require('password-hash/lib/password-hash');

var loginData = function(data, callback) {
  var sql = 'SELECT * FROM users WHERE username = $1';

  var param = [data.username];
  db.getData(sql, param, function(result) {
    if (result.rows?.length == 0 || result.rows == null) {
      callback(false);
    } else {
      if (passwordHash.verify(data.password, result.rows[0].password)) {
        callback(result.rows);
      } else {
        callback(false);
      }
    }
  });
}

module.exports.loginData = loginData;
