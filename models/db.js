const { Client } = require('pg');

// Database connection configuration
const client = new Client({
  user: 'postgres.fflfrdenrbymuvhwwpxb',
  host: 'aws-0-ap-southeast-1.pooler.supabase.com',
  database: 'postgres',
  password: 'llCYUYTkPLwtn7bK',
  port: 6543,
  ssl: {
    rejectUnauthorized: false // Accept self-signed certificates
  }
});

// Connect to the database
client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Connection error', err.stack));

// Example query
// client.query('SELECT * FROM lost WHERE id = 38;', (err, res) => {
//   if (err) {
//     console.error('Query error', err.stack);
//   } else {
//     console.log('Query result:', res);
//   }
//   // Close the connection
//   client.end();
// });

module.exports={
	insertData: function(sql,param,callback){
		console.log(param);
		if(!param || param ==null)
		{
			client.query(sql,function(error,result){
				if (error) {
					console.log('----insert err no param------',);
					callback(null);
				}
				else
				{
					console.log('----insert no param res------',result);
					
					callback(param);
				}
			});
			
		}
		else
		{
			client.query(sql,param,function(error,result){
				if (error) {
					console.log('----insert err yes------',error);
					console.log('----param------',param);

					callback(null);
				}
				else
				{
					console.log('----insert w param res------',result);
					callback(param);
				}
			});
		}

	},
	getAllData: function(sql,callback){
		
		client.query(sql,function(error,result){
			if(error)
			{
				
				callback(null);

			}
			else
			{
				callback(result.rows);
			}
		});
	},
	getData : function(sql,param,callback){
		if(param==null)
		{
			client.query(sql,function(error,result){
				if (error) {
					callback(null);
				}
				else
				{
					callback(result.rows);
				}
			});
			
		}
		else
		{
			client.query(sql,param,function(error,result){
				if (error) {
					callback(null);	
				}
				else
				{
					callback(result.rows);
				}
			});
		}

	},


	deleteData : function(sql,param,callback){

		if(param==null)
		{
			client.query(sql,function(error,result){
				if (error) {
					callback(null);
				}
				else
				{
					callback(result.rows);
				}
			});
			
		}
		else
		{
			client.query(sql,param,function(error,result){
				if (error) {
					callback(null);
				}
				else
				{
					callback(result.rows);
				}
			});
		}

	},
	updateData : function(sql,param,callback){
		if(param==null)
		{
			client.query(sql,function(error,result){
				if (error) {
					callback(null);
				}
				else
				{
					console.log('----update------',result);

					callback(result);
				}
			});
		}
		else
		{
			client.query(sql,param,function(error,result){
				if (error) {
					callback(null);
				}
				else
				{
					console.log('----update------',result);

					callback(result);
				}
			});
		}
	}
};
