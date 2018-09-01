var db=require('./db');

module.exports={
	
	productdetails: function(data,callback) {
		var sql='select * from lost where id=?';
		var param=[data.id];
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
	addtocart: function(data,callback) {
		var sql='select * from lost where id=?';
		var param=[data.id];
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
	searchproduct: function(data,callback) {
		var sql="SELECT * FROM lost WHERE lost_name LIKE '" + data.productname + "%'";
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
	searchproductcatagory: function(data,callback) {
		var sql='SELECT * FROM `lost` WHERE catagory LIKE ? ORDER BY lost.promotion DESC';
		var param=[data.catagory];
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