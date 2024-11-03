var db = require('./db');

module.exports = {
  user: function(data, callback) {
    var sql = 'SELECT * FROM users WHERE username = $1';
    var param = [data.username];
    db.getData(sql, param, function(result) {
      if (result?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result.rows);
      }
    });
  },
  useredit: function(data, callback) {
    var sql = 'SELECT * FROM users WHERE id = $1';
    var param = [data.id];
    db.getData(sql, param, function(result) {
      if (result?.length == 0 || result == null) {
        callback(false);
      } else {
        console.log('shall i?',result);
        
        callback(result.rows);
      }
    });
  },
  productInsert: function(data, callback) {
    var sql = "INSERT INTO lost (lost_name, age, image, image2, image3, last_located, origin, category, agent_name, contact, date, uname, promotion, reward) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)";
    var param = [data.productname, data.price, data.img1, data.img2, data.img3, data.catagory, data.origin, data.category, data.agent_name, data.details, data.date, data.logged_user, data.promotion, data.reward];
    console.log("---check---", sql,param);
    
    db.insertData(sql, param, function(result) {
      console.log('db insert resp',result);
      
      if (result == null || result?.length == 0) {
        callback(false);
      } else {
        callback(true);
      }
    });
  },
  deleteAccount: function(data, callback) {
    var sql = 'DELETE FROM users WHERE id = $1';
    var param = [data.accID];
    db.deleteData(sql, param, function(valid) {
      if (valid) {
        callback(true);
      } else {
        callback(false);
      }
    });
  },
  productlist: function(data, callback) {
    var sql = 'SELECT * FROM lost WHERE uname = $1 ORDER BY id DESC';
    var param = [data.username];
    db.getData(sql, param, function(result) {
      if (result?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result.rows);
      }
    });
  },
  history: function(data, callback) {
    var sql = 'SELECT * FROM records WHERE uname = $1 ORDER BY date DESC';
    var param = [data.username];
    db.getData(sql, param, function(result) {
      if (result?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result.rows);
      }
    });
  },
  productupdate: function(data, callback) {
    var sql = "UPDATE lost SET lost_name = $1, age = $2, image = $3, image2 = $4, image3 = $5, last_located = $6, origin = $7, category = $8, agent_name = $9, contact = $10, promotion = $11, reward = $12 WHERE id = $13";
    var param = [data.productname, data.price, data.image, data.image2, data.image3, data.catagory, data.origin, data.category, data.agent_name, data.details, data.promotion, data.reward, data.id];
    db.updateData(sql, param, function(result) {
      if (result == null || result?.length == 0) {
        callback(false);
      } else {
        callback(true);
      }
    });
  },
  promoupdate: function(data, callback) {
    var sql = "UPDATE lost SET promotion = $1 WHERE id = $2";
    var param = [data.promotion, data.id];
    db.updateData(sql, param, function(result) {
      if (result == null || result?.length == 0) {
        callback(false);
      } else {
        callback(true);
      }
    });
  },
  productedit: function(data, callback) {
    var sql = "SELECT * FROM lost WHERE id = $1 AND uname LIKE $2";
    var param = [data.id, data.uname];
    db.getData(sql, param, function(result) {
      if (result?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result.rows);
      }
    });
  },
  submitRecord: function(data, callback) {
    var sql = "INSERT INTO records (lost_name, uname, category) VALUES ($1, $2, $3)";
    var param = [data.lost_name, data.uname, data.category];
    db.insertData(sql, param, function(result) {
      if (result == null || result?.length == 0) {
        callback(false);
      } else {
        callback(true);
      }
    });
  },
  getUserRow: function(data, callback) {
    var sql = "SELECT * FROM users WHERE id = $1";
    var param = [data.id];
    db.getData(sql, param, function(result) {
      if (result?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result.rows);
      }
    });
  },
  broughthistory: function(data, callback) {
    var sql = "SELECT * FROM records WHERE userid = $1 ORDER BY Orderdate DESC, delivery";
    var param = [data.id];
    db.getData(sql, param, function(result) {
      if (result?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result.rows);
      }
    });
  },
  userprofileupdate: function(data, callback) {
    var sql = "UPDATE users SET name = $1, email = $2, phone = $3, address = $4, image = $5 WHERE id = $6";
    var param = [data.name, data.email, data.phone, data.address, data.image, data.id];
    db.updateData(sql, param, function(result) {
      console.log(`--updated user--`, result);
      
      if (result == null || result?.length == 0) {
        callback(false);
      } else {
        callback(true);
      }
    });
  }
};
