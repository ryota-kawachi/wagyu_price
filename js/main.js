$(function() {
	$(document).on('click', '#page-top > a[href="#"]', function() {
		event.preventDefault();
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
  });
});