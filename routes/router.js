var express = require('express');
var router = express.Router();
var BlogPosts = require('../content_delivery/blogPosts.js');

router.get('/', function(req, res) {
	var blogPosts = new BlogPosts();
	blogPosts.getBlogPosts(function(data) {
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