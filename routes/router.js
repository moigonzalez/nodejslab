var express = require('express');
var router = express.Router();
var ContentDeliverer = require('../content_delivery/contentDeliverer.js');
var ContentRenderer = require('../content_delivery/contentRenderer.js');

router.get('/', function(req, res) {
	res.render('home');
});

router.get('/ajax/blogposts', function (req, res) {
	var content = new ContentDeliverer();
	var renderedContent = new ContentRenderer();
	content.getBlogPosts(function(data) {
		renderedContent.renderBlogPosts(data, function (html) {
			res.send(html);
		});
	});
});

router.get('/ajax/blogpost/%', function (req, res) {
	var content = new ContentDeliverer();
	var renderedContent = new ContentRenderer();
	content.getBlogPost(function(data) {
		
		// renderedContent.renderBlogPosts(data, function (html) {
		// 	res.send(html);
		// });
	});
});

router.get('/about', function(req, res) {
	res.render('about');
});

router.get('*', function(req, res) {
	res.render('404');
});

module.exports = router;