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
	dashboardModel.productlist(function(result){
		if(result && result!=null)
			{
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


//Exports

module.exports=router;

