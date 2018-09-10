 //Diclaration
 const express = require('express');
 const multer = require('multer');
 const ejs = require('ejs');
 const path = require('path');
 var app=express();
 var index=require('./controllers/index');
 var cart=require('./controllers/cart');
 var login=require('./controllers/login');
 var user=require('./controllers/user');
 var reg=require('./controllers/reg');
 var adminlogin=require('./controllers/adminlogin');
 var admindashboard=require('./controllers/admindashboard');
 var error=require('./controllers/error');
 var logout=require('./controllers/logout');
 var user = require('./controllers/user');
 var checkUser=require('./controllers/checkUser');
 var checkout=require('./controllers/checkout');
 var bodyParser=require('body-parser');
 var expressSession=require('express-session');
 var alertnode=require('alert-node');
 var indexx = require.main.require('./models/index');

 var port=1234;
//COnfigure
app.set('view engine','ejs');

//Middlewire
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressSession({secret: 'My secret',resave: false,saveUninitialized: true}));

app.get('/',function(req,res){
	res.redirect('/index');
});
// Static
app.use(express.static(path.join(__dirname, './Asset')));



app.all('*/*',function(req,res,next){
	if(req.url=='/index' ||req.url=='/login' ||req.url=='/adminlogin' ||req.url=='/' ||req.url=='/reg' || req.url=='/advancesearch')

	{
		next();
		return;
	}
	// if(req.session.loggedUser==null)
	// {
	// 	res.redirect('/login');
    
	// }

  if(req.session.loggedUser == null)
  {
    req.session.loggedUser="Guest";
    res.send("Server Restarted. Refresh page to continue");
  }

	else
	{
		next();
	}
});


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


// EJS
app.set('view engine', 'ejs');

// Public Folder
app.use(express.static('./public'));



//Route
app.use('/index',index);
app.use('/cart',cart);
app.use('/login',login);
app.use('/user',user);
app.use('/reg',reg);
app.use('/adminlogin',adminlogin);
app.use('/admindashboard',admindashboard);
app.use('/error',error);
app.use('/logout',logout);
app.use('/checkUser',checkUser);
app.use('/checkout',checkout);
app.use('/user',user);
//Server setup
app.listen(port,function(){
	console.log('Started port '+port);
});