(function () {

	init();
	
	function init() {
		var RENDERED_POSTS_EP = $('#rendered_posts_ep').val();

		$.ajax({
			url: RENDERED_POSTS_EP,
			success: function (data) {
				setTimeout(function () {
					appendBlogPosts(data);
					addEventListeners();
				}, 1000);
			},
			error: function (req, status, err) {
				console.log(req, status, err);
			}
		});
	}

	function appendBlogPosts(html) {
		var SELECTOR = $('[data-el-ajax="blogposts"]');
		SELECTOR.addClass('s-hidden').html(html);
		setTimeout(function () {
			SELECTOR.removeClass('s-hidden');
		}, 300);
	}

	function addEventListeners() {
		openSingleBlogPost();
	}

	function openSingleBlogPost() {
		$('[data-el-ajax-single-blogpost]').on('click', (e) => {
			e.preventDefault();
			getSingleBlogPost($(e.currentTarget).attr('data-el-ajax-single-blogpost'));
		});
	}

	function getSingleBlogPost(nid) {
		$.ajax({
			url: `/ajax/blogpost/{nid}`,
			success: function (data) {
				console.log(data);
			},
			error: function (req, status, err) {
				console.log(req, status, err);
			}
		});
	}

})();