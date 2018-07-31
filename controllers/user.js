var express=require('express');
var router=express.Router();
var asyncValidator=require('async-validator');
var userModel=require.main.require('./models/user-model');
var dashboardModel=require.main.require('./models/admindashboard-model');
var index=require.main.require('./models/index');
productValidation=require.main.require('./Validation_rule/product_validation');
registrationValidation=require.main.require('./Validation_rule/registration_validation');
var date = require('date-and-time');

// Request Handler

// router.get('/',function(req,res){
// 	userModel.user(function(result){
// 		if(result && result!=null)
// 			{
// 				console.log({result: result});
// 				res.render('./emp/index',{result: result});
// 			}
// 		else
// 			{
// 				res.redirect('/error/regError');
// 			}
// 	});

// });

//Exports

router.get('/useredit/:username?',function(req,res){
	var data={
		username: req.params.username,
	};
	userModel.useredit(data,function(result){
		res.render('./user/editprofile',{result:result});
	});
});
router.post('/useredit/:username?',function(req,res){
	var data={
		username: req.params.username,
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
		address: req.body.address
	};
	userModel.userprofileupdate(data,function(valid){
		if(valid)
		{
			res.redirect('/user/user');
		}
		else
		{
			res.redirect('/error');
		}
	});
});
router.get('/broughthistory/:id?',function(req,res){
	var data={
		id: req.params.id,
	};
	userModel.broughthistory(data,function(result){
		if(result)
		{
			res.render('./user/broughthistory',{result:result});
		}
		else
		{
			res.render('/error/error');
		}
	});
});

router.get('/addproduct',function(req,res){
	
	res.render('./user/addproduct');
});

router.post('/addproduct',function(req,res){
	var data={
		productname: req.body.productname,
		price: req.body.price,
		quantity: req.body.quantity,
		logged_user: req.session.loggedUser,
		catagory: req.body.catagory,
		origin: req.body.origin,
		category: req.body.category,
		agent_name: req.body.agent_name,
		details: req.body.details,
		date: date.format(new Date(), 'YYYY/MM/DD'),
	};
	var validator=new asyncValidator(productValidation.product);
	validator.validate(data,function(errors,fields){
		if(errors){
			res.render('/user/addproduct',{errors:errors});
		}
		else
		{
			userModel.productInsert(data,function(valid){
				if(valid)
				{
					res.redirect('/user/productlist');
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


	userModel.productlist(data,function(result){
		if(result!=null)
		{
			res.render('./user/productlist',{result: result});
		}
		else
		{
			res.render('./error/error');
		}
	});
});

router.get('/productedit/:id?',function(req,res){
	var data={
		id: req.params.id
	};
	userModel.productedit(data,function(result){
		res.render('./user/editproduct',{result:result});
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

	var validator=new asyncValidator(productValidation.product);
	validator.validate(data,function(errors,fields){
		if(errors){
			res.render('/user/productedit',{errors:errors});
		}
		else
		{
			userModel.productupdate(data,function(valid){
				if(valid)
				{
					res.redirect('/user/productlist');
				}
				else
				{
					res.redirect('/error/error');
				}
			});
		}
	});



});

router.all('/user',function(req,res){
	var data={
		username: req.session.loggedUser
	}
	userModel.user(data,function(result){
		if(result)
		{
			res.render('./user/userprofile',{result: result});
		}
		else
		{
			res.redirect('/error');
		}
	});
});
module.exports=router;

