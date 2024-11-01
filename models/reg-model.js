var db = require('./db');
var passwordHash = require('password-hash');

var validateUser = function(data, callback) {
  var sql = "INSERT INTO user (name, username, email, phone, password, address, image) VALUES ($1, $2, $3, $4, $5, $6, $7)";

  var param = [data.name, data.username, data.email, data.phone, passwordHash.generate(data.password), data.address, data.image];
  db.insertData(sql, param, function(result) {
    if (result == null || result?.length == 0) {
      callback(false);
    } else {
      callback(true);
    }
  });
}

module.exports.validateUser = validateUser;
