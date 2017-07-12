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
	BLOG_POSTS_EP: function () {
		return 'http://localhost:8888/moigonz.com/blogposts/';
	}(),
	BLOG_POST_EP: function () {
		return 'http://localhost:8888/moigonz.com/blogpost/';
	}()
};