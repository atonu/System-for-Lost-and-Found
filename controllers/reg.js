var express=require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');
var asyncValidator=require('async-validator');
var router=express.Router();
var userModel=require.main.require('./models/user-model');
regModel=require.main.require('./models/reg-model');
regValidation=require.main.require('./Validation_rule/registration_validation');

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
}).any();

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


router.post('/upload', function(req, res) {

	upload(req, res, (err) => {
		var uname = req.session.loggedUser;
		if(err){
			res.render('./reg/reg', {
				msg: err,uname,
			});
		}

		else {
			if(req.files[0] == undefined && req.files[1] == undefined && req.files[2] == undefined ){
				res.render('./reg/reg', {
					msg: 'Error: No File Selected!',
					uname,
				});
			} else {
				var uname = req.session.loggedUser;

				var file1 = `/uploads/${req.files[0].filename}`;
				res.render('./reg/reg',{
					uname,file1,

				});
			}
		}

	});

});


router.post('/edit/:id?', function(req, res) {

	upload(req, res, (err) => {
		var uname = req.session.loggedUser;

		var data={
			id: req.params.id,
			uname,
		};

		userModel.getUserRow(data,function(result){

			if(err){
				res.render('./user/userprofile', {
					msg: err,uname,result:result,
				});
			}

			else {


				if(req.files[0] == undefined){
				res.render('./index', {
					msg: 'Error: No File Selected!',
					uname,
					result:result,
				});
			} else {

				var file1 =null;
					file1 = `/uploads/${req.files[0].filename}`;
				
				if(req.files[0].length<1){	
					file1="https://i.imgur.com/S58Jnn6.jpg";
				}

				res.render('./user/editprofile',{
					uname,file1,result:result,

				});
			}

			}
		});

	});

});





// Request Handler

router.get('/',function(req,res){
	res.render('./reg/reg');
});


router.post('/',function(req,res){
	var data={
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		image: req.body.Image1,
		phone: req.body.phone,
		password: req.body.password,
		address: req.body.address
	};
	
	var validator = new asyncValidator(regValidation.registration);
	validator.validate(data, function(errors, fields){
		
		console.log(errors);
		console.log('-----------------------------------------------------------');
		console.log(fields);

		if(errors)
		{
			res.render('reg/reg',{errors:errors});
		}
		else
		{
			if(req.body.password==req.body.cpassword)
			{
				regModel.validateUser(data,function(valid)
				{
					if(valid)
					{
						res.redirect('/login');
					}
					else
					{
						res.redirect('/error');
					}
				});
			}
			else
			{
				res.redirect('./error/error');
			}
		}
	});
});

//Exports

module.exports=router;

