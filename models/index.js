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
		var sql="SELECT * FROM lost WHERE "+data.filter+" LIKE '" + data.productname + "%' ";
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
		var sql='SELECT * FROM `lost` WHERE catagory LIKE ? ORDER BY lost.promotion DESC LIMIT ? OFFSET ?';
		var param=[data.catagory,data.limit,data.id];
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
		
		var sql="SELECT * FROM lost WHERE last_located LIKE '" + data.lastlocated + "%' ";

		
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
	searchorigin: function(data,callback) {
		
			var sql="SELECT * FROM lost WHERE origin LIKE '" + data.origin + "%' ";

		
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