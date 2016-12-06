var express = require('express');
var router = express.Router();
var ContentDeliverer = require('../content_delivery/contentDeliverer.js');

router.get('/', function(req, res) {
	var content = new ContentDeliverer();
	content.getBlogPosts(function(data) {
		res.render('home', 
			{ posts: JSON.parse(data) }
		);
	});
});

router.get('/about', function(req, res) {
	res.render('about');
});

router.get('*', function(req, res) {
	res.render('404');
});

module.exports = router;