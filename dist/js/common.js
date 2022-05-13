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
		//Hide the menu when scrolling
		$(window).scroll(function() {
			let scroll = $(this).scrollTop();
			if( scroll > 500 ) {
				$('#menu-bar').prop('checked', false);
				if($(window).width() < 1279){
					$(".header__middle").css({"display": "none"});
					$(".header__middle").removeClass("header__mobile");
				}
			}
		});
		//Animation
		AOS.init();
		//Slider Index-page
		var swiper = new Swiper(".mySwiper-2", {
			slidesPerView: 1,
			spaceBetween: 50,
			loop: true,
			grabCursor: true,
			autoplay: {
				delay: 5000,
			},
		});
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


		var swiper = new Swiper(".card__slider-1", {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			watchSlidesProgress: true,
			allowTouchMove: false,
		});
		var swiper3 = new Swiper(".card__slider-2", {
			slidesPerView: 6,
			spaceBetween: 13,
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
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 6,
				},
				1025: {
					slidesPerView: 5,
				},
				1440: {
					slidesPerView: 6,
				},
				
			}
		});


		let options = {
			spacing: 0,      
			acceleration: 150, 
			fps: 60, 
			selector: ":scope > *",
			stopCallback: function({detail: { prize }}) {
				console.log("stop");
				console.log(`Selected prize index is: ${prize.index}`);
			},
			startCallback: function({detail: { prize }}) {
				console.log("start");
			}
		};
		
		let roulette = new Roulette(".roulette", options);
		
		let mins = 0;
		let maxs = $(".roulette__list").children().length;

		function selfRandom(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		document.getElementById("start").addEventListener("click", function() {
			roulette.rotateTo(selfRandom(mins, maxs), { tracks: 1, random: true });
		});

		$('input[name="rad"]').click(function(){
			let target = $(this).val();
			price__result = 49;
			let result = target * price__result;
			$(".price-result").html('&nbsp'+result);
		});

	});
})(jQuery);