(function($) {
    "use strict";

    /* ============= Preloader Close on Click ============= */
    if ($('.loader-wrapper').length) {
        $('.loader-wrapper').on('click', function() {
            $(this).fadeOut();
        });
    }

    /* ============= Homepage Slider ============= */
    if ($('.flexslider').length) {
        $('.flexslider').flexslider({
            animation: "fade"
        });
    }

    /* ============= Partner Logo Carousel ============= */
    if ($('.logo-slides').length) {
        $(".logo-slides").owlCarousel({
            autoplay: true,
            autoplayTimeout: 3000,
            loop: true,
            margin: 10,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                767: {
                    items: 3
                },
                991: {
                    items: 4
                },
                1199: {
                    items: 5
                }
            }
        });
    }

    /* ============= Percentage Slider ============= */
    if ($('#skills').length) {
        var skillsDiv = $('#skills');

        $(window).on('scroll', function() {
            var winT = $(window).scrollTop(),
                winH = $(window).height(),
                skillsT = skillsDiv.offset().top;
            if (winT + winH > skillsT) {
                $('.skillbar').each(function() {
                    $(this).find('.skillbar-bar').animate({
                        width: $(this).attr('data-percent')
                    }, 2000);
                });
            }
        });
    }

    /* ============= Service Slider ============= */
    if ($('.service-slider').length) {
        $('.service-slider').flexslider({
            animation: "slide",
            controlNav: false,
            directionNav: true,
            touch: true
        });
    }

    /* ============= Blog Slider ============= */
    if ($('.blog-slide').length) {
        $('.blog-slide').flexslider({
            controlNav: false,
            animation: "slide"
        });
    }

    /* ============= Stats Counter ============= */
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 1500
        });
    }

    /* ============= Preloader on Window Load ============= */
    $(window).load(function() {
        if ($('.loader-wrapper').length) {
            $('.loader-wrapper').fadeOut();
        }
    });

})(jQuery);

/* ============= PDF Catalog View More Function ============= */
// Keep this outside the jQuery IIFE since it uses vanilla JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    const moreDocs = document.getElementById('moreDocs');
    
    if (viewMoreBtn && moreDocs) {  // Add null check
        viewMoreBtn.addEventListener('click', function() {
            moreDocs.classList.toggle('show');
            viewMoreBtn.classList.toggle('active');
            
            if (moreDocs.classList.contains('show')) {
                viewMoreBtn.innerHTML = 'View Less <i class="fa fa-angle-down"></i>';
            } else {
                viewMoreBtn.innerHTML = 'View More <i class="fa fa-angle-down"></i>';
            }
        });
    }
});