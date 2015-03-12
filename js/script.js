var introBottom, portfolioBottom, pageBottom;

$(function() {
    introBottom =  $('#intro').outerHeight() / 2;
    portfolioBottom =  $('#intro').outerHeight() + ($('#portfolio').outerHeight() / 2);
    pageBottom = $(document).height();

    $(window).resize(function () {
        introBottom =  $('#intro').outerHeight() / 2;
        portfolioBottom =  $('#intro').outerHeight() + ($('#portfolio').outerHeight() / 2);
        pageBottom = $(document).height();
    });

    redrawNavigation();

    $(window).bind('scroll', function(e) {
        redrawNavigation();
    });

    $('nav#primary li').hover(
        function () {
            $(this).children('h6').eq(0).fadeIn();
            $(this).children('a').eq(0).addClass('hover');
        },
        function () {
            $(this).children('h6').eq(0).fadeOut();
            $(this).children('a').eq(0).removeClass('hover');
        }
    );

    $('nav#primary li').click(
        function () {
            $(this).children('a').eq(0)[0].click();
        }
    );

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

function hideAddressBar() {
    if(!window.location.hash) {
        if(document.height < window.outerHeight) {
            document.body.style.height = (window.outerHeight + 50) + 'px';
        }
        setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
    }
}
window.addEventListener("load", function() { if(!window.pageYOffset){ hideAddressBar(); } } );
window.addEventListener("orientationchange", hideAddressBar );

/* Set navigation dots to an active state as the user scrolls */
function redrawNavigation() {
    $('nav#primary').removeClass('invert');
    $('nav#primary a').removeClass('active');
    if($(document).scrollTop() < introBottom) {
        $('nav#primary a#intro-nav').addClass('active');
    } else if ($(document).scrollTop() < portfolioBottom) {
        $('nav#primary').addClass('invert');
        $('nav#primary a#portfolio-nav').addClass('active');
    } else if ($(document).scrollTop() < pageBottom) {
        $('nav#primary a#connect-nav').addClass('active');
    }
}