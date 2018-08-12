//Slider and carousel

$(document).ready(function () {
    $('.owl-carousel.carousel-main-slider').owlCarousel({
        loop:false,
        mouseDrag: false,
        touchDrag: true,
        dots: true,
        nav: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1

            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    if( $( "#price-slider" ).length > 0 ) {

        $( "#price-slider" ).slider({
            range: true,
            values: [ 17, 67 ]
        });

    }

    $('.owl-carousel.slider-1').owlCarousel({
        loop:false,
        mouseDrag: false,
        touchDrag: true,
        dots: false,
        nav: true,
        navContainer: ".nav_el",
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1

            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    $('.owl-carousel.plan_slider').owlCarousel({
        loop:false,
        mouseDrag: false,
        touchDrag: true,
        dots: true,
        nav: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1

            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

});



//Active Class in menu

var menuActiveItem = (function() {
    var menuItems   = $('.menu > li > a');
    var activeClass = "active";

    return {
        addActiveClass : function() {
            var _this = this;
            menuItems.click(function () {
                var linkLocation = location.href;
                var link = this.href;
                if(linkLocation == link) {
                    _this.removeActiveClass();
                    $(this).addClass(activeClass);
                }
            });
        },
        removeActiveClass : function() {
            menuItems.removeClass(activeClass);
        }
    }
}());

$(function() {
    menuActiveItem.addActiveClass();
});