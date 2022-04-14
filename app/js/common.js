(function ($) {
	$(document).ready(function () {
		$('#menu-bar').on('click', function () {
			if ( $(this).is(':checked') ) {
				$(".header__middle").css({"display": "flex"});
				$(".header__middle").addClass("header__mobile");
			} else {
				$(".header__middle").css({"display": "none"});
				$(".header__middle").removeClass("header__mobile");
			}
		})

	});
})(jQuery);