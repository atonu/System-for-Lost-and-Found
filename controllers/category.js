var express = require('express');
var router = express.Router();
var categoryModel = require.main.require('./models/category-model');
var valudationRules = require.main.require('./validation_rules/rules');
var asyncValidator = require('async-validator');


router.get('/', function(req, res){
	categoryModel.getAll(function(result){
		var data = {
			catList: result
		};
		res.render('category/list', data);
	});
});

router.get('/create', function(req, res){
	res.render('category/create', {errs: []});
});

router.post('/create', function(req, res){

	var rules = valudationRules.category.create;

	var data = {
		name: req.body.catname,
		desc: req.body.desc
	};

	var validator = new asyncValidator(rules);

	validator.validate(data, function(errors, fields){
		if(!errors)
		{
			categoryModel.insert(req.body.catname, req.body.desc, function(obj){
				res.redirect('/categories');
			});
		}
		else
		{
			console.log(fields);
			res.render('category/create', {errs: errors});
		}
	});

			
});

router.get('/edit/:id', function(req, res){
	var id = req.params.id;
	categoryModel.get(id, function(cat){
		res.render('category/edit', {category: cat, errs: []});
	});
});

router.post('/edit/:id', function(req, res){
	
	var cat = {
		id: req.body.catid,
		name: req.body.catname,
		desc: req.body.desc
	};

	var rules = valudationRules.category.edit;

	var validator = new asyncValidator(rules);

	validator.validate(cat, function(errors, fields){
		if(!errors)
		{
			categoryModel.update(cat, function(obj){
				res.redirect('/categories');
			});
		}
		else
		{
			res.render('category/edit', {category: cat, errs: errors});
		}
	});

});

module.exports = router;
