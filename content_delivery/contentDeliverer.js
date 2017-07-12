var settings = require('../settings');
var request = require('request');

function ContentDeliverer() {}

ContentDeliverer.prototype.getBlogPosts = function (callback) {
	request(settings.BLOG_POSTS_EP, function (error, response, body) {
		return callback(body);
	});
};

ContentDeliverer.prototype.getBlogPost = function (postId, callback) {
	request(settings.BLOG_POST_EP + postId, function (error, response, body) {
		return callback(body);
	});
};

module.exports = ContentDeliverer;