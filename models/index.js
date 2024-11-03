var db = require('./db');

module.exports = {
  productdetails: function(data, callback) {
    var sql = 'SELECT * FROM lost WHERE id = $1';
    var param = [data.id];
    db.getData(sql, param, function(result) {
      if (result?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result);
      }
    });
  },
  addtocart: function(data, callback) {
    var sql = 'SELECT * FROM lost WHERE id = $1';
    var param = [data.id];
    db.getData(sql, param, function(result) {
      if (result?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result);
      }
    });
  },
  searchproduct: function(data, callback) {
    var sql = "SELECT * FROM lost WHERE " + data.filter + " LIKE '" + data.productname + "%' ORDER BY id DESC";
    db.getAllData(sql, function(result) {
      if (result?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result);
      }
    });
  },
  searchproductcatagory: function(data, callback) {
    var sql = 'SELECT * FROM lost WHERE category LIKE $1 ORDER BY promotion DESC, id DESC LIMIT $2 OFFSET $3';
    var param = [data.catagory, data.limit, data.id];
    
    db.getData(sql, param, function(result) {
      if (result?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result);
      }
    });
  },
  advancesearch: function(data, callback) {
    var sql = "SELECT * FROM lost WHERE lost_name LIKE '" + data.lost_name + "%' AND origin LIKE '" + data.origin + "%' AND last_located LIKE '" + data.last_located + "%'" + data.sqlend;
    db.getAllData(sql, function(result) {
      if (result?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result);
      }
    });
  },
  searchlocation: function(data, callback) {
    var sql = "SELECT * FROM lost WHERE last_located LIKE '" + data.lastlocated + "%'";
    db.getAllData(sql, function(result) {
      if (result?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result);
      }
    });
  },
  searchorigin: function(data, callback) {
    var sql = "SELECT * FROM lost WHERE origin LIKE '" + data.origin + "%'";
    db.getAllData(sql, function(result) {
      if (result?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result);
      }
    });
  }
};
