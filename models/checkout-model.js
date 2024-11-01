var db = require('./db');

module.exports = {
  placeorder: function(data, callback) {
    var sql = 'INSERT INTO records (productid, productname, userid, username, quantity, price, phonenumber, address, zipcode) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
    var param = [data.productid, data.productname, data.userid, data.username, data.quantity, data.price, data.phonenumber, data.address, data.zipcode];
    db.insertData(sql, param, function(result) {
      if (result == 0 || result == null) {
        callback(false);
      } else {
        callback(true);
      }
    });
  },
  updatequantity: function(data, callback) {
    var sql = 'UPDATE lost SET quantity = (quantity - $1) WHERE id = $2';
    var param = [data.quantityorder, data.productid];
    console.log(data.quantityorder);
    db.updateData(sql, param, function(result) {
      if (result == 0 || result == null) {
        callback(false);
      } else {
        callback(true);
      }
    });
  }
};
