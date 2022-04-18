(function ($) {
	$(document).ready(function () {
		//Mobile menu
		$('#menu-bar').on('click', function () {
			if ( $(this).is(':checked') ) {
				$(".header__middle").css({"display": "flex"});
				$(".header__middle").addClass("header__mobile");
			} else {
				$(".header__middle").css({"display": "none"});
				$(".header__middle").removeClass("header__mobile");
			}
		})
		//Hiden menu to scroll
		$(window).scroll(function() {
			let scroll = $(this).scrollTop();
			if( scroll > 500 ) {
				$('#menu-bar').prop('checked', false);
				$(".header__middle").css({"display": "none"});
				$(".header__middle").removeClass("header__mobile");
			}
		});
		//Animation
		AOS.init();
		//Slider Index-page
		var swiper = new Swiper(".mySwiper", {
			slidesPerView: 1,
			spaceBetween: 500,
			loop: true,
			freeMode: true,
			watchSlidesProgress: true,
			pagination: {
				el: ".swiper-pagination",
			},
			breakpoints: {
				310: {
					slidesPerView: 1,
					allowTouchMove: true,
					spaceBetween: 50,
				},
				1025: {
					speed: 1000,
					spaceBetween: 500,
					slidesPerView: 1,
					allowTouchMove: false,
				},
			}
		});
		var swiper2 = new Swiper(".mySwiper-1", {
			slidesPerView: 5,
			spaceBetween: 30,
			grabCursor: true,
			loop: true,
			speed: 1000,
			autoplay: {
				delay: 5000,
			},
			thumbs: {
				swiper: swiper,
			},
			breakpoints: {
				310: {
					slidesPerView: 1,
					autoplay: false,
				},
				768: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 3,
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 38,
				},
				1366: {
					spaceBetween: 15,
					slidesPerView: 5,
				},
				1441: {
					spaceBetween: 30,
					slidesPerView: 5,
				},
			}
		});

	});
})(jQuery);