var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){
	res.render('login/index');

});

router.get('/logout', function(req, res){
	res.render('login/index');

});

router.post('/', function(req, res){
	var un = req.body.username;
	var ps = req.body.password;
	
	userModel.validateUser(un, ps, function(valid){
		if(valid)
		{
			req.session.username = un;
			res.redirect('/home');
		}
		else
		{
			res.send('Invalid username or password');
		}
	});
	

});

module.exports = router;