$(window).on("load",function () {
    $('.fade_from_static').css({ position: 'relative',opacity: '0' });
    $('.fade_from_left').css({ position: 'relative',opacity: '0',left: '-6vw' });
    $('.fade_from_right').css({ position: 'relative',opacity: '0',right: '-6vw' });
    $('.fade_from_top').css({ position: 'relative',opacity: '0',top: '-10vh' });
    $('.fade_from_bottom').css({ position: 'relative',opacity: '0',top: '10vh' });


    $(window).scroll(function () {
        let windowTop = $(window).scrollTop();
        // let windowTop = $(this).scrollTop() - $(this).innerHeight()
        let windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $('.fade_from_left').each(function () {
            let objectBottom = $(this).offset().top + $(this).outerHeight() / 1.5;
            let objectTop = $(this).offset().top;

            // If object in window bound == we can see it
            if (objectBottom < windowBottom) {
                if ($(this).css("opacity") == 0) {
                    // $(this).css({display: 'flex'});
                    $(this).fadeIn(500).animate({ opacity: '1',left: '0' });
                }
            }
        });

        $('.fade_from_right').each(function () {
            let objectBottom = $(this).offset().top + $(this).outerHeight() / 1.5;
            let objectTop = $(this).offset().top;

            // If object in window bound == we can see it
            if (objectBottom < windowBottom) {
                if ($(this).css("opacity") == 0) {
                    // $(this).css({display: 'flex'});
                    $(this).fadeIn(500).animate({ opacity: '1',right: '0' });
                }
            }
        });

        $('.fade_from_top').each(function () {
            let objectBottom = $(this).offset().top + $(this).outerHeight() / 1.5;
            let objectTop = $(this).offset().top;

            // If object in window bound == we can see it
            if (objectBottom < windowBottom) {
                if ($(this).css("opacity") == 0) {
                    $(this).fadeIn(500).animate({ opacity: '1',top: '0' });
                }
            }
        });

        $('.fade_from_bottom').each(function () {
            let objectBottom = $(this).offset().top + $(this).outerHeight() / 1.5;
            let objectTop = $(this).offset().top;

            // If object in window bound == we can see it
            if (objectBottom < windowBottom) {
                if ($(this).css("opacity") == 0) {
                    $(this).fadeIn(500).animate({ opacity: '1',top: '0' });
                }
            }
        });

        $('.fade_from_static').each(function () {
            let objectBottom = $(this).offset().top + $(this).outerHeight() / 1.5;
            let objectTop = $(this).offset().top;

            // If object in window bound == we can see it
            if (objectBottom < windowBottom) {
                if ($(this).css("opacity") == 0) {
                    // $(this).css({display: 'flex'});
                    $(this).fadeIn(700).animate({ opacity: '1' });
                }
            }
        });




    }).scroll()
});