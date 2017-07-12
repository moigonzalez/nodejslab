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
				}, 100);
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
		$('[data-el-ajax-single-blogpost]').on('click', function(e) {
			e.preventDefault();
			getSingleBlogPost($(e.currentTarget).attr('data-el-ajax-single-blogpost'));
		});
	}


	function getSingleBlogPost(nid) {

		if ($('#modal-nid-' + nid).length > 0) {
			$('#modal-nid-' + nid).modal('show');
			return;
		}

		$.ajax({
			url: '/ajax/blogpost/' + nid,
			success: function (data) {
				var insertedModal = $('body').append(data);
				$('#modal-nid-' + nid).modal('show');
				$('#modal-nid-' + nid).find('[data-dismiss]').on('click', function(e) {
					$('#modal-nid-' + nid).modal('hide');
				})
			},
			error: function (req, status, err) {
				console.log(req, status, err);
			}
		});
	}

})();