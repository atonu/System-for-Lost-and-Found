var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	/*if(!req.session.username)
	{
		res.redirect('/login');
		return;
	}*/
	res.render('home/index', {name: req.session.username});

});


module.exports = router;