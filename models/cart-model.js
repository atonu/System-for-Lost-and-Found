var db=require('./db');

module.exports={
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
	}
};