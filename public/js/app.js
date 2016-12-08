(function () {
	
	var RENDERED_POSTS_EP = $('#rendered_posts_ep').val();

	$.ajax({
		url: RENDERED_POSTS_EP,
		success: function (data) {
			setTimeout(function () {
				appendBlogPosts(data);
			}, 200);
		},
		error: function (req, status, err) {
			console.log(req, status, err);
		}
	});

	function appendBlogPosts(html) {
		var SELECTOR = $('[data-el-ajax="blogposts"]');
		SELECTOR.html(html).addClass('show');
	}

})();