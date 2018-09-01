var express=require('express');
var router=express.Router();
var index=require.main.require('./models/index');
var dashboardModel=require.main.require('./models/admindashboard-model');
var index = require.main.require('./models/index');
var userModel=require.main.require('./models/user-model');
// Request Handler

router.all('/',function(req,res){
	if(req.session.loggedUser != null)
	{
		var data = req.session.loggedUser;	
	}
	else
		var data = "Not Logged in";
	var uname = data;

	 dashboardModel.productlist(data,function(result){
	 	if(result && result!=null)
	 		{
	 			
	 			res.render('./index/index',{result: result,uname});
	 		}
	 	else
	 		{
	 			res.render('./error/error');
	 		}
	 });

	 
});



router.all('/productdetails/:id?',function(req,res){
	var data={
		id: req.params.id
	};
	var uname = req.session.loggedUser;
	 index.productdetails(data,function(result){
	 	if(result && result!=null)
	 		{
	 			res.render('./index/productdetails',{result: result,uname});
	 		}
	 	
	 	else
	 		{
	 			res.render('./error/error');
	 		}
	 });
});

router.post('/search',function(req,res){
	var data={
		productname: req.body.search
	};
	var uname = req.session.loggedUser;
	 index.searchproduct(data,function(result){
	 	if(result && result!=null)
	 		{
	 			res.render('./index/index',{result: result,uname});
	 		}
	 	else 
	 		{
	 			res.render('./index/index',{errorMessage:{message:'Opps....No Search Result Found.'},result: result,uname});
	 		}
	 });
});

router.get('/advancesearch',function(req,res){
	var data = req.session.loggedUser;
	var uname = data;
	userModel.user(data,function(result){
		res.render('./index/advancesearch',{result: result,uname});
	});
	
});


router.post('/catagorysearch/:catagory?',function(req,res){
	var data={
		catagory: req.body.catsearch,

	};

	var uname = req.session.loggedUser;

	console.log(req.params.catagoryname);
	 index.searchproductcatagory(data,function(result){
	 	if(result && result!=null)
	 		{
	 			res.render('./index/index',{result: result,uname});
	 		}
	 	else 
	 		{
	 			res.render('./index/index',{errorMessage:{message:'Opps....No Search Result Found.'}});
	 		}
	 });
});



//Exports
module.exports=router;

