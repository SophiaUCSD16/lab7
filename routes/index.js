var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	projects["min"] = false;
	console.log("min is false");
  	res.render('index', projects);
};

exports.viewMin = function(req, res){
	projects["min"] = true;
	console.log("min is true");
  	res.render('index', projects);
};
