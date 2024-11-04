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
    var sql = "SELECT * FROM lost WHERE " + data.filter + " ILIKE '" + data.productname + "%' ORDER BY id DESC";
    db.getAllData(sql, function(result) {
      if (result?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result);
      }
    });
  },
  searchproductcatagory: function(data, callback) {
    var sql = 'SELECT * FROM lost WHERE category ILIKE $1 ORDER BY promotion DESC, id DESC LIMIT $2 OFFSET $3';
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
    var sql = "SELECT * FROM lost WHERE lost_name ILIKE '" + data.lost_name + "%' AND origin ILIKE '" + data.origin + "%' AND last_located ILIKE '" + data.last_located + "%'" + data.sqlend;
    db.getAllData(sql, function(result) {
      if (result?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result);
      }
    });
  },
  searchlocation: function(data, callback) {
    var sql = "SELECT * FROM lost WHERE last_located ILIKE '" + data.lastlocated + "%'";
    db.getAllData(sql, function(result) {
      if (result?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result);
      }
    });
  },
  searchorigin: function(data, callback) {
    var sql = "SELECT * FROM lost WHERE origin ILIKE '" + data.origin + "%'";
    db.getAllData(sql, function(result) {
      if (result?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result);
      }
    });
  }
};
