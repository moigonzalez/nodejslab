var settings = require('../settings');
var request = require('request');

function BlogPosts() {}

BlogPosts.prototype.getBlogPosts = function (callback) {
	request(settings.BLOG_POSTS_EP, function (error, response, body) {
		return callback(body);
	});
};

module.exports = BlogPosts;