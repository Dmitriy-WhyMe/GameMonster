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

		
		//База игр для рулетки
		let arrGames = [];

		arrGames[0] = {
			id: "1",
			name: "Battlefield 4",
			urlImage: "img/roulletka/1.jpg",
			chance: "20%",
			price: "120",
			nameCase: "Epic"
		}
		arrGames[1] = {
			id: "2",
			name: "GEARS 5",
			urlImage: "img/roulletka/2.jpeg",
			chance: "10%",
			price: "200",
			nameCase: "Epic"
		}
		arrGames[2] = {
			id: "3",
			name: "Crysis 3",
			urlImage: "img/roulletka/3.jpg",
			chance: "20%",
			price: "300",
			nameCase: "Epic"
		}
		arrGames[3] = {
			id: "4",
			name: "Just Cause 2",
			urlImage: "img/roulletka/4.jpg",
			chance: "10%",
			price: "400",
			nameCase: "Epic"
		}
		arrGames[4] = {
			id: "5",
			name: "Far Cry 5",
			urlImage: "img/roulletka/5.jpg",
			chance: "15%",
			price: "500",
			nameCase: "Common"
		}
		arrGames[5] = {
			id: "6",
			name: "Batman",
			urlImage: "img/roulletka/6.jpeg",
			chance: "10%",
			price: "600",
			nameCase: "Common"
		}
		arrGames[6] = {
			id: "7",
			name: "Watch dogs 2",
			urlImage: "img/roulletka/7.jpg",
			chance: "5%",
			price: "700",
			nameCase: "Legend"
		}
		arrGames[7] = {
			id: "8",
			name: "Overwatch Delux Edition",
			urlImage: "img/roulletka/8.png",
			chance: "5%",
			price: "800",
			nameCase: "Legend"
		}
		
		//Разделение основной базы на отдельные для каждого кейса
		const arrGamesEpic = arrGames.filter(n => n.nameCase == 'Epic');
		const arrGamesCommon = arrGames.filter(n => n.nameCase == 'Common');
		const arrGamesLegend = arrGames.filter(n => n.nameCase == 'Legend');

		//Получаем данные из массива arrGames и прокидываем в html для кейса Epic
		priceAllGameEpic = [];
		arrGamesEpic.forEach((element) => {
			priceAllGameEpic.push(element.price);
		});
		let countAllGameCaseEpic = arrGamesEpic.length;
		let priceCaseEpic = 49;
		let minPriceCaseEpic = Math.min(...priceAllGameEpic);
		let maxPriceCaseEpic = Math.max(...priceAllGameEpic);
		let profitCaseEpic = (maxPriceCaseEpic / priceCaseEpic) * 10;
		$(".countAllGameEpic").html(countAllGameCaseEpic);
		$(".priceCaseEpic").html(priceCaseEpic + '₽');
		$(".minPriceGameEpic").html(minPriceCaseEpic + '₽');
		$(".profitGameEpic").html(Math.round(profitCaseEpic) + '%');

		//Получаем данные из массива arrGames и прокидываем в html для кейса Common
		priceAllGameCommon = [];
		arrGamesCommon.forEach((element) => {
			priceAllGameCommon.push(element.price);
		});
		let countAllGameCommon = arrGamesCommon.length;
		let priceCaseCommon = 59;
		let minPriceCaseCommon = Math.min(...priceAllGameCommon);
		let maxPriceCaseCommon = Math.max(...priceAllGameCommon);
		let profitCaseCommon = (maxPriceCaseCommon / priceCaseCommon) * 10;
		$(".countAllGameCommon").html(countAllGameCommon);
		$(".priceCaseCommon").html(priceCaseCommon + '₽');
		$(".minPriceGameCommon").html(minPriceCaseCommon + '₽');
		$(".profitGameCommon").html(Math.round(profitCaseCommon) + '%');
		//Получаем данные из массива arrGames и прокидываем в html для кейса Legend
		priceAllGameLegend = [];
		arrGamesLegend.forEach((element) => {
			priceAllGameLegend.push(element.price);
		});
		let countAllGameLegend = arrGamesLegend.length;
		let priceCaseLegend = 69;
		let minPriceCaseLegend = Math.min(...priceAllGameLegend);
		let maxPriceCaseLegend = Math.max(...priceAllGameLegend);
		let profitCaseLegend = (maxPriceCaseLegend / priceCaseLegend) * 10;
		$(".countAllGameLegend").html(countAllGameLegend);
		$(".priceCaseLegend").html(priceCaseLegend + '₽');
		$(".minPriceGameLegend").html(minPriceCaseLegend + '₽');
		$(".profitGameLegend").html(Math.round(profitCaseLegend) + '%');
		//Очищаем рулетку от прошлого кейса
		function clearRoulette() {
			arrGamesRandom = [];
		}
		function main(params) {
			//Настройка параметров рулетки
			let options = {
				spacing: 0,      
				acceleration: 150, 
				fps: 60, 
				selector: ":scope > *",
				stopCallback: function({detail: { prize }}) {
					//console.log("stop");
					document.getElementById("start").disabled = false; 
					$('#start').removeClass('btn-disable');
					console.log(`Selected prize index is: ${prize.index}`);
					document.getElementById("CaseEpic").disabled = false;
					document.getElementById("CaseCommon").disabled = false;
					document.getElementById("CaseLegend").disabled = false;
				},
				startCallback: function({detail: { prize }}) {
					//console.log("start");
					document.getElementById("start").disabled = true;
					$('#start').addClass('btn-disable');
					document.getElementById("CaseEpic").disabled = true;
					document.getElementById("CaseCommon").disabled = true;
					document.getElementById("CaseLegend").disabled = true;
				}
			};
	
			function GameArray(id, urlImage, price, countCopiesGame, name) {
				this.id = id;
				this.name = name;
				this.urlImage = urlImage;
				this.price = price;
				this.countCopiesGame = countCopiesGame;
			}
			//Из процентов делаем количество игры и отправляем всё это в новый массив(arrGamesRandom)
			let arrGamesRandom = [];
			function countChance(arr) {
				arr.forEach((element) => {
					let countCopiesGame = parseFloat(element.chance);
					for (let index = 0; index < countCopiesGame; index++) {
						let myGame = new GameArray(element.id, element.urlImage, element.price, countCopiesGame, element.name);
						arrGamesRandom.push(myGame);
					}
				});
			}
			countChance(params);
			//Перемешиваем игры в рулетке при помощи алгоритма Тасование Фишера — Йетса
			function shuffle(array) {
				for (let i = array.length - 1; i > 0; i--) {
				let j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
				}
			}
			shuffle(arrGamesRandom);
			//Заполняем рулетку играми
			function innerRoulette() {
				let innerHtml = "";
				arrGamesRandom.forEach((element, index) => {
					innerHtml += '<div class="prize-item"><img class="fortune__img" src="' + element.urlImage + '" alt=""><div class="prize-item__title">' + element.name + '</div></div>';
				});
				$(".roulette").html(innerHtml);
			}
			innerRoulette();
			//Рандомная игра из массива(arrGamesRandom)
			function arrayRandElement(arrGamesRandom) {
				var rand = Math.floor(Math.random() * arrGamesRandom.length);
				return arrGamesRandom[rand];
			}

			//Запуск рулетки
			function startRoulette() {
				let roulette = new Roulette(".roulette", options);
				document.getElementById("start").addEventListener("click", function() {
					//Получаем выигранную игру
					let winGame = arrayRandElement(arrGamesRandom);
					//Получаем индекс выигранной игры
					winGameIndex = arrGamesRandom.indexOf(winGame);
					//console.log(winGame);
					//console.log(winGameIndex);
					//Отправляем индекс в скрипт рулетки
					roulette.rotateTo(winGameIndex, { tracks: 1, random: true });
				});
			}
			startRoulette();
		}

		document.getElementById("CaseEpic").addEventListener("click", function() {
			clearRoulette();
			main(arrGamesEpic);
		});
		document.getElementById("CaseCommon").addEventListener("click", function() {
			clearRoulette();
			main(arrGamesCommon);
		});
		document.getElementById("CaseLegend").addEventListener("click", function() {
			clearRoulette();
			main(arrGamesLegend);
		});

		document.getElementById('CaseCommon').click();
		//Радио баттоны с шансами
		$('input[name="rad"]').click(function(){
			let target = $(this).val();
			let result = target * priceCaseEpic;
			$(".price-result").html('&nbsp'+result);
		});

	});
})(jQuery);