var twig = require('twig');

function ContentRenderer() {}

ContentRenderer.prototype.renderBlogPosts = function(content, callback) {
	var data = JSON.parse(content);
	twig.renderFile('views/partials/blogposts.twig', {posts: data}, function (err, html) {
		return callback(html);
	});
}

ContentRenderer.prototype.renderBlogPost = function(content, callback) {
	var data = JSON.parse(content);
	console.log(data);
	twig.renderFile('views/modals/blogpost.twig', {post: data}, function (err, html) {
		return callback(html);
	});
}

module.exports = ContentRenderer;