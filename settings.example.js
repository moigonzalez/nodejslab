module.exports = {
	ENV: function () {
		return 'DEV';
	}(),
	PORT: function () {
		return '2000';
	}(),
	IP: function () {
		return '127.0.0.1';
	}(),
	STATIC_FILES_PREFIX: function () {
		return '/';
	}(),
	RENDERED_POSTS_EP: function () {
		return '/ajax/blogposts';
	}(),
	BLOG_POSTS_EP: function () {
		return 'http://localhost:8888/moigonz.com/blogposts';
	}()
};