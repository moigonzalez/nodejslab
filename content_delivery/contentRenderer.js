var twig = require('twig');

function ContentRenderer() {}

ContentRenderer.prototype.renderBlogPosts = function(content, callback) {
	var data = JSON.parse(content);
	twig.renderFile('views/partials/blogposts.twig', {posts: data}, function (err, html) {
		return callback(html);
	});
}

module.exports = ContentRenderer;