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
	productlist: function(data,callback)
	{
		var sql="SELECT * FROM lost ";

		db.getAllData(sql,function(result){
			if(result.length==0 || result==null)
			{
				callback(false);
			}
			else
			{
				// result[10]=data;
				callback(result);
			}
		});
	},
	nextpage: function(data,callback) {
		var sql='SELECT * FROM lost ORDER BY promotion DESC,id DESC LIMIT ? OFFSET ?';
		var param=[data.limit,data.id];
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
	home: function(data,callback) {
		var sql='SELECT * FROM lost ORDER BY promotion DESC,id DESC LIMIT ?';
		var param=[data.limit];
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
	prevpage: function(data,callback) {
		var sql='SELECT * FROM lost WHERE id < ? ORDER BY id DESC LIMIT ?';
		var param=[data.id,data.limit];
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
	promotions: function(callback)
	{
		var sql="SELECT * FROM lost ORDER BY lost.promotion DESC ";

		db.getAllData(sql,function(result){
			if(result.length==0 || result==null)
			{
				callback(false);
			}
			else
			{
				// result[10]=data;
				callback(result);
			}
		});
	},
	productupdate: function(data,callback){
		var sql="UPDATE `lost` SET `lost_name`=?,`age`=?,`image`=?,`last_located`=?,`origin`=?,`catagory`=?,`agent_name`=?,`contact`=? WHERE `id`=?";
		var param=[data.productname,data.price,data.quantity,data.catagory,data.origin,data.category,data.agent_name,data.details,data.id];

		

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
		var sql="UPDATE records SET delivery='yes' WHERE id=?";
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
		var sql='SELECT * FROM records ORDER BY Orderdate DESC,delivery';
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
	searchproduct: function(data,callback) {
		var sql="SELECT * FROM "+data.table+" WHERE "+data.filter+" LIKE '"+data.lost_name+"%'";
		// var sql ="SELECT * FROM ? WHERE ? LIKE ?";
		// var param=[data.table,data.filter,data.productname];
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
	},
	searchage: function(data,callback) {
		var sql='SELECT * FROM `lost` WHERE age BETWEEN ? AND ?';
		var param=[data.min,data.max];
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

	searchlocation: function(data,callback) {
		var sql='SELECT * FROM `lost` WHERE last_located LIKE ?';
		var param=[data.lastlocated];
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
	searchorigin: function(data,callback) {
		var sql='SELECT * FROM `lost` WHERE origin LIKE ?';
		var param=[data.origin];
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
	}
};