var db = require('./db');
var passwordHash = require('password-hash');

module.exports = {
  productInsert: function(data, callback) {
    var sql = "INSERT INTO lost (lost_name, age, image, image2, image3, last_located, origin, category, agent_name, contact, date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)";
    var param = [data.productname, data.price, data.image1, data.imag2, data.image3, data.catagory, data.origin, data.category, data.agent_name, data.details, data.details];

    db.insertData(sql, param, function(result) {
      if (result == null || result.rows?.length == 0) {
        callback(false);
      } else {
        callback(true);
      }
    });
  },
  productdelete: function(data, callback) {
    var sql = "DELETE FROM lost WHERE id = $1";
    var param = [data.id];

    db.deleteData(sql, param, function(result) {
      if (result == null || result.rows?.length == 0) {
        callback(false);
      } else {
        callback(true);
      }
    });
  },
  // resolve: function(data, callback) {
  //   var sql = "UPDATE records SET productname = $1, username = $2, category = $3, date = $4, contacted_with = $5, contact = $6 WHERE id = $7";
  //   var param = [data.productname, data.username];

  //   db.insertData(sql, param, function(result) {
  //     if (result == null || result.rows?.length == 0) {
  //       callback(false);
  //     } else {
  //       callback(true);
  //     }
  //   });
  // },
  adminInsert: function(data, callback) {
    var sql = "INSERT INTO admin (name, username, email, password, gender, dob, nid, presentaddress, parmanentaddress) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";
    var param = [data.name, data.username, data.email, passwordHash.generate(data.password), data.gender, data.dob, data.nid, data.presentaddress, data.parmanentaddress];

    db.insertData(sql, param, function(result) {
      if (result == null || result.rows?.length == 0) {
        callback(false);
      } else {
        callback(true);
      }
    });
  },
  productlist: function(data, callback) {
    var sql = "SELECT * FROM lost";

    db.getAllData(sql, function(result) {
      if (result.rows?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result.rows);
      }
    });
  },
  nextpage: function(data, callback) {
    var sql = 'SELECT * FROM lost ORDER BY promotion DESC, id DESC LIMIT $1 OFFSET $2';
    var param = [data.limit, data.id];
    db.getData(sql, param, function(result) {
      if (result.rows?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result.rows);
      }
    });
  },
  home: function(data, callback) {
    var sql = 'SELECT * FROM lost ORDER BY promotion DESC, id DESC LIMIT $1';
    var param = [data.limit];
    
    db.getData(sql, param, function(result) {
      if (result.rows?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result.rows);
      }
    });
  },
  prevpage: function(data, callback) {
    var sql = 'SELECT * FROM lost WHERE id < $1 ORDER BY id DESC LIMIT $2';
    var param = [data.id, data.limit];
    db.getData(sql, param, function(result) {
      if (result.rows?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result.rows);
      }
    });
  },
  promotions: function(callback) {
    var sql = "SELECT * FROM lost WHERE promotion > 0 ORDER BY promotion DESC";

    db.getAllData(sql, function(result) {
      if (result.rows?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result.rows);
      }
    });
  },
  productupdate: function(data, callback) {
    var sql = "UPDATE lost SET lost_name = $1, age = $2, image = $3, image2 = $4, image3 = $5, last_located = $6, origin = $7, category = $8, agent_name = $9, contact = $10 WHERE id = $11";
    var param = [data.productname, data.price, data.image1, data.image2, data.image3, data.catagory, data.origin, data.category, data.agent_name, data.details, data.id];

    db.updateData(sql, param, function(result) {
      if (result == null || result.rows?.length == 0) {
        callback(false);
      } else {
        callback(true);
      }
    });
  },
  deliveryproduct: function(data, callback) {
    var sql = "UPDATE records SET delivery = 'yes' WHERE id = $1";
    var param = [data.id];

    db.updateData(sql, param, function(result) {
      if (result == null || result.rows?.length == 0) {
        callback(false);
      } else {
        callback(true);
      }
    });
  },
  productedit: function(data, callback) {
    var sql = 'SELECT * FROM lost WHERE id = $1';
    var param = [data.id];

    db.getData(sql, param, function(result) {
      if (result.rows?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result.rows);
      }
    });
  },
  userlist: function(callback) {
    var sql = 'SELECT id, name, email FROM user';

    db.getAllData(sql, function(result) {
      if (result.rows?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result.rows);
      }
    });
  },
  soldpendings: function(callback) {
    var sql = 'SELECT * FROM records ORDER BY Orderdate DESC, delivery';
    db.getAllData(sql, function(result) {
      if (result.rows?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result.rows);
      }
    });
  },
  searchproduct: function(data, callback) {
    var sql = "SELECT * FROM " + data.table + " WHERE " + data.filter + " LIKE '" + data.lost_name + "%'";
    db.getAllData(sql, function(result) {
      if (result.rows?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result.rows);
      }
    });
  },
  searchuser: function(data, callback) {
    var sql = 'SELECT * FROM user WHERE name LIKE $1';
    var param = [data.username + '%'];

    db.getAllData(sql, param, function(result) {
      if (result.rows?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result.rows);
      }
    });
  },
  searchage: function(data, callback) {
    var sql = 'SELECT * FROM lost WHERE age BETWEEN $1 AND $2';
    var param = [data.min, data.max];
    db.getData(sql, param, function(result) {
      if (result.rows?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result.rows);
      }
    });
  },
  searchlocation: function(data, callback) {
    var sql = 'SELECT * FROM lost WHERE last_located LIKE $1';
    var param = [data.lastlocated];
    db.getData(sql, param, function(result) {
      if (result.rows?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result.rows);
      }
    });
  },
  searchorigin: function(data, callback) {
    var sql = 'SELECT * FROM lost WHERE origin LIKE $1';
    var param = [data.origin];
    db.getData(sql, param, function(result) {
      if (result.rows?.length == 0 || result == null) {
        callback(false);
      } else {
        callback(result.rows);
      }
    });
  }
};
