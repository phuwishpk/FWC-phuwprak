$(document).ready(function() {
    $('section .container').addClass('fade-element');

    function checkScroll() {
        var windowHeight = $(window).height();
        var scrollPos = $(window).scrollTop();

        $('.fade-element').each(function() {
            var elementPos = $(this).offset().top;
            if (scrollPos + windowHeight > elementPos + 100) {
                $(this).addClass('visible');
            }
        });
    }

    $(window).on('scroll', checkScroll);
    checkScroll();
});
