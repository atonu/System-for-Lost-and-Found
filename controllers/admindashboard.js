var express=require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');
var asyncValidator=require('async-validator');
var router=express.Router();
var userModel=require.main.require('./models/user-model');
var dashboardModel=require.main.require('./models/admindashboard-model');
var index=require.main.require('./models/index');
productValidation=require.main.require('./Validation_rule/product_validation');
registrationValidation=require.main.require('./Validation_rule/registration_validation');
var date = require('date-and-time');
// Request Handler

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
			res.render('./admindashboard/addproduct', {
				msg: err,uname,
			});
		}

		else {
			if(req.files[0] == undefined && req.files[1] == undefined && req.files[2] == undefined ){
				res.render('./admindashboard/addproduct', {
					msg: 'Error: No File Selected!',
					uname,
				});
			} else {
				var uname = req.session.loggedUser;

				var file1,file2=null,file3=null;

				if(req.files[0]!=undefined){	
					file1 = `/uploads/${req.files[0].filename}`;
				}
				else{
					file1="https://i.imgur.com/S58Jnn6.jpg";
				}
				if(req.files[1]!=undefined){	
					file2 = `/uploads/${req.files[1].filename}`;
				}

				if(req.files[2]!=undefined){	
					file3 = `/uploads/${req.files[2].filename}`;
				}

				res.render('./admindashboard/addproduct',{
					uname,file1,file2,file3,

				});
			}
		}

	});

});


router.post('/edit/:id?', function(req, res) {

	upload(req, res, (err) => {
		var uname = req.session.loggedUser;

		var data={
			id: req.params.id
		};

		dashboardModel.productedit(data,function(result){

			if(err){
				res.render('./admindashboard/editproduct', {
					msg: err,uname,result:result,
				});
			}

			else {


				if(req.files[0] == undefined && req.files[1] == undefined && req.files[2] == undefined ){
				res.render('./admindashboard/editproduct', {
					msg: 'Error: No File Selected!',
					uname,
					result:result,
				});
			} else {
				var uname = req.session.loggedUser;

				var file1,file2=null,file3=null;
				// file1 = `/uploads/${req.files[0].filename}`;
				// file2 = `/uploads/${req.files[1].filename}`;
				// file3 = `/uploads/${req.files[2].filename}`;

				if(req.files[0]!=undefined){	
					file1 = `/uploads/${req.files[0].filename}`;
				}
				else{
					file1="https://i.imgur.com/S58Jnn6.jpg";
				}
				if(req.files[1]!=undefined){	
					file2 = `/uploads/${req.files[1].filename}`;
				}

				if(req.files[2]!=undefined){	
					file3 = `/uploads/${req.files[2].filename}`;
				}

				res.render('./admindashboard/editproduct',{
					uname,file1,file2,file3,result:result,

				});
			}

			}
		});

	});

});


router.get('/addproduct',function(req,res){
	res.render('./admindashboard/addproduct');
});

router.post('/addproduct',function(req,res){
	var Image1 = req.body.Image1;
	if(Image1.length<1){
		Image1="https://i.imgur.com/S58Jnn6.jpg";
	}

	var data={
		productname: req.body.productname,
		age: req.body.age,
		image1: Image1,
		image2: req.body.Image2,
		image3: req.body.Image3,
		last_located: req.body.last_located,
		origin: req.body.origin,
		category: req.body.catagory || req.body.category,
		agent_name: req.body.agent_name,
		contact: req.body.details,
		reward: req.body.reward,
		promotion: req.body.promotion,
		date: date.format(new Date(), 'YYYY/MM/DD'),
		uname: req.session.loggedUser
	};

		
		dashboardModel.productInsert(data,function(valid){
			if(valid)
			{
				res.redirect('/admindashboard/productlist');
			}
			else
			{
				res.render('./error/error');
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
router.get('/deleteUser/:id?',function(req,res){
	var data={
		id: req.params.id	
	};
		{
			res.render('./admindashboard/deleteUser',data);
		}
});
router.post('/deleteUser',function(req,res){
	var data={
		accID: req.body.id,	
	};
		userModel.deleteAccount(data,function(valid){
		if(valid){
			res.redirect('/admindashboard/userlist');

		}
		else
		{
			res.redirect('/admindashboard/userlist');
		}
		
	});
});

router.post('/productdelete/:id?',function(req,res){
	var data={
		id:req.params.id
	};
	dashboardModel.productdelete(data,function(valid){
		if(valid)
			{
				res.redirect('/admindashboard/productlist');
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
	dashboardModel.productedit(data,function(result){
		res.render('./admindashboard/editproduct',{result:result});
	});
});
router.post('/productedit/:id?',function(req,res){
	var Image1 = req.body.Image1;
	if(Image1.length<1){
		Image1="https://i.imgur.com/S58Jnn6.jpg";
	}

	var data={
		id: req.params.id,
		productname: req.body.productname,
		price: req.body.price,
		image1: Image1,
		image2: req.body.Image2,
		image3: req.body.Image3,
		category: req.body.catagory,
		origin: req.body.origin,
		agent_name: req.body.agent_name,
		details: req.body.details,
		date: date.format(new Date(), 'YYYY/MM/DD'),
		uname: 'admin'
	};
	dashboardModel.productupdate(data,function(valid){
		
		if(valid)
			{
				res.redirect('/admindashboard/productlist');
			}
		else
			{
				res.render('./error/error');
			}
	});
});

router.post('/search',function(req,res){
	
	var table;
	var link;
	if(req.body.filter=="username" || req.body.filter=="email"  ){
		table = "user";
		link = 'userlist'
	}
	else if(req.body.filter=="lost_name"){
		table = "lost";
		link = 'productlist'
	}

	var data={
		lost_name: req.body.search,
		filter: req.body.filter,
		table,
	};

	var uname = req.session.loggedUser;
	var prevpage=0,nextpage=0;
	 dashboardModel.searchproduct(data,function(result){
	 	if(result && result!=null)
	 		{
	 			res.render("./admindashboard/"+link,{result: result,uname,prevpage,nextpage});
	 		}
	 	else 
	 		{
	 			res.render("./admindashboard/"+link,{errorMessage:{message:'Opps....No Search Result Found.'},result: result,uname,nextpage,prevpage});
	 		}
	 });
});


router.get('/advancesearch',function(req,res){
	res.render('./admindashboard/advancesearch');
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
	 			res.render('./admindashboard/productlist',{result: result,uname,prevpage,nextpage});
	 		}
	 	else 
	 		{
	 			res.render('./admindashboard/productlist',{errorMessage:{message:'Opps....No Search Result Found.'},result: result,uname,prevpage,nextpage});
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

