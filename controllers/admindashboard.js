var express=require('express');
var asyncValidator=require('async-validator');
var router=express.Router();
var dashboardModel=require.main.require('./models/admindashboard-model');
var index=require.main.require('./models/index');
productValidation=require.main.require('./Validation_rule/product_validation');
registrationValidation=require.main.require('./Validation_rule/registration_validation');
var date = require('date-and-time');
// Request Handler

// router.get('/user',function(req,res){
// 	dashboardModel.userlist(function(result){
// 		if(result && result!=null)
// 			{
// 				console.log({result: result});
// 				res.render('./dashboard/index',{result: result});
// 			}
// 		else
// 			{
// 				res.redirect('/error/error');
// 			}
// 	});

// });


router.get('/addproduct',function(req,res){
	res.render('./admindashboard/addproduct');
});

router.post('/addproduct',function(req,res){
	var data={
		productname: req.body.productname,
		price: req.body.price,
		quantity: req.body.quantity,
		catagory: req.body.catagory,
		origin: req.body.origin,
		category: req.body.category,
		agent_name: req.body.agent_name,
		details: req.body.details,
		date: date.format(new Date(), 'YYYY/MM/DD')
	};
	var validator=new asyncValidator(productValidation.product);
	validator.validate(data,function(errors,fields){
		if(errors){
				res.render('/admindashboard/addproduct',{errors:errors});
		}
		else
		{
			dashboardModel.productInsert(data,function(valid){
				if(valid)
				{
					res.redirect('/admindashboard/productlist');
				}
				else
				{
					res.redirect('/error/error');
				}
			});
		}
	});

});




router.all('/productlist',function(req,res){
	var data={
		username: req.session.loggedUser

	}

	dashboardModel.productlist(data,function(result){
		if(result && result!=null)
			{
				// result[10] = data.username;
				res.render('./admindashboard/productlist',{result: result});
			}
		else
			{
				res.render('./error/error');
			}
	});
});
router.get('/productdelete/:id?',function(req,res){
	var data={
		id: req.params.id	
	};
		{
			res.render('./admindashboard/deleteproduct',data);
		}
});
router.post('/productdelete/:id?',function(req,res){
	var data={
		id:req.body.id
	};
	dashboardModel.productdelete(data,function(valid){
		if(valid)
			{
				res.redirect('/admindashboard/productlist');
			}
		else
			{
				res.render('/error/error');
			}
	});
});
router.get('/productedit/:id?',function(req,res){
	var data={
		id: req.params.id
	};
	dashboardModel.productedit(data,function(result){
		res.render('./admindashboard/editproduct',{result:result});
	});
});
router.post('/productedit/:id?',function(req,res){
	var data={
		id: req.params.id,
		productname: req.body.productname,
		price: req.body.price,
		quantity: req.body.quantity,
		catagory: req.body.catagory,
		origin: req.body.origin,
		category: req.body.category,
		agent_name: req.body.agent_name,
		details: req.body.details,
		date: date.format(new Date(), 'YYYY/MM/DD')
	};
	dashboardModel.productupdate(data,function(valid){
		if(valid)
			{
				res.redirect('/admindashboard/productlist');
			}
		else
			{
				res.render('/error/error');
			}
	});
});

router.get('/advancesearch',function(req,res){
	res.render('./admindashboard/advancesearch');
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
	dashboardModel.searchage(data,function(result){
	 	if(result && result!=null)
	 		{
	 			res.render('./admindashboard/productlist',{result: result,uname});
	 		}
	 	else 
	 		{
	 			res.render('./admindashboard/productlist',{errorMessage:{message:'Opps....No Search Result Found.'}});
	 		}
	 });
}

if(data.origin!= null){
	dashboardModel.searchorigin(data,function(result){
	 	if(result && result!=null)
	 		{
	 			res.render('./admindashboard/productlist',{result: result,uname});
	 		}
	 	else 
	 		{
	 			res.render('./admindashboard/productlist',{errorMessage:{message:'Opps....No Search Result Found.'}});
	 		}
	 });
}

if(data.lastlocated != null){
	dashboardModel.searchlocation(data,function(result){
	 	if(result && result!=null)
	 		{
	 			res.render('./admindashboard/productlist',{result: result,uname});
	 		}
	 	else 
	 		{
	 			res.render('./admindashboard/productlist',{errorMessage:{message:'Opps....No Search Result Found.'}});
	 		}
	 });
}

});



router.all('/userlist',function(req,res){
	dashboardModel.userlist(function(result){
		if(result && result!=null)
			{
				res.render('./admindashboard/userlist',{result: result});
			}
		else
			{
				res.render('./error/error');
			}
	});
});

router.get('/home',function(req,res){
	res.render('./admindashboard/home');
});


router.all('/promotions',function(req,res){

	dashboardModel.promotions(function(result){
		if(result && result!=null)
			{
				// result[10] = data.username;
				res.render('./admindashboard/promotions',{result: result});
			}
		else
			{
				res.render('./error/error');
			}
	});
});




//Exports

module.exports=router;

