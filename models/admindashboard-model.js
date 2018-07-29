var db=require('./db');
var passwordHash=require('password-hash');

module.exports={
	productInsert: function(data,callback){
		var sql="INSERT INTO `lost`(`lost_name`, `age`, `image`, `last_located`, `origin`, `catagory`, `agent_name`, `contact`,`date`) VALUES (?,?,?,?,?,?,?,?,?)";
		var param=[data.productname,data.price,data.quantity,data.catagory,data.origin,data.category,data.agent_name,data.details,data.details];

		db.insertData(sql,param,function(result){
			if(result==null || result.length==0)
			{
				callback(false);
			}
			else
			{
				callback(true);
			}
		});
	},
	productdelete: function(data,callback){
		var sql="DELETE FROM `lost` WHERE id = ?";
		var param=[data.id];

		db.deleteData(sql,param,function(result){
			if(result==null || result.length==0)
			{
				callback(false);
			}
			else
			{
				callback(true);
			}
		});
	},
	adminInsert: function(data,callback)
	{
		var sql="INSERT INTO `admin`(`name`, `username`, `email`, `password`, `gender`, `dob`, `nid`, `presentaddress`, `parmanentaddress`) VALUES (?,?,?,?,?,?,?,?,?)";
		var param=[data.name,data.username,data.email,passwordHash.generate(data.password),data.gender,data.dob,data.nid,data.presentaddress,data.parmanentaddress];

		db.insertData(sql,param,function(result){
			if(result==null || result.length==0)
			{
				callback(false);
			}
			else
			{
				callback(true);
			}
		});
	},
	productlist: function(callback)
	{
		var sql="SELECT * FROM lost";

		db.getAllData(sql,function(result){
			if(result.length==0 || result==null)
			{
				callback(false);
			}
			else
			{
				callback(result);
			}
		});
	},
	productupdate: function(data,callback){
		var sql="UPDATE lost SET `lost_name`=?,`age`=?,`image`=?,`last_located`=?,`origin`=?,`catagory`=?,`agent_name`=?,`contact`=?,`uname`=? WHERE `id`=?";
		var param=[data.productname,data.price,data.quantity,data.catagory,data.origin,data.category,data.agent_name,data.details,data.uname,data.id];

		
		db.updateData(sql,param,function(result){
			if(result==null || result.length==0)
			{
				callback(false);
			}
			else
			{
				callback(true);
			}
		});
	},
	deliveryproduct: function(data,callback){
		var sql="UPDATE soldproduct SET delivery='yes' WHERE id=?";
		var param=[data.id];

		db.updateData(sql,param,function(result){
			if(result==null || result.length==0)
			{
				callback(false);
			}
			else
			{
				callback(true);
			}
		});
	},
	productedit: function(data,callback)
	{
		var sql='SELECT * FROM lost WHERE id=?';
		var param = [data.id];

		db.getData(sql,param,function(result){
			if(result.length==0 || result==null)
			{
				callback(false);
			}
			else
			{
				callback(result);	
			}
		});
	},
	
	userlist: function(callback)
	{
		var sql='SELECT id,name,email FROM user';

		db.getAllData(sql,function(result){
			if(result.length==0 || result==null)
			{
				callback(false);
			}
			else
			{
				callback(result);
			}
		});
	},
	soldpendings: function(callback)
	{
		var sql='SELECT * FROM soldproduct ORDER BY Orderdate DESC,delivery';

		db.getAllData(sql,function(result){
			if(result.length==0 || result==null)
			{
				callback(false);
			}
			else
			{
				callback(result);
			}
		});
	},
	searchuser: function(data,callback) {
		var sql='SELECT * FROM user WHERE name LIKE "'+data.username+'%"';

			db.getAllData(sql,function(result){
			if(result.length==0 || result==null)
			{
				callback(false);
			}
			else
			{
				callback(result);	
			}
		});
	}
};