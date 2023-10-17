//<!-- Welcome Party Calendar Event-->
const welcome_config = {
	name: "Erin & Nick Wedding",
	startDate: "2025-05-31",
	startTime: "17:00",
	endDate: "2025-05-31",
	endTime: "23:00",
	timeZone: "America/New_York",
	location: "Icona Windrift, Avalon, NJ 08202",
	options: ['Apple', 'Google', 'Outlook.com', 'Yahoo'],
	trigger: "click",
	hideIconButton: true,
	hideBackground: true,
	hideCheckmark: true,
	label: "Save the Date",
	listStyle: "dropdown"
};
const welcome_button = document.getElementById('save-date-welcome');
if (welcome_button) {
	welcome_button.addEventListener('click', () => atcb_action(welcome_config, welcome_button));
}

//<!-- Ceremony Calendar Event-->
const ceremony_config = {
	name: "Erin & Nick Wedding",
	startDate: "2025-05-31",
	startTime: "17:00",
	endDate: "2025-05-31",
	endTime: "23:00",
	timeZone: "America/New_York",
	location: "Icona Windrift, Avalon, NJ 08202",
	options: ['Apple', 'Google', 'Outlook.com', 'Yahoo'],
	trigger: "click",
	hideIconButton: true,
	hideBackground: true,
	hideCheckmark: true,
	label: "Save the Date",
	listStyle: "dropdown"
};
const ceremony_button = document.getElementById('save-date-ceremony');
if (ceremony_button) {
	ceremony_button.addEventListener('click', () => atcb_action(ceremony_config, ceremony_button));
}

//<!-- Cocktail Hour Calendar Event-->
const cocktail_config = {
	name: "Erin & Nick Wedding",
	startDate: "2025-05-31",
	startTime: "17:00",
	endDate: "2025-05-31",
	endTime: "23:00",
	timeZone: "America/New_York",
	location: "Icona Windrift, Avalon, NJ 08202",
	options: ['Apple', 'Google', 'Outlook.com', 'Yahoo'],
	trigger: "click",
	hideIconButton: true,
	hideBackground: true,
	hideCheckmark: true,
	label: "Save the Date",
	listStyle: "dropdown"
};
const cocktail_button = document.getElementById('save-date-cocktail');
if (cocktail_button) {
	cocktail_button.addEventListener('click', () => atcb_action(cocktail_config, cocktail_button));
}

//<!-- Reception Calendar Event-->
const reception_config = {
	name: "Erin & Nick Wedding",
	startDate: "2025-05-31",
	startTime: "17:00",
	endDate: "2025-05-31",
	endTime: "23:00",
	timeZone: "America/New_York",
	location: "Icona Windrift, Avalon, NJ 08202",
	options: ['Apple', 'Google', 'Outlook.com', 'Yahoo'],
	trigger: "click",
	hideIconButton: true,
	hideBackground: true,
	hideCheckmark: true,
	label: "Save the Date",
	listStyle: "dropdown"
};
const reception_button = document.getElementById('save-date-reception');
if (reception_button) {
	reception_button.addEventListener('click', () => atcb_action(reception_config, reception_button));
}

//<!-- After Party Calendar Event-->
const after_config = {
	name: "Erin & Nick Wedding",
	startDate: "2025-05-31",
	startTime: "17:00",
	endDate: "2025-05-31",
	endTime: "23:00",
	timeZone: "America/New_York",
	location: "Icona Windrift, Avalon, NJ 08202",
	options: ['Apple', 'Google', 'Outlook.com', 'Yahoo'],
	trigger: "click",
	hideIconButton: true,
	hideBackground: true,
	hideCheckmark: true,
	label: "Save the Date",
	listStyle: "dropdown"
};
const after_button = document.getElementById('save-date-after');
if (after_button) {
	after_button.addEventListener('click', () => atcb_action(after_config, after_button));
}

