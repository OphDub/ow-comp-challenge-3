$('.side-nav-reveal').on('click', function() {
	$('.side-nav').animate({width: 'toggle'}, 30);
});

$('.stat-chevron').on('click', function() {
	$('.stat-dropdown').slideToggle(300);
});