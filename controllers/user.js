//Diclaration
const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');

var router=express.Router();
var asyncValidator=require('async-validator');
var userModel=require.main.require('./models/user-model');
var dashboardModel=require.main.require('./models/admindashboard-model');
var index=require.main.require('./models/index');
productValidation=require.main.require('./Validation_rule/product_validation');
registrationValidation=require.main.require('./Validation_rule/registration_validation');
var date = require('date-and-time');

// Request Handler
//Exports
// Set The Storage Engine
const storage = multer.diskStorage({
	destination: './public/uploads/',
	filename: function(req, file, cb){
		cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
});

// Init Upload
const upload = multer({
	storage: storage,
	limits:{fileSize: 1000000},
	fileFilter: function(req, file, cb){
		checkFileType(file, cb);
	}
}).single('myImage');

// Check File Type
function checkFileType(file, cb){
// Allowed ext
const filetypes = /jpeg|jpg|png|gif/;
// Check ext
const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
// Check mime
const mimetype = filetypes.test(file.mimetype);

if(mimetype && extname){
	return cb(null,true);
} else {
	cb('Error: Images Only!');
}
}

// Init app
const app = express();

// EJS
app.set('view engine', 'ejs');

// Public Folder
app.use(express.static('./public'));





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

					var uname= req.session.loggedUser;

					if (uname == "Guest") {
						res.redirect('/login');
					}
					else{
						var data={
						username: req.params.username,
						};
					
					userModel.user(data,function(result){
						res.render('./user/addproduct',{result: result,uname});
					});


					}
				});




		router.post('/upload/:id?', function(req, res) {

			upload(req, res, (err) => {
				if(err){
					res.render('./index/index', {
						msg: err
					});
				}

				else{
					var uname = req.session.loggedUser;
					
						var file;
					{file = `/uploads/${req.file.filename}`}
					res.render('./user/addproduct',{
						uname,file,
						
					});
				}

			});
			
		});
		



		router.post('/addproduct',function(req,res){

			var uname = req.session.loggedUser;
			if(uname == "Guest")
			{
				res.redirect('/login');
			}

			var test =   req.body.test;
			var prevpage=0,nextpage=1;
			var image=req.body.quantity;

			if(image.length < 1){
				image = "https://i.imgur.com/S58Jnn6.jpg";	
			}
	

			var data={
				productname: req.body.productname,
				price: req.body.price,
				quantity: image,
				logged_user: req.session.loggedUser,
				catagory: req.body.catagory,
				origin: req.body.origin,
				category: req.body.category,
				agent_name: req.body.agent_name,
				details: req.body.details,
				date: date.format(new Date(), 'YYYY/MM/DD'),
				promotion: req.body.promotion,
			};

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



				});


					router.all('/productlist',function(req,res){

						var data={
							username: req.session.loggedUser
						}

						var uname = req.session.loggedUser;
						if (uname =="Guest") {
							res.redirect('/login');
						}

						else{
							userModel.productlist(data,function(result){
							if(result!=null)
							{
								res.render('./user/productlist',{result: result,uname});
							}
							else
							{
								res.render('./error/error');
							}
						});
						}
							});

								router.get('/productedit/:id?',function(req,res){
									var data={
										id: req.params.id
									};
									var uname = req.session.loggedUser;
									userModel.productedit(data,function(result){
										res.render('./user/editproduct',{result:result,uname});
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
										date: date.format(new Date(), 'YYYY/MM/DD'),
										promotion: req.body.promotion,
									};

									userModel.productupdate(data,function(valid){
										if(valid)
										{
											res.redirect('/user/productlist',{file: `uploads/${req.file.filename}`});
										}
										else
										{
											res.render('/error/error');
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

