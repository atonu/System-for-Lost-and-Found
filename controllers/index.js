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
	var nextpage = 2;
	var prevpage = 1;
	
	var limit = {
		limit: 8,
	}

	 dashboardModel.home(limit,function(result){
	 	if(result && result!=null)
	 		{
	 			
	 			res.render('./index/index',{result: result,uname,nextpage,prevpage});
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

router.all('/page/:id?',function(req,res){
	var data={
		id: (req.params.id-1)*8,
		limit: 8,
	};
	var uname = req.session.loggedUser;
	var prevpage = req.params.id;
	if(prevpage>1)
	{
		prevpage--;
	}
	var nextpage = req.params.id;
	nextpage++;
	 dashboardModel.nextpage(data,function(result){
	 	if(result && result!=null)
	 		{
	 			res.render('./index/index',{result: result,uname,nextpage,prevpage});
	 		}
	 	
	 	else
	 		{
	 			res.render('./index/index',{errorMessage:{message:'No More Posts.'},result: result,uname});
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

router.post('/advancesearch',function(req,res){
	var data={
		max: req.body.age,
		min: req.body.age-10,
		lastlocated: req.body.lastlocated,
		origin: req.body.origin,

	};
	var uname = req.session.loggedUser;

if(data.max!= null){
	index.searchage(data,function(result){
	 	if(result && result!=null)
	 		{
	 			res.render('./index/index',{result: result,uname});
	 		}
	 	else 
	 		{
	 			res.render('./index/index',{errorMessage:{message:'Opps....No Search Result Found.'}});
	 		}
	 });
}

if(data.origin!= null){
	index.searchorigin(data,function(result){
	 	if(result && result!=null)
	 		{
	 			res.render('./index/index',{result: result,uname});
	 		}
	 	else 
	 		{
	 			res.render('./index/index',{errorMessage:{message:'Opps....No Search Result Found.'}});
	 		}
	 });
}

if(data.lastlocated != null){
	index.searchlocation(data,function(result){
	 	if(result && result!=null)
	 		{
	 			res.render('./index/index',{result: result,uname});
	 		}
	 	else 
	 		{
	 			res.render('./index/index',{errorMessage:{message:'Opps....No Search Result Found.'}});
	 		}
	 });
}

});


router.get('/locationsearch',function(req,res){
	var data = req.session.loggedUser;
	var uname = data;
	userModel.user(data,function(result){
		res.render('./index/advancesearch',{result: result,uname});
	});
	
});

router.post('/locationsearch',function(req,res){
	var data={
		lastlocated: req.body.lastlocated,
	};

	var uname = req.session.loggedUser;
	index.searchlocation(data,function(result){
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



router.post('/catagory/:catagory?',function(req,res){
	var data={
		catagory: req.body.catsearch,

	};

	var uname = req.session.loggedUser;
	var nextpage = 2;
	var prevpage = 1;

	console.log(req.params.catagoryname);
	 index.searchproductcatagory(data,function(result){
	 	if(result && result!=null)
	 		{
	 			res.render('./index/index',{result: result,uname,nextpage,prevpage});
	 		}
	 	else 
	 		{
	 			res.render('./index/index',{errorMessage:{message:'Opps....No Search Result Found.'}});
	 		}
	 });
});



//Exports
module.exports=router;

