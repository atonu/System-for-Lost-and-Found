var db=require('./db');
module.exports={
	user:function(data,callback)
	{
	var sql='select * from user where username=?';

	var param=[data.username];
	db.getData(sql,param,function(result){
		if(result?.length==0 || result==null)
		{
			callback(false);
		}
		else
		{
			callback(result);
		}
	});
},
   	useredit:function(data,callback)
	{
		var sql='SELECT * FROM user WHERE username=?';
		var param = [data.username];

		db.getData(sql,param,function(result){
			if(result?.length==0 || result==null)
			{
				callback(false);
			}
			else
			{
				callback(result);	
			}
		});
	},

	productInsert: function(data,callback){
		var sql="INSERT INTO `lost`(`lost_name`, `age`, `image`, `image2`, `image3`, `last_located`, `origin`, `catagory`, `agent_name`, `contact`, `date`,`uname`,`promotion`,`reward`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		var param=[data.productname,data.price,data.img1,data.img2,data.img3,data.catagory,data.origin,data.category,data.agent_name,data.details,data.date,data.logged_user,data.promotion,data.reward];

		db.insertData(sql,param,function(result){
			if(result==null || result?.length==0)
			{
				callback(false);
			}
			else
			{
				callback(true);
			}
		});
	},

	deleteAccount:function(data,callback)
	{
		var sql='DELETE FROM user WHERE id=?';
		var param = [data.accID];

		db.deleteData(sql,param,function(valid){
			if(valid)
			{
				callback(true);
			}
			else
			{
				callback(false);	
			}
		});
	},

	productlist: function(data,callback)
	{
		var sql='SELECT * FROM lost WHERE uname =? ORDER BY id DESC';
		var param=[data.username];
		db.getData(sql,param,function(result){
			if(result?.length==0 || result==null)
			{
				callback(false);
			}
			else
			{
				
				callback(result);
			}
		});
	},

	history: function(data,callback)
	{
		var sql='SELECT * FROM records WHERE uname =? ORDER BY date DESC';
		var param=[data.username];
		db.getData(sql,param,function(result){
			if(result?.length==0 || result==null)
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
		var sql="UPDATE `lost` SET `lost_name`=?,`age`=?,`image`=?,`image2`=?,`image3`=?,`last_located`=?,`origin`=?,`catagory`=?,`agent_name`=?,`contact`=?,`promotion`=?,`reward`=? WHERE `id`=?";
		var param=[data.productname,data.price,data.image,data.image2,data.image3,data.catagory,data.origin,data.category,data.agent_name,data.details,data.promotion,data.reward,data.id];

		
		db.updateData(sql,param,function(result){
			if(result==null || result?.length==0)
			{
				callback(false);
			}
			else
			{
				callback(true);
			}
		});
	},

	promoupdate: function(data,callback){
		var sql="UPDATE `lost` SET `promotion`=? WHERE `id`=?";
		var param=[data.promotion,data.id];

		
		db.updateData(sql,param,function(result){
			if(result==null || result?.length==0)
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
		var sql="SELECT * FROM lost WHERE id=? and uname like ?";
		var param = [data.id,data.uname];

		db.getData(sql,param,function(result){
			if(result?.length==0 || result==null)
			{
				callback(false);
			}
			else
			{
				callback(result);	
			}
		});
	},

	submitRecord: function(data,callback){
		var sql="INSERT INTO `records`(`lost_name`, `uname`, `category`, `date`) VALUES (?,?,?,?)";
		var param=[data.productname,data.username,data.category,data.date];

		db.insertData(sql,param,function(result){
			if(result==null || result?.length==0)
			{
				callback(false);
			}
			else
			{
				callback(true);
			}
		});
	},

	getUserRow: function(data,callback)
	{
		var sql="SELECT * FROM user WHERE id=?";
		var param = [data.id,];

		db.getData(sql,param,function(result){
			if(result?.length==0 || result==null)
			{
				callback(false);
			}
			else
			{
				callback(result);	
			}
		});
	},
	


		broughthistory:function(data,callback)
	{
		var sql="SELECT * FROM records WHERE userid=? ORDER BY Orderdate DESC,delivery";
		var param = [data.id];
		db.getData(sql,param,function(result){
			if(result?.length==0 || result==null)
			{
				callback(false);
			}
			else
			{
				callback(result);	
			}
		});
	},
	userprofileupdate : function(data,callback){
		var sql="UPDATE `user` SET `name`=?,`email`=?,`phone`=?,`address`=?,`image`=? WHERE `username`=?";
		var param=[data.name,data.email,data.phone,data.address,data.image,data.username];

		db.updateData(sql,param,function(result){
			if(result==null || result?.length==0)
			{
				callback(false);
			}
			else
			{
				callback(true);
			}
		});
	}
};
