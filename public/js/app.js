(function () {

	$.ajax({
		url: "ajax/blogposts",
		success: function (data) {
			appendBlogPosts(data);
		},
		error: function (req, status, err) {
			console.log(req, status, err);
		}
	});

	function appendBlogPosts(html) {
		var SELECTOR = $('[data-el-ajax="blogposts"]');
		SELECTOR.css({'opacity': '0'});
		SELECTOR.html(html);
		SELECTOR.css({'opacity': '1'});
	}

})();