//<!-- Next Day Party Calendar Event-->
const next_config = {
	name: "Erin & Nick Wedding",
	startDate: "2025-05-31",
	startTime: "17:00",
	endDate: "2025-05-31",
	endTime: "23:00",
	timeZone: "America/New_York",
	location: "Icona Windrift, Avalon, NJ 08202",
	options: ['Apple', 'Google', 'Outlook.com', 'Yahoo'],
	trigger: "click",
	hideIconButton: true,
	hideBackground: true,
	hideCheckmark: true,
	label: "Save the Date",
	listStyle: "dropdown"
};
const next_button = document.getElementById('save-date-next');
if (next_button) {
	next_button.addEventListener('click', () => atcb_action(next_config, next_button));
}

window.onload = function () {
	var line = document.getElementById('fh5co-header');
	const page_height = window.outerHeight * .8
	if (line) {
		line.style.height = page_height + 'px';
	}
}

window.onload = function () {
	var line = document.getElementById('fh5co-header-home');
	const page_height = window.outerHeight
	if (line) {
		line.style.height = page_height + 'px';
	}
}

var mobileMenuOutsideClick = function () {

	$(document).click(function (e) {
		var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
		if (!container.is(e.target) && container.has(e.target).length === 0) {

			if ($('body').hasClass('offcanvas')) {

				$('body').removeClass('offcanvas');
				$('.js-fh5co-nav-toggle').removeClass('active');
			}
		}
	});

};

var offcanvasMenu = function () {

	$('#page').prepend('<div id="fh5co-offcanvas" />');
	$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
	var clone1 = $('.menu-1 > ul').clone();
	$('#fh5co-offcanvas').append(clone1);
	var clone2 = $('.menu-2 > ul').clone();
	$('#fh5co-offcanvas').append(clone2);

	$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
	$('#fh5co-offcanvas')
		.find('li')
		.removeClass('has-dropdown');

	// Hover dropdown menu on mobile
	$('.offcanvas-has-dropdown').mouseenter(function () {
		var $this = $(this);

		$this
			.addClass('active')
			.find('ul')
			.slideDown(500, 'easeOutExpo');
	}).mouseleave(function () {

		var $this = $(this);
		$this
			.removeClass('active')
			.find('ul')
			.slideUp(500, 'easeOutExpo');
	});


	$(window).resize(function () {

		if ($('body').hasClass('offcanvas')) {

			$('body').removeClass('offcanvas');
			$('.js-fh5co-nav-toggle').removeClass('active');

		}
	});
};

var burgerMenu = function () {

	$('body').on('click', '.js-fh5co-nav-toggle', function (event) {
		var $this = $(this);


		if ($('body').hasClass('overflow offcanvas')) {
			$('body').removeClass('overflow offcanvas');
		} else {
			$('body').addClass('overflow offcanvas');
		}
		$this.toggleClass('active');
		event.preventDefault();

	});
};

var contentWayPoint = function () {
	var i = 0;
	$('.animate-box').waypoint(function (direction) {

		if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

			i++;

			$(this.element).addClass('item-animate');
			setTimeout(function () {

				$('body .animate-box.item-animate').each(function (k) {
					var el = $(this);
					setTimeout(function () {
						var effect = el.data('animate-effect');
						if (effect === 'fadeIn') {
							el.addClass('fadeIn animated-fast');
						} else if (effect === 'fadeInLeft') {
							el.addClass('fadeInLeft animated-fast');
						} else if (effect === 'fadeInRight') {
							el.addClass('fadeInRight animated-fast');
						} else {
							el.addClass('fadeInUp animated-fast');
						}

						el.removeClass('item-animate');
					}, k * 200, 'easeInOutExpo');
				});

			}, 100);

		}

	}, { offset: '85%' });
};

var goToTop = function () {

	$('.js-gotop').on('click', function (event) {

		event.preventDefault();

		$('html, body').animate({
			scrollTop: $('html').offset().top
		}, 500, 'easeInOutExpo');

		return false;
	});

	$(window).scroll(function () {

		var $win = $(window);
		if ($win.scrollTop() > 200) {
			$('.js-top').addClass('active');
		} else {
			$('.js-top').removeClass('active');
		}

	});

};

var loaderPage = function () {
	$(".fh5co-loader").fadeOut("slow");
};

$(function () {
	mobileMenuOutsideClick();
	offcanvasMenu();
	burgerMenu();
	contentWayPoint();
	goToTop();
	loaderPage();
});
