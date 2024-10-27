var db=require('./db');

module.exports={
	
	productdetails: function(data,callback) {
		var sql='select * from lost where id=?';
		var param=[data.id];
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
	addtocart: function(data,callback) {
		var sql='select * from lost where id=?';
		var param=[data.id];
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
	searchproduct: function(data,callback) {
		var sql="SELECT * FROM lost WHERE "+data.filter+" LIKE '" + data.productname + "%' ORDER BY id DESC";
			db.getAllData(sql,function(result){
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
	searchproductcatagory: function(data,callback) {
		var sql='SELECT * FROM `lost` WHERE catagory LIKE ? ORDER BY lost.promotion DESC,lost.id DESC LIMIT ? OFFSET ?';
		var param=[data.catagory,data.limit,data.id];
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
	advancesearch: function(data,callback) {
		// var sql="SELECT * FROM lost WHERE lost_name LIKE '"+data.lost_name+
		// "%'and last_located LIKE '"+data.last_located+"%' and origin LIKE '"
		// +data.origin+"%' "
		// +data.sqlend+";"

			var sql = "SELECT * FROM `lost` WHERE lost_name LIKE '"+data.lost_name+"%' AND origin LIKE '"+data.origin+"%' AND last_located LIKE '"+data.last_located+"%'"+data.sqlend
				
			db.getAllData(sql,function(result){
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

	searchlocation: function(data,callback) {
		
		var sql="SELECT * FROM lost WHERE last_located LIKE '" + data.lastlocated + "%' ";

		
			db.getAllData(sql,function(result){
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
	searchorigin: function(data,callback) {
		
			var sql="SELECT * FROM lost WHERE origin LIKE '" + data.origin + "%' ";

		
			db.getAllData(sql,function(result){
			if(result?.length==0 || result==null)
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