var db = require('./db');

var getUser = function(data, callback) {
  var sql = "SELECT * FROM user WHERE username = $1 OR email = $2";
  var param = [data.username, data.email];
  db.getData(sql, param, function(result) {
    if (result == null || result?.length == 0) {
      callback(false);
    } else {
      callback(true);
    }
  });
}

var getAdmin = function(data, callback) {
  var sql = "SELECT * FROM admin WHERE username = $1 OR email = $2";
  var param = [data.username, data.email];
  db.getData(sql, param, function(result) {
    if (result == null || result?.length == 0) {
      callback(false);
    } else {
      callback(true);
    }
  });
}

module.exports.getUser = getUser;
module.exports.getAdmin = getAdmin;
