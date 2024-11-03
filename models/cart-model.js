var db = require('./db');

module.exports = {
  addtocart: function(data, callback) {
    var sql = 'SELECT * FROM lost WHERE id = $1';
    var param = [data.id];
    db.getData(sql, param, function(result) {
      if (result.rows?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result.rows);
      }
    });
  }
};
