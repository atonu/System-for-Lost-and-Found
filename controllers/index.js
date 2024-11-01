var express=require('express');
var router=express.Router();
var index=require.main.require('./models/index');
var dashboardModel=require.main.require('./models/admindashboard-model');
var index = require.main.require('./models/index');
var userModel=require.main.require('./models/user-model');
// Request Handler

router.all('/',function(req,res){
	if(req.session.loggedUser == null)
	{
		req.session.loggedUser="Guest";
	}
	
	var uname = req.session.loggedUser;
	
	var nextpage = 2;
	var prevpage = 0;

	var limit = {
		limit: 8,
	}

	 dashboardModel.home(limit,function(result){
		console.log(result);
		
	 	if(result && result!=null)
	 		{
	 			
	 			res.render('./index/index',{result: result.rows,uname,nextpage,prevpage});
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
	 			res.render('./index/productdetails',{result: result.rows,uname});
	 		}
	 	
	 	else
	 		{
	 			res.render('./error/error');
	 		}
	 });
});

router.post('/search',function(req,res){
	var data={
		productname: req.body.search,
		filter: req.body.filter,

	};
	var uname = req.session.loggedUser;
	var prevpage=0,nextpage=0;
	 index.searchproduct(data,function(result){
	 	if(result && result!=null)
	 		{
	 			res.render('./index/index',{result: result.rows,uname,prevpage,nextpage});
	 		}
	 	else 
	 		{
	 			res.render('./index/index',{errorMessage:{message:'Opps....No Search Result Found.'},result: result.rows,uname,nextpage,prevpage});
	 		}
	 });
});

router.all('/page/:id?',function(req,res){
	var data={
		id: (req.params.id-1)*8,
		limit: 8,
	};
	var uname = req.session.loggedUser;
	var prevpage = req.params.id;

	prevpage--;
	var nextpage = req.params.id;
	nextpage++;
	 dashboardModel.nextpage(data,function(result){
	 	if(result && result!=null)
	 		{
	 			res.render('./index/index',{result: result.rows,uname,nextpage,prevpage});
	 		}
	 	
	 	else
	 		{
	 			res.render('./index/index',{errorMessage:{message:'No More Posts.'},result: result.rows,uname});
	 		}
	 });
});



router.get('/advancesearch',function(req,res){
	var data = req.session.loggedUser;
	var uname = data;
	var prevpage =0;
	var nextpage =0;
	userModel.user(data,function(result){
		res.render('./index/advancesearch',{result: result.rows,uname,prevpage,nextpage});
	});
	
});

router.post('/advancesearch',function(req,res){
	var uname = req.session.loggedUser;
	var prevpage =0;
	var nextpage =0;

	var max= req.body.age;
	var min= req.body.age-10;
	var sqlend="";

	if(max!=0){
		sqlend = "and age between '"+min+"' and '"+max+"';"
	}

	var data={
		lost_name: req.body.lost_name,
		sqlend,	
		last_located: req.body.last_located,
		origin: req.body.origin,
	};

	if(req.body.age==0 && req.body.lost_name.length < 1 && req.body.last_located.length < 1 && req.body.origin.length < 1)
	{
		data.sqlend = " and id < 1";
	}


	index.advancesearch(data,function(result){
	 	if(result && result!=null)
	 		{
	 			res.render('./index/index',{result: result.rows,uname,prevpage,nextpage});
	 		}
	 	else 
	 		{
	 			res.render('./index/index',{errorMessage:{message:'Opps....No Search Result Found.'},result: result.rows,uname,prevpage,nextpage});
	 		}
	 });


});


router.get('/locationsearch',function(req,res){
	var data = req.session.loggedUser;
	var uname = data;
	var prevpage=1,nextpage=1;
	userModel.user(data,function(result){
		res.render('./index/advancesearch',{result: result.rows,uname,prevpage,nextpage});
	});
	
});

router.post('/locationsearch',function(req,res){
	var data={
		lastlocated: req.body.lastlocated,
	};

	var uname = req.session.loggedUser;
	var prevpage=1,nextpage=1;
	index.searchlocation(data,function(result){
	 	if(result && result!=null)
	 		{
	 			res.render('./index/index',{result: result.rows,uname,prevpage,nextpage});
	 		}
	 	else 
	 		{
	 			res.render('./index/index',{errorMessage:{message:'Opps....No Search Result Found.'},result: result.rows,uname,prevpage,nextpage});
	 		}
	 });

});



router.all('/catagory/:catagory?/:id?',function(req,res){
	var data={

		catagory: req.params.catagory,
		id: (req.params.id-1)*8,
		limit: 8,

	};

	var uname = req.session.loggedUser;

	var nextpage = req.params.id;
	nextpage++;
	var prevpage =req.params.id;
	prevpage--;
	console.log(req.params.catagoryname);

	if(req.params.catagory == 'lost'){

	 index.searchproductcatagory(data,function(result){
	 	if(result && result!=null)
	 		{
	 			res.render('./index/lost',{result: result.rows,uname,nextpage,prevpage,});
	 		}
	 	else 
	 		{
	 			res.render('./index/lost',{errorMessage:{message:'No More Posts.'},result: result.rows,uname});
	 		}
	 });

	}

	if(req.params.catagory == 'found'){

	 index.searchproductcatagory(data,function(result){
	 	if(result && result!=null)
	 		{
	 			res.render('./index/found',{result: result.rows,uname,nextpage,prevpage,});
	 		}
	 	else 
	 		{
	 			res.render('./index/found',{errorMessage:{message:'No More Posts.'},result: result.rows,uname});
	 		}
	 });
	 
	}
});



//Exports
module.exports=router;

