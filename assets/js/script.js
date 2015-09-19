$(document).ready(function(){

	/* This handles the submenu class for the body tag. It is not important if you
     * use the class tag initial, it will be added or removed if a submenu is available
     */
    if ( $(".submenuWrapper").length ) {
        $(document.body).addClass('withSubmenu');
    } else {
        $(document.body).removeClass('withSubmenu');
    }


	// var navOffset = parseInt($('body.withSubmenu').css('padding-top'));
	// $('body').scrollspy({ target: '#scrollSpy', offset: navOffset+10 });
	// $('.submenu a').click(function (event) {
	// 	var scrollPos = jQuery('body').find($(this).attr('href')).offset().top - navOffset;
	// 	$('body,html').animate({ scrollTop: scrollPos}, 500, function () {});
	// 	return false;
	// });
	
	
	// $(".submenu li a").on("click", function(event) {
	// 	event.preventDefault();
	// 	var id = $(this).attr("href");
	// 	goToByScroll(id);
	// 	return false;
	// });
	// function goToByScroll(id){
	// 	$('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
	// }
});

